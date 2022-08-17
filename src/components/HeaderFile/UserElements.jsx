import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import navLinkNavigation from '../functions/HandleClickNavigator'

function UserElements() {
    const navigate = navLinkNavigation(useNavigate())
    const { t, i18n } = useTranslation()

  return (
    <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {t("Drons")}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item onClick={()=>navigate('/drons')}>{t("InspectDrons")}</Dropdown.Item>
            <Dropdown.Item onClick={()=>navigate('/drons_on_tasks(user)')}>{t("InspectDronsOnTasks")}</Dropdown.Item>
            <Dropdown.Item onClick={()=>navigate('/statistic')}>{t("DronOnTaskStatistic")}</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>  )
}

export default UserElements