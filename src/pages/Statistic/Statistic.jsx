import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Container, Button, Card } from 'react-bootstrap'
import StatisticTable from './StatisticTable';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

function Statistic() {

    const { user } = useSelector(state => ({
        user: state.users.user
      }), shallowEqual)
  
    const { t, i18n } = useTranslation()

    const [statisticDronOnTask, setStatisticDronOnTask] = React.useState(null);

    useEffect(() => {
      axios.get("http://127.0.0.1:5000/Statistic", {params:{"baseid": user.dron_baseid}}).then((response) => {
          setStatisticDronOnTask(response.data.data)
      })
      
    }, [])
    
    const refreshTable=() => {
        axios.get("http://127.0.0.1:5000/Statistic", {params:{"baseid": user.dron_baseid}}).then((response) => {
            setStatisticDronOnTask(response.data.data);
        })
      }
      
    if (!statisticDronOnTask) return null;
  
    
  
    return (
      <Container>
        <Card className="">
          <Container className="m-2 me-auto ms-auto">
  
            <StatisticTable statistic={statisticDronOnTask}/>
  
          </Container>
  
          <Button variant="secondary" onClick={() => (refreshTable())} className="m-3">
            {t("RefreshTable")}
          </Button>
          
        </Card>
  
      </Container>  
    )
  
  
}

export default Statistic