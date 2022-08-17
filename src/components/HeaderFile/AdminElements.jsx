import React from 'react'
import { Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import navLinkNavigation from '../functions/HandleClickNavigator'
import { Dropdown } from 'react-bootstrap'

function AdminElements() {
const navigate = navLinkNavigation(useNavigate())
const { t, i18n } = useTranslation()

  return (
    <>
    <Nav.Link onClick={()=>navigate('/admin')}>{t("Admin")}</Nav.Link>

    <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {t("Drons")}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item onClick={()=>navigate('/drons')}>{t("InspectDrons")}</Dropdown.Item>
            <Dropdown.Item onClick={()=>navigate('/drons_on_tasks(user)')}>{t("InspectDronsOnTasks")}</Dropdown.Item>
            <Dropdown.Item onClick={()=>navigate('/statistic')}>{t("DronOnTaskStatistic")}</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    </>
    )
}

export default AdminElements