import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import navLinkNavigation from '../functions/HandleClickNavigator'

function ClientElements() {
    const navigate = navLinkNavigation(useNavigate())
    const { t, i18n } = useTranslation()

  return (
    <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {t("Tasks")}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item onClick={()=>navigate('/tasks')}>{t("InspectTasks")}</Dropdown.Item>
            <Dropdown.Item onClick={()=>navigate('/drons_on_tasks(client)')}>{t("InspectDronsOnTasks")}</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default ClientElements