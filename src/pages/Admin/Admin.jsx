import React, { useEffect } from 'react'
import { Container, Button, Card } from 'react-bootstrap'
import AdminAdd from './AdminAdd'
import AdminTable from './AdminTable';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

function Admin() {
  const baseURL = "http://127.0.0.1:5000/Dron_Base"

  const { selectedDron } = useSelector(state => ({
    selectedDron: state.drons_on_tasks.selectedDronsOnTasks
  }), shallowEqual)

  //console.log(selectedDron)

  const dispatch = useDispatch();

  const [droneBase, setDronBase] = React.useState(null);

  const [users, setUser] = React.useState(null);

  useEffect(() => {
    axios.get(baseURL, {params:{"baseid": 1}}).then((response) => {
        setDronBase(response.data)
    })
    
  }, [])

  useEffect(() => {
    
    axios.get("http://127.0.0.1:5000/Users/all", {params:{"baseid": 1}}).then((response) => {
        setUser(response.data)
    })
    
    
  }, [])

  console.log(droneBase)
  console.log(users)

  const refreshTable=() => {
    
      for(var i=0; i<droneBase.length; ++i)
      {
          var boxes = document.getElementById(droneBase[i].DronTaskid);
          boxes.checked = false;  
      }
      axios.get(baseURL, {params:{"baseid": 1}}).then((response) => {
        setDronBase(response.data)
      })

      axios.get("http://127.0.0.1:5000/Users/all", {params:{"baseid": 1}}).then((response) => {
        setUser(response.data)
      })

    
      dispatch({
        type:'PUT_SELECTED_DRONS_ON_TASKS',
        payload: []
      })
        
  }

  const [addFormIsVisible, setAddFormVisible] = React.useState(false)


  const deleteDron = () =>{
    for(var i=0; i < selectedDron.length; ++i){
      //console.log(dronOnTask.find(id => id.DronTaskid === selectedDron[i]))
      axios.delete('http://127.0.0.1:5000/Dron_Base', {params:{"dron_on_taskid": droneBase.find(id => id.DronTaskid === selectedDron[i]).DronTaskid}}, {headers:{"Content-Type": "application/json"}}).then((response) => {
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
              Add dron base on task
          </Button>

          <Button variant="secondary" onClick={() => (deleteDron())} className="ms-auto me-2">
              Delete selected dron base on task
          </Button>
        </Container>

        <Button variant="secondary" onClick={() => (refreshTable())} className="m-3">
            Refresh Table
        </Button>
        
      </Card>

      <AdminAdd show={addFormIsVisible} onHide={() => setAddFormVisible(false)} droneBase={droneBase} users={users}/>

    </Container>  
    )
}

export default Admin