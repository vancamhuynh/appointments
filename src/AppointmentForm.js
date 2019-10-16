import React, { useState } from 'react'

// const dailyTimeSlots = (salonOpensAt, salonClosesAt) => {
//   const totalSlots = (salonClosesAt - salonOpensAt) * 2
//   const startTime = new Date().setHours(salonOpensAt, 0, 0, 0)
//   const increment = 30 * 60 * 1000


// }

const dailyTimeSlots = (salonOpensAt, salonClosesAt) => {

  const totalSlots = (salonClosesAt - salonOpensAt) * 2;
  const startTime = new Date().setHours(salonOpensAt, 0, 0, 0);
  const increment = 30 * 60 * 1000;
  
  return  Array(totalSlots)
    .fill([startTime])
    .reduce((acc, _, i) =>
      acc.concat([startTime + (i * increment)])
    )

}

const toTimeValue = timestamp => (new Date(timestamp).toTimeString().substring(0, 5))

const TimeSlotTable = ({ salonOpensAt, salonClosesAt }) => (
  <table id="time-slots">
  <thead>
    <tr>
      <th></th>
      <th>Oct 15</th>
      <th>Oct 16</th>
      <th>Oct 17</th>
    </tr>
  </thead>
  <tbody>
    {dailyTimeSlots(salonOpensAt, salonClosesAt).map(timeslot => (
      <tr key={timeslot}><th>{toTimeValue(timeslot)}</th></tr>
    ))}
  </tbody>
  </table>
)

export const AppointmentForm = ({ selectableServices, service, onSubmit, salonOpensAt, salonClosesAt }) => {
  const [appointment, setAppointment] = useState({ service: 'Cut'})
  const onServiceChange = ({ target }) => {
    setAppointment({ service: target.value })
  }
  
  return (
    <form id="appointment" onSubmit={() => onSubmit(appointment)}>
      <label htmlFor="service">Service</label>
      <select name="service" value={service} id="service" onChange={onServiceChange}>
        <option />
        {selectableServices.map(service => (<option key={service}>{service}</option>))}
      </select>
      <TimeSlotTable salonOpensAt={salonOpensAt} salonClosesAt={salonClosesAt}/>
    </form>
  )
}

AppointmentForm.defaultProps = {
  selectableServices: [
    'Cut',
    'Blow-dry',
    'Cut & color',
    'Beard trim',
    'Cut & beard trim',
    'Extensions'],
    salonOpensAt: 9,
    salonClosesAt: 11
}