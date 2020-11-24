import React,{ Component } from 'react';
import './detailForm.style.css'
import SweetAlert from 'sweetalert2-react';
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
    event.preventDefault();

    // alert show
    this.setState({ show: true })
    
  }

  sweetAlertHandler=()=>{
    // set email with provider
    let newEmail;
    // uploading data
    var tutorialsRef = firebase.database().ref("/customerInfo");


    const test = new Promise((res,rej)=>{
      if(this.state.customerInfo.provider!=null || this.state.customerInfo.provider=='Provider'){
        newEmail=this.state.customerInfo.email+this.state.customerInfo.provider
      }else{
        newEmail=this.state.customerInfo.email
      }  
      res(1)
    })

    test.then(()=>{      
    tutorialsRef.push({
      fName: this.state.customerInfo.fName,
      lName: this.state.customerInfo.lName,
      phone: this.state.customerInfo.phone,
      email: newEmail
    }); 
    }).then(()=>{
      this.setState({ show: false })
    }).then(()=>{
      window.location.reload();
    })
  }

  render(){ return (
    <div >
      <form onSubmit={this.mySubmitHandler}>
        <div className="form-group">
          <div className="container">
            <div className="row mt-5">
              <div className="col ">
                <label htmlFor="fName">*First Name</label>
                <input type="text" className="form-control" id="fName" required
          onChange={(e) => {
            this.setState({customerInfo:{...this.state.customerInfo, fName: e.target.value }});
          }}></input>
              </div>
              <div className="col">
                <label htmlFor="lName">*Last Name</label>
                <input type="text" className="form-control" id="lName" 
          onChange={(e) => {
            this.setState({customerInfo:{...this.state.customerInfo, lName: e.target.value }});
          }}></input>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="cNumber">*Contact Number</label>
                <input type="number" className="form-control" id="cNumber" onChange={(e) => {
            this.setState({customerInfo:{...this.state.customerInfo, phone: e.target.value }});
          }}></input>
              </div>              
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="email">*Email Address</label>
                <input type="text" className="form-control" id="email"  onChange={(e) => {
            this.setState({customerInfo:{...this.state.customerInfo, email: e.target.value }});
          }}></input>
              </div>   
              <div className="col pt-2">
               <label ></label>
                <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => {this.setState({customerInfo:{...this.state.customerInfo, provider: e.target.value }});
            ;
          }}>
                  <option >Provider</option>
                  <option value="@gmail.com">@gmail.com</option>
                  <option value="@yahoo.com">@yahoo.com</option>
                  <option value="@icloud.com">@icloud.com</option>
                  <option value="@hotmail.com">@hotmail.com</option>
                  <option value="@hotmail.co.nz">@hotmail.co.nz</option>
                  <option value="@xtra.com">@xtra.com</option>
                  <option value="@xtra.com">@xtra.co.nz</option>

                </select>
              </div>                           
            </div>
            <div className="row mt-4 justify-content-center">
              <button type="submit" className="btn btn-primary">SUBMIT</button>
            </div>
            <SweetAlert
              show={this.state.show}
              title="Thank you"
              text="Your are VIP member now"
              onConfirm={this.sweetAlertHandler}
            />
          </div>   
        </div>
      </form>
    </div>
  );
  }
};


export default DetailForm;

