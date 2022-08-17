import React from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next';
import { Button, Form, Modal,Card, Container } from 'react-bootstrap'

function DronsAdd({show, onHide, user}) {
    const [modle, setModle] = React.useState(null)
    const [energy, setEnergy] = React.useState(null)
    const [lifting, setLifting] = React.useState(null)

    const baseURL = "http://127.0.0.1:5000/Dron";

    let catcherrors = null
    
    const addDron=()=>{
        

        if(!isNaN(energy) && !isNaN(lifting)){

        axios.post(baseURL, 
            {"modle":modle, "ecapacity":energy, "lcapacity":lifting, "baseid":user.dron_baseid}, {headers:{"Content-Type": "application/json"}} 
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

    const { t, i18n } = useTranslation()

  return (
    <Modal  onHide={onHide}
    size="lg"
    show={show}
        
    aria-labelledby="example-modal-sizes-title-lg"
    >
        <Modal.Header closeButton onClick={onHide}>
            <Modal.Title>{t("DronsAddForm")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Card className="">
                <Container className="m-1 me-auto ms-auto">
                <Form>
                    <Form.Group className="mb-3" controlId="formDronModle">
                        <Form.Label>{t("DronModle")}</Form.Label>
                        <Form.Control type="text" placeholder="Dron modle" onChange={e => setModle(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEnergyCap">
                        <Form.Label>{t("EnergyCapacity")}</Form.Label>
                        <Form.Control type="text" placeholder="How long can dron fly" onChange={e => setEnergy(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLiftingCap">
                        <Form.Label>{t("LiftingCapacity")}</Form.Label>
                        <Form.Control type="text" placeholder="How mach can lift this dron" onChange={e => setLifting(e.target.value)}/>
                    </Form.Group>
                    </Form>
                </Container>
                
            </Card>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={() => addDron()}>
                {t("AddDron")}
            </Button>
            
        </Modal.Footer>
    </Modal>  
    )
}

export default DronsAdd