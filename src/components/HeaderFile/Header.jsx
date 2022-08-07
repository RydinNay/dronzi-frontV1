import React, { useState } from 'react'
import {Navbar, Nav, Button, Container, Dropdown} from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import userStore from '../../store/UserStore';
import {useNavigate} from 'react-router-dom'
import navLinkNavigation from '../functions/HandleClickNavigator'
import LoginModalView from '../modals/LoginModalView'
import RegistrationModalView from '../modals/RegistrationModalView'
import AdminElements from './AdminElements';
import UserElements from './UserElements';
import ClientElements from './ClientElements';

function Header () {
    const navigate = navLinkNavigation(useNavigate())
    
    //console.log(userStore)

    const [loginVisible, setLoginVisible] = useState(false)
    const [registrationVisible, setRegistrationVisible] = useState(false)



    const getElement = () => {
        /*const elements :{
            admin: <Nav.Link onClick={()=>navigate('/admin')}>Admin</Nav.Link>

        }
        */
        if(userStore.isAuth && userStore.isUser && userStore.isAdmin){
            return <AdminElements/>
        }
        else 
        if(userStore.isAuth && userStore.isUser){
            return <UserElements/>
        }else
        if(userStore.isAuth){
            return <ClientElements/>
        }
    }

    return (
        <Navbar bg="dark" variant="dark">   
                
                    <Container> 
                        <Nav className="me-auto">
                            <Nav.Link onClick={()=>navigate('/')}>Main</Nav.Link>
                            <Nav.Link onClick={()=>navigate('/contacts')}>Contacts</Nav.Link>
                            <Nav.Link onClick={()=>navigate('/info')}>Info</Nav.Link>
                            {getElement()}

                        </Nav>

                        <Nav className="ms-auto">
                        {userStore.isAuth?
                            (
                                <>
                                    <Button variant={"outline-light"} onClick={() => (userStore.setIsAuth(false), userStore.setIsUser(false, userStore.setIsAdmin(false)))}>Out</Button>
                                </>
                            )
                            :
                            (  <>
                                <Button variant={"outline-light"} onClick={() => setLoginVisible(true)}>Login</Button>
                                <Button variant={"outline-light"} onClick={()=> setRegistrationVisible(true)} className="ms-1">Registration</Button>
                                
                                <LoginModalView show={loginVisible} onHide={() => setLoginVisible(false)}/>
                                <RegistrationModalView show={registrationVisible} onHide={() => setRegistrationVisible(false)}/>

                                </>
                            )
                            
                        }
                        </Nav>
                            
                    </Container>
                
        </Navbar>
    )
}

export default observer(Header)