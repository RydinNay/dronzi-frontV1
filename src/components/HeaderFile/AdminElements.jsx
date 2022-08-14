import React from 'react'
import { Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import navLinkNavigation from '../functions/HandleClickNavigator'
import { Dropdown } from 'react-bootstrap'

function AdminElements() {
const navigate = navLinkNavigation(useNavigate())
  return (
    <>
    <Nav.Link onClick={()=>navigate('/admin')}>Admin</Nav.Link>

    <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Drons
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item onClick={()=>navigate('/drons')}>Inspect Drons</Dropdown.Item>
            <Dropdown.Item onClick={()=>navigate('/drons_on_tasks(user)')}>Inspect Drons On Tasks</Dropdown.Item>
            <Dropdown.Item onClick={()=>navigate('/statistic')}>Dron On Task Statistic</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    </>
    )
}

export default AdminElements