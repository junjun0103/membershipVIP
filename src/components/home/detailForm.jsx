import React,{ Component } from 'react';
import './detailForm.style.css'
//import { connect } from 'react-redux';

// Get a reference to the database service
import { firestore } from "../../firebase";
import firebase from 'firebase';

class DetailForm extends Component{

  constructor(){
    super();
    this.state = {
      customerInfo:{fName:'',lName:'',phone:'',email:''}
    };
  }

  mySubmitHandler = (event) => {
    
    let newEmail;
    if(this.state.customerInfo.provider!=null || this.state.customerInfo.provider=='Provider'){
      newEmail=this.state.customerInfo.email+this.state.customerInfo.provider
    }else{
      newEmail=this.state.customerInfo.email
    }
    console.log(newEmail);
    event.preventDefault();    
    var tutorialsRef = firebase.database().ref("/customerInfo");
    tutorialsRef.push({
      fName: this.state.customerInfo.fName,
      lName: this.state.customerInfo.lName,
      phone: this.state.customerInfo.phone,
      email: newEmail

    });
    alert("You are submitting");    
    this.refs.fName.value="";
    this.refs.lName.value="";
    this.refs.phone.value="";
    this.refs.email.value="";

  }

  render(){ return (
    <div >
      <form onSubmit={this.mySubmitHandler}>
        <div class="form-group">
          <div class="container">
            <div class="row mt-5">
              <div class="col ">
                <label for="fName">*First Name</label>
                <input type="text" class="form-control" id="fName" ref="fName"
          onChange={(e) => {
            this.setState({customerInfo:{...this.state.customerInfo, fName: e.target.value }});
          }}></input>
              </div>
              <div class="col">
                <label for="lName">*Last Name</label>
                <input type="text" class="form-control" id="lName" ref="lName"
          onChange={(e) => {
            this.setState({customerInfo:{...this.state.customerInfo, lName: e.target.value }});
          }}></input>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col">
                <label for="cNumber">*Contact Number</label>
                <input type="number" class="form-control" id="cNumber" ref="phone"onChange={(e) => {
            this.setState({customerInfo:{...this.state.customerInfo, phone: e.target.value }});
          }}></input>
              </div>              
            </div>
            <div class="row mt-2">
              <div class="col">
                <label for="email">*Email Address</label>
                <input type="text" class="form-control" id="email" ref="email" onChange={(e) => {
            this.setState({customerInfo:{...this.state.customerInfo, email: e.target.value }});
          }}></input>
              </div>   
              <div class="col pt-2">
               <label ></label>
                <select class="form-control" id="exampleFormControlSelect1" onChange={(e) => {this.setState({customerInfo:{...this.state.customerInfo, provider: e.target.value }});
            ;
          }}>
                  <option >Provider</option>
                  <option value="@gmail.com">@gmail.com</option>
                  <option value="@yahoo.com">@yahoo.com</option>
                  <option value="@hotmail.co.nz">@hotmail.co.nz</option>
                </select>
              </div>                           
            </div>
            <div className="row mt-4 justify-content-center">
              <button type="submit" class="btn btn-primary">SUBMIT</button>
            </div>
          </div>   
        </div>
      </form>
    </div>
  );
  }
};


export default DetailForm;

