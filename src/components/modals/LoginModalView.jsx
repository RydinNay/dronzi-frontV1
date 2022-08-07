import { observer } from 'mobx-react-lite'
import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import userStore from '../../store/UserStore'

function LoginModalView({show, onHide}) {
  const [CheckIsUserGenderFilter, setCheckIsUserGenderValue] = React.useState(false);
  const [CheckIsAdminGenderFilter, setCheckIsAdminGenderValue] = React.useState(false);

    const handleClick = () => {
        userStore.setIsAuth(true)
        if(CheckIsUserGenderFilter){
          userStore.setIsUser(true)
          if(CheckIsAdminGenderFilter){
              userStore.setIsAdmin(true)
          }
        }

        onHide()
    }

    

  return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton onClick={onHide}>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter your Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    //autoFocus
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Enter your Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="pass"
                    //autoFocus
                />
                </Form.Group>
            </Form>
            <Form>
                
                <Form.Check 
                    type="checkbox"
                    id={`1`}
                    label={`Is User`}
                    value={CheckIsUserGenderFilter}
                    onChange={(e)=>{setCheckIsUserGenderValue(e.target.checked)}}
                />
                <Form.Check 
                    type="checkbox"
                    id={`2`}
                    label={`Is Admin`}
                    value={CheckIsAdminGenderFilter}
                    onChange={(e)=>{setCheckIsAdminGenderValue(e.target.checked)}}
                    
                />

                
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            change this later
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default LoginModalView