import React, { useEffect } from 'react'
import { Container, Button, Card } from 'react-bootstrap'
import DronsOnTasksTable_for_Client from './DronsOnTaskTable_for_Client';
import { useDispatch } from 'react-redux';
import axios from 'axios'

function DronsOnTasks_for_Client() {
    const baseURL = "http://127.0.0.1:5000/Drons_on_Tasks/select/client"

    /*const { selectedDron } = useSelector(state => ({
      selectedDron: state.drons_on_tasks.selectedDronsOnTasks
    }), shallowEqual)*/
  
    //console.log(selectedDron)
  
    const dispatch = useDispatch();
  
    const [dronOnTask, setDronOnTask] = React.useState(null);
  
    const [tasks, setTasks] = React.useState(null);
  
    const [drons, setDrons] = React.useState(null);

    useEffect(() => {
      axios.get(baseURL, {params:{"clientid": 1}}).then((response) => {
          setDronOnTask(response.data)
      })
      
    }, [])
    //console.log(dronOnTask)
    //console.log(dronForClient)

    useEffect(() => {
      axios.get("http://127.0.0.1:5000/Tasks/select", {params:{"clientid": 1}}).then((response) => {
          setTasks(response.data)
      }) 
    }, [])
  
    useEffect(() => {
      axios.get("http://127.0.0.1:5000/Dron/select_for_client", {params:{"clientid":1}}).then((response) => {
        setDrons(response.data)
      })
    }, [])
    console.log(dronOnTask)
    console.log(tasks)
    console.log(drons)
    const refreshTable=() => {
      
        for(var i=0; i<dronOnTask.length; ++i)
        {
            var boxes = document.getElementById(dronOnTask[i].DronTaskid);
            boxes.checked = false;  
        }
        axios.get(baseURL, {params:{"clientid": 1}}).then((response) => {
            setDronOnTask(response.data);
        })
  
        axios.get("http://127.0.0.1:5000/Tasks/select",  {params:{"clientid": 1}}).then((response) => {
          setTasks(response.data)
        })
  
        axios.get("http://127.0.0.1:5000/Dron/select_for_client", {params:{"clientid":1}}).then((response) => {
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
              Refresh Table
          </Button>
          
        </Card>
  
      </Container>  
    )
  
  
}

export default DronsOnTasks_for_Client