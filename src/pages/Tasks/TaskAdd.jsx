import React from 'react'
import axios from 'axios'
import { Button, Form, Modal,Card, Container } from 'react-bootstrap'

function TaskAdd({show, onHide, user}) {
    const [description, setDescription] = React.useState(null)
    const [distants, setDistants] = React.useState(null)
    const [weight, setWeight] = React.useState(null)

    const baseURL = "http://127.0.0.1:5000/Tasks/add";

    let catcherrors = null
    
    const addTask=()=>{

        if(!isNaN(weight) && !isNaN(distants)){

        axios.post(baseURL, 
            {"desc":description, "dist":distants, "weight":weight, "clientid":user.id}, {headers:{"Content-Type": "application/json"}} 
            ).
            then((response) => {
            
            catcherrors = (response.data);
            console.log(catcherrors)
            })
            .catch((error) => {
            console.log(error)
        });
        onHide()
        }else
            console.log('is not int', description)
        
    }
    

  return (
    <Modal  onHide={onHide}
    size="lg"
    show={show}
        
    aria-labelledby="example-modal-sizes-title-lg"
    >
        <Modal.Header closeButton onClick={onHide}>
            <Modal.Title>Task Add Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Card className="">
                <Container className="m-1 me-auto ms-auto">
                <Form>
                    <Form.Group className="mb-3" controlId="formDronModle">
                        <Form.Label>Task description</Form.Label>
                        <Form.Control type="text" placeholder="Task Description" onChange={e => setDescription(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEnergyCap">
                        <Form.Label>EnergyCapacity</Form.Label>
                        <Form.Control type="text" placeholder="How long can dron fly" onChange={e => setDistants(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLiftingCap">
                        <Form.Label>LiftingCapacity</Form.Label>
                        <Form.Control type="text" placeholder="How mach can lift this dron" onChange={e => setWeight(e.target.value)}/>
                    </Form.Group>
                    </Form>
                </Container>
                
            </Card>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={() => addTask()}>
                Add task
            </Button>
            
        </Modal.Footer>
    </Modal>  
    )
}

export default TaskAdd