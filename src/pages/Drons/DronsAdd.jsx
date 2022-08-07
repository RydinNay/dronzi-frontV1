import React from 'react'
import axios from 'axios'
import { Button, Form, Modal,Card, Container } from 'react-bootstrap'

function DronsAdd({show, onHide}) {
    const [modle, setModle] = React.useState(null)
    const [energy, setEnergy] = React.useState(null)
    const [lifting, setLifting] = React.useState(null)

    const baseURL = "http://127.0.0.1:5000/Dron";

    const parseToInt = () => {
        try{parseInt(modle)}
        catch{console.log('you enter the incorrect value')}
    }
    let catcherrors = null

    
    const addDron=()=>{
        

        if(!isNaN(energy) && !isNaN(lifting)){

        axios.post(baseURL, 
            {"modle":modle, "ecapacity":energy, "lcapacity":lifting, "baseid":1}, {headers:{"Content-Type": "application/json"}} 
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
            console.log('is not int', modle)
        
    }

    

  return (
    <Modal  onHide={onHide}
    size="lg"
    show={show}
        
    aria-labelledby="example-modal-sizes-title-lg"
    >
        <Modal.Header closeButton onClick={onHide}>
            <Modal.Title>Drons Add Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Card className="">
                <Container className="m-1 me-auto ms-auto">
                <Form>
                    <Form.Group className="mb-3" controlId="formDronModle">
                        <Form.Label>Dron Modle</Form.Label>
                        <Form.Control type="text" placeholder="Dron modle" onChange={e => setModle(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEnergyCap">
                        <Form.Label>EnergyCapacity</Form.Label>
                        <Form.Control type="text" placeholder="How long can dron fly" onChange={e => setEnergy(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLiftingCap">
                        <Form.Label>LiftingCapacity</Form.Label>
                        <Form.Control type="text" placeholder="How mach can lift this dron" onChange={e => setLifting(e.target.value)}/>
                    </Form.Group>
                    </Form>
                </Container>
                
            </Card>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={() => addDron()}>
                Add dron
            </Button>
            
        </Modal.Footer>
    </Modal>  
    )
}

export default DronsAdd