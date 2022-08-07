import React, { useEffect } from 'react'
import { Container, Button, Card } from 'react-bootstrap'
import TaskChange from './TaskChange'
import TaskAdd from './TaskAdd'
import TasksTable from './TaskTable'
import axios from 'axios'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function Tasks() {
  const baseURL = "http://127.0.0.1:5000/Tasks/select"
  const dispatch = useDispatch();
  const [tasks, setTasks] = React.useState(null);

  const { selectedTasks } = useSelector(state => ({
    selectedTasks: state.drons.selectedTask
  }), shallowEqual)

  useEffect(() => {
    axios.get(baseURL, {params:{"clientid": 1}}).then((response) => {
        setTasks(response.data)
        //console.log(response.data)
      })
    
  }, [])



  const refreshTable=() => {

    for(var i=0; i<tasks.length; ++i)
    {
        var boxes = document.getElementById(tasks[i].Dronid);
        boxes.checked = false;  
    }
    axios.get(baseURL, {params:{"clientid": 1}}).then((response) => {
        setTasks(response.data);
        dispatch({
          type:'PUT_SELECTED_TAKS',
          payload: []
        })
        })   
    }


  const [changeFormIsVisible, setChangeFormVisible] = React.useState(false)
  const [addFormIsVisible, setAddFormVisible] = React.useState(false)

  const deleteDron = () =>{
    for(var i=0; i < selectedTasks.length; ++i){
      //console.log(selectedDrons[i])
      console.log(tasks.find(id => id.Taskid === selectedTasks[i]).Dronid)
      axios.delete('http://127.0.0.1:5000/Tasks/remove', {params:{"taskid": tasks.find(id => id.Dronid === selectedTasks[i]).Dronid}}, {headers:{"Content-Type": "application/json"}}).then((response) => {
        console.log(response.data)
      })
    }

      refreshTable()
  }
  if (!tasks) return null;

  return (
    <Container>
      <Card className="">
        <Container className="m-2 me-auto ms-auto">

          <TasksTable allTasks={tasks}/>

        </Container>

        <Container className="ms-auto">
          <Button variant="secondary" onClick={() => (setChangeFormVisible(true))} className="ms-auto me-2">
              Edit selected dron
          </Button>

          <Button variant="secondary" onClick={() => (setAddFormVisible(true))} className="ms-auto me-2">
              Add dron
          </Button>

          <Button variant="secondary" onClick={() => (deleteDron())} className="ms-auto me-2">
              Delete selected drons
          </Button>
        </Container>

        <Button variant="secondary" onClick={() => (refreshTable())} className="m-3">
            Refresh Table
        </Button>
        
      </Card>

      <TaskChange show={changeFormIsVisible} onHide={() => setChangeFormVisible(false)} allTasks={tasks}/>

      <TaskAdd show={addFormIsVisible} onHide={() => setAddFormVisible(false)}/>


    </Container>  
    )
}
export default Tasks