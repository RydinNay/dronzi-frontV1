import React, { useEffect } from 'react'
import { Container, Button, Card } from 'react-bootstrap'
import DronsOnTaskAdd from './DronsOnTaskAdd'
import { useTranslation } from 'react-i18next';
import DronsOnTasksTable_for_User from './DronsOnTaskTable_for_User';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

function DronsOnTasks_for_User() {
  const baseURL = "http://127.0.0.1:5000/Drons_on_Tasks/select/user"

  const { t, i18n } = useTranslation()

  const { selectedDron } = useSelector(state => ({
    selectedDron: state.drons_on_tasks.selectedDronsOnTasks
  }), shallowEqual)

  const { user } = useSelector(state => ({
    user: state.users.user
  }), shallowEqual)

  const dispatch = useDispatch();

  const [dronOnTask, setDronOnTask] = React.useState(null);

  const [tasks, setTasks] = React.useState(null);

  const [drons, setDrons] = React.useState(null);

  useEffect(() => {
    axios.get(baseURL, {params:{"baseid": user.dron_baseid}}).then((response) => {
        setDronOnTask(response.data)
    })

    
  }, [])

  useEffect(() => {
    
    axios.get("http://127.0.0.1:5000/Tasks/select_for_user").then((response) => {
        setTasks(response.data)
    })
    
    
  }, [])


  useEffect(() => {
   
    axios.get("http://127.0.0.1:5000/Dron", {params:{"baseid":user.dron_baseid}}).then((response) => {
      setDrons(response.data)
    })
  }, [])

  const refreshTable=() => {
    
      for(var i=0; i<dronOnTask.length; ++i)
      {
          var boxes = document.getElementById(dronOnTask[i].DronTaskid);
          boxes.checked = false;  
      }
      axios.get(baseURL, {params:{"baseid": user.dron_baseid}}).then((response) => {
          setDronOnTask(response.data);
      })

      axios.get("http://127.0.0.1:5000/Tasks/select_for_user").then((response) => {
        setTasks(response.data)
      })

      axios.get("http://127.0.0.1:5000/Dron", {params:{"baseid":user.dron_baseid}}).then((response) => {
        setDrons(response.data)
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
      axios.delete('http://127.0.0.1:5000/Drons_on_Tasks/remove', {params:{"dron_on_taskid": dronOnTask.find(id => id.DronTaskid === selectedDron[i]).DronTaskid}}, {headers:{"Content-Type": "application/json"}}).then((response) => {
        console.log(response.data)
      })
    }

    refreshTable()
  }
  
  if (!dronOnTask ) return null;
  if (!tasks) return null
  if (!drons) return null;

  /*console.log(dronOnTask)
  console.log(tasks)
  console.log(drons)
  */

  return (
    <Container>
      <Card className="">
        <Container className="m-2 me-auto ms-auto">

          <DronsOnTasksTable_for_User dronOnTask={dronOnTask} tasks={tasks} drons={drons}/>

        </Container>

        <Container className="ms-auto">

          <Button variant="secondary" onClick={() => (setAddFormVisible(true))} className="ms-auto me-2">
              {t("AddDronOnTask")}
          </Button>

          <Button variant="secondary" onClick={() => (deleteDron())} className="ms-auto me-2">
              {t("DeleteSelectedDronOnTask")}
          </Button>
        </Container>

        <Button variant="secondary" onClick={() => (refreshTable())} className="m-3">
            {t("RefreshTable")}
        </Button>
        
      </Card>

      <DronsOnTaskAdd show={addFormIsVisible} onHide={() => setAddFormVisible(false)} drons={drons} tasks={tasks} user={user}/>

    </Container>  
    )
}

export default DronsOnTasks_for_User