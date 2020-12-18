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
      customerInfo:{fName:'',lName:'',phone:'',email:'',provider:'@gmail.com'},
      providerInput:{show:'off'}
    };
  }

  mySubmitHandler = (event) => {    
    event.preventDefault();

    // set email with provider
    let newEmail;
     // uploading data
     var tutorialsRef = firebase.database().ref("/customerInfo");

    // set email with provider function
    const setEmail = () =>
      new Promise((resolve, reject) => {
        if(this.state.customerInfo.provider!=null || this.state.customerInfo.provider=='Provider'){
          newEmail=this.state.customerInfo.email+this.state.customerInfo.provider
        }else{
          newEmail=this.state.customerInfo.email
        }  
        resolve(newEmail);
      });

    // uploading data function
    const uploadingData = (hen) =>
      new Promise((resolve, reject) => {
        tutorialsRef.push({
          fName: this.state.customerInfo.fName,
          lName: this.state.customerInfo.lName,
          phone: this.state.customerInfo.phone,
          email: newEmail
        }); 
        resolve(true);
      });

      setEmail().then(uploadingData);

    // alert show
     this.setState({ show: true })
    
  }

  sweetAlertHandler=()=>{
  this.setState({ show: false })
  setTimeout(() => window.location.reload(), 1000);    
  }

  selectionHandler=(e)=>{
    this.setState({customerInfo:{...this.state.customerInfo, provider: e.target.value }})

    if(e.target.value==='other'){
      this.setState({providerInput:{show: 'show'}})
    }else{
      this.setState({providerInput:{show: 'off'}})
    }
  }

  render(){ return (
    <div className="col-6">
      <form onSubmit={this.mySubmitHandler}>
        <div className="form-group">
          <div className="container ">
            <div className="row mt-4 justify-content-center align-items-center">
              <div className="col-5 ">
                <label htmlFor="fName">*First Name</label>
                <input type="text" className="form-control" id="fName" required
          onChange={(e) => {
            this.setState({customerInfo:{...this.state.customerInfo, fName: e.target.value }});
          }}></input>
              </div>
              <div className="col-5">
                <label htmlFor="lName">*Last Name</label>
                <input type="text" className="form-control" id="lName" 
          onChange={(e) => {
            this.setState({customerInfo:{...this.state.customerInfo, lName: e.target.value }});
          }}></input>
              </div>
            </div>
            <div className="row mt-2 justify-content-center align-items-center">
              <div className="col-10">
                <label htmlFor="cNumber">*Contact Number</label>
                <input type="number" className="form-control" id="cNumber" onChange={(e) => {
            this.setState({customerInfo:{...this.state.customerInfo, phone: e.target.value }});
          }}></input>
              </div>              
            </div>
            <div className="row mt-2 justify-content-center align-items-center">
              <div className={`${this.state.providerInput.show=='show'?'col-3':'col-4'}`}>
                <label htmlFor="email">*Email Address</label>
                <input type="text" className="form-control" id="email"  onChange={(e) => {
                this.setState({customerInfo:{...this.state.customerInfo, email: e.target.value }});
                }}></input>
              </div> 
              <div className="col-1 mt-4">
                <label></label>
                <label className="atSizeBig">@</label>                
              </div>    
              <div className={`pt-2 ${this.state.providerInput.show=='show'?'col-3':'col-5'}`}>
               <label ></label>
                <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => {this.selectionHandler(e)}}>
                  <option value="@gmail.com">gmail.com</option>
                  <option value="@yahoo.com">yahoo.com</option>
                  <option value="@yahoo.co.nz">yahoo.co.nz</option>
                  <option value="@icloud.com">icloud.com</option>
                  <option value="@hotmail.com">hotmail.com</option>
                  <option value="@hotmail.co.nz">hotmail.co.nz</option>
                  <option value="@xtra.com">xtra.com</option>
                  <option value="@xtra.co.nz">xtra.co.nz</option>
                  <option value="other">Other...</option>
                </select>
              </div>
              {
                this.state.providerInput.show=='show'?
                <div className="col-3 pt-2">
                <label ></label>
                <input type="text" className="form-control" id="provider" placeholder="ex) gmail.com" onChange={(e) => {
                this.setState({customerInfo:{...this.state.customerInfo, provider: '@'+e.target.value }});
                }}></input>
              </div>       
                
                :''
              }
                                                        
            </div>
            <div className="row mt-2 justify-content-center">             
              <div className="form-check col-9 border border-light rounded">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                <label className="form-check-label" for="exampleCheck1">By sigining up to HT VIP rewards, you consent to receive newsletters about the latest collections, exclusive offers and promotions. You can unsubscribe anytime.</label>
                <label className="form-check-label mt-2" for="exampleCheck1">A full copy of the T&Cs and privacy policy can be viewed at https://www.happytel.com/viprewards/</label>
              </div>          
            </div>
            
            <div className="row mt-4 justify-content-center">
              <button type="submit" className="btn btn-primary" >SUBMIT</button>
            </div>
            <SweetAlert
              show={this.state.show}
              title="Thank you!"
              text="Your submission has been sent"
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

