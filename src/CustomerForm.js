import React, { useState } from 'react'

export const CustomerForm = ({ firstName, lastName, phoneNumber, onSubmit }) => { 
  
  const [customer, setCustomer] = useState({ firstName, lastName, phoneNumber })
  const handleChange = ({ target }) => {
    setCustomer({
      ...customer,
      [target.name]: target.value
    })
  }
  // const handleChangeFirstName = ({ target }) => {
  //   setCustomer(customer => ({
  //     ...customer,
  //     firstName: target.value
  //   }))
  // }
  // const handleChangeLastName = ({ target }) => {
  //   setCustomer(customer => ({
  //     ...customer,
  //     lastName: target.value
  //   }))
  // }
  // const handleChangePhoneNumber = ({ target }) => {
  //   setCustomer(customer => ({
  //     ...customer,
  //     phoneNumber: target.value
  //   }))
  // }
  return (
    <form id="customer" onSubmit={() => onSubmit(customer)}>
      <label htmlFor="firstName">First name</label>
      <input 
        type="text" 
        name="firstName" 
        value={firstName} 
        id="firstName"
        onChange={handleChange}>
      </input>
      <label htmlFor="lastName">Last name</label>
      <input 
        type="text" 
        name="lastName" 
        value={lastName} 
        id="lastName"
        onChange={handleChange}>
      </input>
      <label htmlFor="phoneNumber">Phone number</label>
      <input 
        type="text" 
        name="phoneNumber" 
        value={phoneNumber} 
        id="phoneNumber"
        onChange={handleChange}>
      </input>
      <input
        type="submit"
        value="Add">
      </input>
    </form>
  )
}
