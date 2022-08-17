import React, { useEffect } from 'react'
import { Container, Button, Card } from 'react-bootstrap'
import AdminAdd from './AdminAdd'
import AdminTable from './AdminTable';
import { useTranslation } from 'react-i18next';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

function Admin() {
  const baseURL = "http://127.0.0.1:5000/Dron_Base"

  const { user } = useSelector(state => ({
    user: state.users.user
  }), shallowEqual)
  
  const { t, i18n } = useTranslation()

  //console.log(selectedDron)

  const dispatch = useDispatch();

  const [droneBase, setDronBase] = React.useState(null);

  const [users, setUser] = React.useState(null);

  useEffect(() => {
    axios.get(baseURL, {params:{"baseid": user.dron_baseid}}).then((response) => {
        setDronBase(response.data)
    })
    
  }, [])

  const { selectedUsers } = useSelector(state => ({
    selectedUsers: state.users.selectedUser
  }), shallowEqual)

  useEffect(() => {
    
    axios.get("http://127.0.0.1:5000/Users/all", {params:{"baseid": user.dron_baseid}}).then((response) => {
        setUser(response.data)
    })
    
    
  }, [])

  const refreshTable=() => {
    
      for(var i=0; i<users.length; ++i)
      {
          var boxes = document.getElementById(users[i].Userid);
          boxes.checked = false;  
      }
      axios.get(baseURL, {params:{"baseid": user.dron_baseid}}).then((response) => {
        setDronBase(response.data)
      })

      axios.get("http://127.0.0.1:5000/Users/all", {params:{"baseid": user.dron_baseid}}).then((response) => {
        setUser(response.data)
      })

    
      dispatch({
        type:'SELECT_USER',
        payload: []
      })
        
  }

  const [addFormIsVisible, setAddFormVisible] = React.useState(false)


  const deleteUser = () =>{
    for(var i=0; i < selectedUsers.length; ++i){
      //console.log(dronOnTask.find(id => id.DronTaskid === selectedDron[i]))
      axios.delete('http://127.0.0.1:5000/Users/remove', {params:{"Userid": users.find(id => id.Userid === selectedUsers[i]).Userid}}, {headers:{"Content-Type": "application/json"}}).then((response) => {
        console.log(response.data)
      })
    }

    refreshTable()
  }

  if (!droneBase ) return null;
  if (!users) return null

  /*console.log(dronOnTask)
  console.log(tasks)
  console.log(drons)
  */

  return (
    <Container>
      <Card className="">
        <Container className="m-2 me-auto ms-auto">

          <AdminTable droneBase={droneBase} users={users}/>

        </Container>

        <Container className="ms-auto">

          <Button variant="secondary" onClick={() => (setAddFormVisible(true))} className="ms-auto me-2">
              {t("AddDbOnTask")}
          </Button>

          <Button variant="secondary" onClick={() => (deleteUser())} className="ms-auto me-2">
              {t("DeleteSelectedDbOnTask")}
          </Button>
        </Container>

        <Button variant="secondary" onClick={() => (refreshTable())} className="m-3">
          {t("RefreshTable")}
        </Button>
        
      </Card>

      <AdminAdd show={addFormIsVisible} onHide={() => setAddFormVisible(false)} user={user}/>

    </Container>  
    )
}

export default Admin