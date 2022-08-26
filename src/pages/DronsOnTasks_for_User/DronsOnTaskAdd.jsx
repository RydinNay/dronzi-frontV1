import React from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next';
import { Button, Modal, Card, Toast } from 'react-bootstrap'
import DronTable from './DronTable';
import Task from './TaskTable';
import Toasts from './Toasts';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function DronsOnTaskAdd({show, onHide, drons, tasks, user}) {
    const dispatch = useDispatch();

    const [showA, setShowA] = React.useState(false);

    const toggleShowA = () => setShowA(!showA);
    //const baseURL = "http://127.0.0.1:5000/Drons_on_Tasks/select/user";

    const { t, i18n } = useTranslation()

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
        if(selectedDron.length != 0 || selectedTask.length != 0){
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
        }else{
            setShowA()
        }
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
        setShowA(false)
        refreshTable()
        onHide()
    }

    //console.log(catcherrors)

  return (
    <Modal  onHide={Close}
    size="xl"
    show={show}
    backdrop="static"
    aria-labelledby="example-modal-sizes-title-lg"
    >
        <Modal.Header closeButton onClick={Close}>
            <Modal.Title>{t("AddDronsOnTasksForm")}</Modal.Title>
            <Toast show={showA} onClose={toggleShowA}>
                <Toast.Body>There are no selected drons or tasks</Toast.Body>
            </Toast>
        </Modal.Header>
        <Modal.Body>
            <Card>

                <Task task={task}/>
                <DronTable dron={dron}/>

            </Card>
            
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={() => refreshTable()}>
                {t("RefreshTable")}
            </Button>
            <Button variant="primary" onClick={() => addDron()}>
                {t("AddSelectedDronOnSelectedTasks")}
            </Button>
            <Button variant="primary" onClick={() => autoAddDron()}>
                {t("AddDronsOnAllTasks")}
            </Button>
            
        </Modal.Footer>
    </Modal>  
    )
}

export default DronsOnTaskAdd