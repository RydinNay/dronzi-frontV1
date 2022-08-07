import React from 'react';
import axios from 'axios';

export default class DronList extends React.Component {
  state = {
    drons: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:5000/Drons_on_Tasks/select/user', {params:{"baseid":1}})
      .then(res => {
        const drons = res.data;
        this.setState({ drons });
        //console.log(res.data)

      })
  }



  render() {
    console.log(this.state.drons)
    return (
      <ul>
        {
          this.state.drons
            .map(person =>
              <li key={person.DronTaskid}>{person.DoTBaseid}{person.Date}</li>
            )
        }
      </ul>
    )
  }
}
