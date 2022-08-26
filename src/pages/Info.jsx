import React from 'react'
import { Card, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Info() {
  const { t, i18n } = useTranslation()

  return (
    <Container>
      <Card className='text-center m-2'>
        <h2>{t("InfoHead")}</h2>
        <Card className='text-center'>
        <h5 className='m-2'>{t("InfoName")}</h5>
        <h5 className='m-2'>{t("InfoDate")}</h5>
        <h5 className='m-2'>{t("InfoText")}</h5>
      </Card>
      </Card>
    </Container>  )
}

export default Info