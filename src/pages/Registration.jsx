import React from 'react'
import { Button, Card, Container, Form, FormControl, InputGroup, Nav } from 'react-bootstrap'

function Registration(isAdmin) {
  return (
    <Container 
        className="d-flex justify-content-center align-item-center"
        style={{height: window.innerHeight - 55}}
    >
        <Card style={{width:600}} className="p-5">
            <h2 className="ms-auto me-auto">Registration</h2>
            <Form className="d-flex flex-column p-3">
                <FormControl 
                    placeholder="Enter your Email"
                    
                />
                    
            </Form>
            <Form className="d-flex flex-column p-3">
                <FormControl 
                    placeholder="Enter your Password"
                    
                />
                
            </Form>

            
            <Form className="d-flex flex-column p-3">
                <FormControl 
                    placeholder="Repeat Password"
                    
                />
                
            </Form>
            
            
            <Button variant="outline-dark" className="p-2 pe-5 ms-auto me-3">
                Зарегистрироватсья
            </Button>
        </Card>
    </Container>
  )
}

export default Registration