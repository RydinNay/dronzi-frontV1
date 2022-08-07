import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import navLinkNavigation from '../functions/HandleClickNavigator'

function UserElements() {
    const navigate = navLinkNavigation(useNavigate())

  return (
    <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Drons
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item onClick={()=>navigate('/drons')}>Inspect Drons</Dropdown.Item>
            <Dropdown.Item onClick={()=>navigate('/drons_on_tasks')}>Inspect Drons On Tasks</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>  )
}

export default UserElements