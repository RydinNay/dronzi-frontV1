import React, {useEffect, useState} from 'react'
import { Button, Form, Modal, Table, Card, Container, FormControl } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function TaskChange({show, onHide, allDrons}) {
    const dispatch = useDispatch();

    const { selectedTasks } = useSelector(state => ({
        selectedTasks: state.tasks.selectedTask
    }), shallowEqual)

    const Close=(() => {
        
        dispatch({
            type:'PUT_SELECTED_TAKS',
            payload: []
          })
    
        for(var i=0; i<allDrons.length; ++i)
        {
            var boxes = document.getElementById(allDrons[i].Dronid);
            boxes.checked = false;  
        }
        onHide()
    })


    const AplyChanges=(() => {
        for(var i = 0; i < selectedTasks.length; ++i){
            //console.log(allDrons.find(id => id.Dronid === formId))
            axios.put('http://127.0.0.1:5000/Dron', {dronid: allDrons.find(id => id.Dronid === selectedTasks[i]).Dronid, ecapacity: allDrons.find(id => id.Dronid === selectedTasks[i]).EnergyCapacity, lcapacity: allDrons.find(id => id.Dronid === selectedTasks[i]).LiftingCapacity}).then((response) => {
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
        console.log(allDrons.find(id => id.Dronid === formId))
        switch(edit){
            case('ecap'):allDrons.find(id => id.Dronid === formId).EnergyCapacity = value 
                break
            
            case('lcap'):allDrons.find(id => id.Dronid === formId).LiftingCapacity = value  
                break

        }
        console.log(allDrons.find(id => id.Dronid === formId))
    })


    console.log(selectedTasks)
    console.log(allDrons)

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
                                <th>Energy Capacity</th>
                                <th>Lifting Capacity</th>
                                <th>Dron Modle</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                        {(selectedTasks)?
                            selectedTasks.map((taskId) => (
                            <tr key={allDrons.find(id => id.Dronid === taskId).Dronid}>
                                <td>{allDrons.find(id => id.Dronid === taskId).Dronid}</td>
                                <td><FormControl type="text" placeholder={allDrons.find(id => id.Dronid === taskId).EnergyCapacity} defaultValue={allDrons.find(id => id.Dronid === taskId).EnergyCapacity} onChange={e => setEdits(e.target.value, taskId, 'ecap')}/></td>
                                <td><FormControl type="text" placeholder={allDrons.find(id => id.Dronid === taskId).LiftingCapacity} defaultValue={allDrons.find(id => id.Dronid === taskId).LiftingCapacity} onChange={e => setEdits(e.target.value, taskId, 'lcap')}/></td>
                                <td>{allDrons.find(id => id.Dronid === taskId).DronModle}</td>
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