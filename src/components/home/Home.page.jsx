import React,{ Component } from 'react';
import './Home.page.style.css'
import DetailForm from './detailForm'

class Home extends Component{
  

  // //state
  // const [customerInfo,setbooking] = useState({

  // });

  // //destructuring
  // const { name,email,phone} = customerInfo;

  // //redux
  // const dispatch = useDispatch();

   render(){return (
    <div className="customer-page" >
      <div className="row justify-content-center align-items-center">
        <h2> VIP Membership</h2>
      </div>
      <div className='row justify-content-center align-items-center'>
      <DetailForm></DetailForm>
      </div>
    </div>
  )  
};}

export default Home;
