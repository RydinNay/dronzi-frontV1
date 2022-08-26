import React, { useEffect } from 'react'
import { Container, Button, Card } from 'react-bootstrap'
import DronsChange from './DronsChange'
import DronsAdd from './DronsAdd'
import DronsTable from './DronsTable'
import axios from 'axios'
import { useTranslation } from 'react-i18next';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';


function Drons() {
  const baseURL = "http://127.0.0.1:5000/Dron"
  const dispatch = useDispatch();
  const [drons, setDrons] = React.useState(null);
  const { t, i18n } = useTranslation()

  const { user } = useSelector(state => ({
    user: state.users.user
  }), shallowEqual)

  const { selectedDrons } = useSelector(state => ({
    selectedDrons: state.drons.selectedDron
  }), shallowEqual)

  useEffect(() => {
    axios.get(baseURL, {params:{"baseid": user.dron_baseid}}).then((response) => {
        setDrons(response.data)
        //console.log(response.data)
      })
    
  }, [])

  const refreshTable=() => {

    for(var i=0; i<drons.length; ++i)
    {
        var boxes = document.getElementById(drons[i].Dronid);
        boxes.checked = false;  
    }
    axios.get(baseURL, {params:{"baseid": user.dron_baseid}}).then((response) => {
        setDrons(response.data);
        dispatch({
          type:'PUT_SELECTED_DRONS',
          payload: []
        })
        })   
    }


  const [changeFormIsVisible, setChangeFormVisible] = React.useState(false)
  const [addFormIsVisible, setAddFormVisible] = React.useState(false)

  const deleteDron = () =>{
    for(var i=0; i < selectedDrons.length; ++i){
      //console.log(selectedDrons[i])
      console.log(drons.find(id => id.Dronid === selectedDrons[i]).Dronid)
      axios.delete('http://127.0.0.1:5000/Dron', {params:{"dronid": drons.find(id => id.Dronid === selectedDrons[i]).Dronid}}, {headers:{"Content-Type": "application/json"}}).then((response) => {
        console.log(response.data)
      })
    }

      refreshTable()
  }
  if (!drons) return null;



  return (
    <Container>
      <Card className="">
        <Container className="m-2 me-auto ms-auto">

          <DronsTable allDrons={drons}/>

        </Container>

        <Container className="ms-auto">
          <Button variant="secondary" onClick={() => (setChangeFormVisible(true))} className="ms-auto me-2">
              {t("EditSelectedDron")}
          </Button>

          <Button variant="secondary" onClick={() => (setAddFormVisible(true))} className="ms-auto me-2">
              {t("AddDron")}
          </Button>

          <Button variant="secondary" onClick={() => (deleteDron())} className="ms-auto me-2">
              {t("DeleteSelectedDrons")}
          </Button>
        </Container>

        <Button variant="secondary" onClick={() => (refreshTable())} className="m-3">
            {t("RefreshTable")}
        </Button>
        
      </Card>

      <DronsChange show={changeFormIsVisible} onHide={() => setChangeFormVisible(false)} allDrons={drons}/>

      <DronsAdd show={addFormIsVisible} onHide={() => setAddFormVisible(false)} user={user}/>


    </Container>  
    )
}

export default Drons