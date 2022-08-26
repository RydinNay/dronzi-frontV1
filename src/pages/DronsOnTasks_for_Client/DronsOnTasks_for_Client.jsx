import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Container, Button, Card } from 'react-bootstrap'
import DronsOnTasksTable_for_Client from './DronsOnTaskTable_for_Client';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

function DronsOnTasks_for_Client() {
    const baseURL = "http://127.0.0.1:5000/Drons_on_Tasks/select/client"

    /*const { selectedDron } = useSelector(state => ({
      selectedDron: state.drons_on_tasks.selectedDronsOnTasks
    }), shallowEqual)*/
  
    //console.log(selectedDron)
  
    const { user } = useSelector(state => ({
      user: state.users.user
    }), shallowEqual)
  
    const { t, i18n } = useTranslation()

    const dispatch = useDispatch();
  
    const [dronOnTask, setDronOnTask] = React.useState(null);
  
    const [tasks, setTasks] = React.useState(null);
  
    const [drons, setDrons] = React.useState(null);

    useEffect(() => {
      axios.get(baseURL, {params:{"clientid": user.id}}).then((response) => {
          setDronOnTask(response.data)
      })
      
    }, [])
    //console.log(dronOnTask)
    //console.log(dronForClient)

    useEffect(() => {
      axios.get("http://127.0.0.1:5000/Tasks/select", {params:{"clientid": user.id}}).then((response) => {
          setTasks(response.data)
      }) 
    }, [])
  
    useEffect(() => {
      axios.get("http://127.0.0.1:5000/Dron/select_for_client", {params:{"clientid":user.id}}).then((response) => {
        setDrons(response.data)
      })
    }, [])
    console.log(dronOnTask)
    console.log(tasks)
    console.log(drons)


    const refreshTable=() => {
        axios.get(baseURL, {params:{"clientid": user.id}}).then((response) => {
            setDronOnTask(response.data);
        })
  
        axios.get("http://127.0.0.1:5000/Tasks/select",  {params:{"clientid": user.id}}).then((response) => {
          setTasks(response.data)
        })
  
        axios.get("http://127.0.0.1:5000/Dron/select_for_client", {params:{"clientid":user.id}}).then((response) => {
          setDrons(response.data)
        })
      
        dispatch({
          type:'PUT_SELECTED_DRONS_ON_TASKS',
          payload: []
        })
          
      }
      
    if (!dronOnTask) return null;
    if (!tasks) return null
    if (!drons) return null;
  
    console.log(dronOnTask)
    console.log(tasks)
    console.log(drons)
    
  
    return (
      <Container>
        <Card className="">
          <Container className="m-2 me-auto ms-auto">
  
            <DronsOnTasksTable_for_Client dronOnTask={dronOnTask} tasks={tasks} drons={drons}/>
  
          </Container>
  
          <Button variant="secondary" onClick={() => (refreshTable())} className="m-3">
              {t("RefreshTable")}
          </Button>
          
        </Card>
  
      </Container>  
    )
  
  
}

export default DronsOnTasks_for_Client