import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import userStore from '../../store/UserStore'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function LoginModalView({show, onHide}) {
  const dispatch = useDispatch()
  const [CheckIsUserGenderFilter, setCheckIsUserGenderValue] = React.useState(false);
  const [CheckIsAdminGenderFilter, setCheckIsAdminGenderValue] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState()
  const [userPass, setUserPass] = React.useState()

  const { user } = useSelector(state => ({
    selectedDron: state.users.users
  }), shallowEqual)

    const handleClick = () => {
        userStore.setIsAuth(true)
        if(CheckIsUserGenderFilter){
          userStore.setIsUser(true)
          if(CheckIsAdminGenderFilter){
              userStore.setIsAdmin(true)
          }
        }

        dispatch({
          type:'PUT_USERS',
          payload: user
        })

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