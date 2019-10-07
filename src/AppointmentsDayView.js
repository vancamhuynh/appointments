import React, { useState } from 'react'
export const Appointment = ({ startsAt, customer }) => (
  <div>
    <p>Appointment at {startsAt}</p>
    <table>
      <tbody>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Phone Number</td>
          <td>Stylist</td>
          <td>Service</td>
          <td>Notes</td>
        </tr>
        <tr>
          <td>{customer.firstName}</td>
          <td>{customer.lastName}</td>
          <td>{customer.phoneNumber}</td>
          <td>{customer.stylist}</td>
          <td>{customer.service}</td>
          <td>{customer.notes}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(
    0
  )
  
  const appointmentTimeOfDay = startsAt => {
    const [h, m] = new Date(startsAt).toTimeString().split(':');
    return `${h}:${m}`
  }

  return (
    <div id="AppointmentsDayView">
      <ol>
        {appointments.map((appointment, i) => (
          <li key={appointment.startsAt}>
            <button type="button" onClick={() => setSelectedAppointment(i)}>
              {appointmentTimeOfDay(appointment.startsAt)}
            </button>
          </li>))}
      </ol>
      {appointments.length === 0 ? <p>There is no appointments scheduled for today</p> : 
        (<Appointment {...appointments[selectedAppointment]}/>)}

    </div>
    )
}