import React, { Component } from 'react';
import '../App.css';

export default class CrimeDetail extends Component {

  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList(crimes) {
    if(crimes === undefined) return ''
    else {
      crimes.filter((crime) => {
        // console.log(crime.crm_cd);
        return crime.crm_cd == 648
      }).map((arson) => {
        console.log(arson.crm_cd);        
        <div className="CrimeBox">{arson}</div>
        
      })

    }
  }

  render() {
    return (
      <div className="Crimes"> 
        {this.renderList(this.props.crimesArray)}
      </div>
    )
  }

} 