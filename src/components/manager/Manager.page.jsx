import React, { Component } from 'react';
import './Manager.page.style.css'
import CustomerCard from './CustomerCard'
import firebase from 'firebase';

const databaseURL = "https://vipmembership-9906e.firebaseio.com/"


class ManagerPage extends Component {
  constructor(){
    super();
    this.state = {
      customerInfo:{}
    };
  }
  _get(){
    fetch(`${databaseURL}/customerInfo.json`).then(res=>{
      if(res.status!=200){
        throw new Error(res.statusText);
      }
      return res.json();
    }).then(customerInfo=>this.setState({customerInfo:customerInfo}))
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.customerInfo !=this.state.customerInfo;
  }
  componentDidMount(){
    this._get();    
  }

  romoveHandler(e){
    // get the state object
    const original = this.state.customerInfo;
    // If the name of the property to remove is from a variable
    const { [e]: value, ...withoutE } = original;
    // set the state object without the "e" property
    this.setState({customerInfo:withoutE});
    // delete firebase database
    firebase.database().ref('customerInfo').child(e).remove();
    console.log(Object.entries(this.state.customerInfo).length);
  }

  render() {
    return (
      <div className="manager-page" >
      <div className="row justify-content-center align-items-center">
        <h2> Manager page</h2>
      </div>
      <div className='row justify-content-center align-items-center'>
        
        {this.state.customerInfo&&Object.keys(this.state.customerInfo).map(id=>{
          const customer=this.state.customerInfo[id];
          return(
            <div key={id} class="card mr-5 mt-4">
              <div class="card-header">
              </div>
              <div class="card-body">
                <h5 class="card-title">{customer.fName} {customer.lName}</h5>
                <p class="card-text">{customer.phone}</p>
                <p class="card-text">{customer.email}</p> 
                <button class="btn btn-primary" onClick={() => this.romoveHandler(id)}>Remove</button>
              </div>
            </div>
             )
        })}
        
      </div>
    </div>
    );
  }
}


export default ManagerPage;
