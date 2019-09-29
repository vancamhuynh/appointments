import React from 'react'
export const Appointment = ({ customer }) => <div>{customer.firstName}</div>
export const AppointmentsDayView = ({ appointments }) => {
  const today = new Date()
  let appointmentss = [
    { startsAt: today.setHours(12, 0) },
    { startsAt: today.setHours(13, 0) }
  ]
  console.log(appointmentss);
  console.log(appointments);
  
  
  // let test = appointmentss.map(() => <div />)
  // console.log(test);
  
  
  return (
    <div id="AppointmentsDayView">
      <ol>
        <div />
        <div />
      </ol>
    </div>
    )
}