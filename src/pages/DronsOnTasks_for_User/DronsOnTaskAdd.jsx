import React from 'react'
import axios from 'axios'
import { Button, Modal, Card } from 'react-bootstrap'
import DronTable from './DronTable';
import Task from './TaskTable';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function DronsOnTaskAdd({show, onHide, drons, tasks, user}) {
    const dispatch = useDispatch();

    //const baseURL = "http://127.0.0.1:5000/Drons_on_Tasks/select/user";

    const handleClick = () => {
        
    }

    let catcherrors = null

    const dron = drons.filter(isOcu => isOcu.IsOccupied === false)
    const task = tasks.filter(isOcu => isOcu.IsOccupied === false)

    //console.log(dron)
    //console.log(task)

    const { selectedDron } = useSelector(state => ({
        selectedDron: state.drons_on_tasks.selectedDron
    }), shallowEqual)

    const { selectedTask } = useSelector(state => ({
        selectedTask: state.drons_on_tasks.selectedTask
    }), shallowEqual)

    const refreshTable=() => {
        for(var i=0; i<dron.length; ++i)
        {
            var boxes = document.getElementById(dron[i].Dronid);
            boxes.checked = false;  
        }

        for(var i=0; i<task.length; ++i)
        {
            var boxes = document.getElementById(task[i].Taskid);
            boxes.checked = false;  
        }

        dispatch({
        type:'PUT_SELECTED_DRONS',
        payload: []
        })

        dispatch({
        type:'PUT_SELECTED_TASK',
        payload: []
        })
    }

    const addDron=()=>{
        
        axios.post("http://127.0.0.1:5000/Drons_on_Tasks/add/common", 
            {"drons": selectedDron, "tasks": selectedTask, "baseid":user.dron_baseid}, {headers:{"Content-Type": "application/json"}} 
            ).
            then((response) => {
            
            catcherrors = (response.data);
            console.log(catcherrors)
            })
            .catch((error) => {
            console.log(error)
        });
        Close()
        
    }

    const autoAddDron=()=>{
        axios.post("http://127.0.0.1:5000/Drons_on_Tasks/add/auto", 
            {"baseid":user.dron_baseid}, {headers:{"Content-Type": "application/json"}} 
            ).
            then((response) => {
            
            catcherrors = (response.data);
            console.log(catcherrors)
            })
            .catch((error) => {
            console.log(error)
        });
        Close()
    }

    const Close=()=>{
        refreshTable()
        onHide()
    }

    //console.log(catcherrors)

  return (
    <Modal  onHide={Close}
    size="xl"
    show={show}
        
    aria-labelledby="example-modal-sizes-title-lg"
    >
        <Modal.Header closeButton onClick={Close}>
            <Modal.Title>Add drons on tasks form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Card>

                <Task task={task}/>
                <DronTable dron={dron}/>

            </Card>

        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={() => refreshTable()}>
                Refresh Table
            </Button>
            <Button variant="primary" onClick={() => addDron()}>
                Add selected dron on selected tasks
            </Button>
            <Button variant="primary" onClick={() => autoAddDron()}>
                Add drons on all tasks
            </Button>

        </Modal.Footer>
    </Modal>  
    )
}

export default DronsOnTaskAdd