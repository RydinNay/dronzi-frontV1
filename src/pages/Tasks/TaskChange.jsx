import React from 'react'
import { useTranslation } from 'react-i18next';
import { Button, Modal, Table, Card, Container, FormControl } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function TaskChange({show, onHide, allTasks}) {
    const dispatch = useDispatch();

    const { selectedTasks } = useSelector(state => ({
        selectedTasks: state.tasks.selectedTask
    }), shallowEqual)

    const { t, i18n } = useTranslation()

    const Close=(() => {
        
        dispatch({
            type:'PUT_SELECTED_TAKS',
            payload: []
          })
    
        for(var i=0; i<allTasks.length; ++i)
        {
            var boxes = document.getElementById(allTasks[i].Taskid);
            boxes.checked = false;  
        }
        onHide()
    })


    const AplyChanges=(() => {
        for(var i = 0; i < selectedTasks.length; ++i){
            //console.log(allDrons.find(id => id.Dronid === formId))
            axios.put('http://127.0.0.1:5000/Dron', {dronid: allTasks.find(id => id.Taskid === selectedTasks[i]).Taskid, ecapacity: allTasks.find(id => id.Taskid === selectedTasks[i]).Dist, lcapacity: allTasks.find(id => id.Taskid === selectedTasks[i]).Weight}).then((response) => {
                console.log(response.data)
            }
            )
        }
        Close()
    })

    
    const handleClick = () => {

        console.log(selectedTasks)    
    }

    //const [drons, setDrons] = React.useState(make_users)

    const setEdits=((value, formId, edit) =>{
        console.log(allTasks.find(id => id.Taskid === formId))
        switch(edit){
            case('dist'):allTasks.find(id => id.Taskid === formId).Dist = value 
                break
            
            case('weight'):allTasks.find(id => id.Taskid === formId).Weight = value  
                break

        }
        console.log(allTasks.find(id => id.Taskid === formId))
    })


    //console.log(selectedTasks)
    //console.log(allTasks)

    return (
    <Modal  onHide={Close}
    size="xl"
    show={show}
        
    aria-labelledby="example-modal-sizes-title-xl"
    >
        <Modal.Header closeButton onClick={Close}>
            <Modal.Title>Drons Change Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Card className="">
                <Container className="m-1 me-auto ms-auto">
                    <Table striped bordered hover variant="dark" className="m-2 me-auto ms-auto">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Distans</th>
                                <th>Weight Capacity</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                        {(selectedTasks)?
                            selectedTasks.map((taskId) => (
                            <tr key={allTasks.find(id => id.Taskid === taskId).Taskid}>
                                <td>{allTasks.find(id => id.Taskid === taskId).Taskid}</td>
                                <td><FormControl type="text" placeholder={allTasks.find(id => id.Taskid === taskId).Dist} defaultValue={allTasks.find(id => id.Taskid === taskId).Dist} onChange={e => setEdits(e.target.value, taskId, 'ecap')}/></td>
                                <td><FormControl type="text" placeholder={allTasks.find(id => id.Taskid === taskId).Weight} defaultValue={allTasks.find(id => id.Taskid === taskId).Weight} onChange={e => setEdits(e.target.value, taskId, 'lcap')}/></td>
                                <td>{allTasks.find(id => id.Taskid === taskId).TaskDesc}</td>
                            </tr>
                            ))
                            :
                            <h1>There are no selected drons</h1>
                        }
                        </tbody>
                    </Table>
                </Container>
                <Button variant="secondary" onClick={handleClick} className="m-2 p-2">
                    Refresh Table
                </Button>
            </Card>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={AplyChanges}>
                Apllay changes
            </Button>
        </Modal.Footer>
    </Modal>
    )  
}

export default TaskChange