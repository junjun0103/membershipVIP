import React from 'react'

const CustomerCard = ({customer,id}) => {
    return ( 
      <div class="card mr-5 mt-4">
        <div class="card-header">
        </div>
        <div class="card-body">
          <h5 class="card-title">{customer.fName} {customer.lName}</h5>
          <p class="card-text">{customer.phone}</p>
          <p class="card-text">{customer.email}</p> 
          <button type="button" class="btn btn-primary" >Remove</button>
        </div>
      </div>
     );
}
 
export default CustomerCard;