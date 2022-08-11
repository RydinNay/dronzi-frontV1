import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import navLinkNavigation from '../functions/HandleClickNavigator'

function ClientElements() {
    const navigate = navLinkNavigation(useNavigate())

  return (
    <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Tasks
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item onClick={()=>navigate('/tasks')}>Inspect Tasks</Dropdown.Item>
            <Dropdown.Item onClick={()=>navigate('/drons_on_tasks(client)')}>Inspect Drons On Tasks</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default ClientElements