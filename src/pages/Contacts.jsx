import React from 'react'
import { Card, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Contacts() {
  const { t, i18n } = useTranslation()

  return (
    <Container>
      <Card className='text-center m-2'>
        <h2>{t("HereYou")}</h2>
        <Card className='text-center'>
        <h5 className='m-2'>{t("OurEmail")}</h5>
        <h5 className='m-2'>{t("ContactName")}</h5>
        <h5 className='m-2'>{t("ContactTel")}</h5>
      </Card>
      </Card>
    </Container>
  )
}

export default Contacts