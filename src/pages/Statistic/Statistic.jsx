import React, { useEffect } from 'react'
import { Container, Button, Card } from 'react-bootstrap'
import StatisticTable from './StatisticTable';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

function Statistic() {

    const { user } = useSelector(state => ({
        user: state.users.user
      }), shallowEqual)
  
    const [statisticDronOnTask, setStatisticDronOnTask] = React.useState(null);

    useEffect(() => {
      axios.get("http://127.0.0.1:5000/Statistic", {params:{"baseid": user.dron_baseid}}).then((response) => {
          setStatisticDronOnTask(response.data.data)
      })
      
    }, [])
    //console.log(dronOnTask)
    //console.log(dronForClient)
    /*
    useEffect(() => {
      axios.get("http://127.0.0.1:5000/Tasks/select", {params:{"clientid": 1}}).then((response) => {
          setTasks(response.data)
      }) 
    }, [])
  
    useEffect(() => {
      axios.get("http://127.0.0.1:5000/Dron/select_for_client", {params:{"clientid":1}}).then((response) => {
        setDrons(response.data)
      })
    }, [])
    */
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
              Refresh Table
          </Button>
          
        </Card>
  
      </Container>  
    )
  
  
}

export default Statistic