import React from 'react'
import ReactDOM from 'react-dom'
import { 
  Appointment,
  AppointmentsDayView
 } from '../src/Appointment'

describe('Appointment', () => {
  let customer
  let container

  const render = component => ReactDOM.render(component,container)

  beforeEach(() => {
    container = document.createElement('div')
  })

  it('should render customer first name', () => {
    customer = { firstName: 'Van' } 
    render(<Appointment customer={customer} />) 
    expect(container.textContent).toEqual('Van')
  })
  it('should render another customer first name', () => {
    customer = { firstName: 'Cam' }
    render(<Appointment customer={customer} />)
    expect(container.textContent).toEqual('Cam')
  })
})

describe('AppointmentsDayView', () => {
  let container

  const render = component => ReactDOM.render(component, container)

  beforeEach(() => {
    container = document.createElement('div')
  })

  it('render a div with a right ID', () => {
    render(<AppointmentsDayView appointment={[]} />)
    expect(container.querySelector('div#AppointmentsDayView')).not.toBeNull()
  })

  it('render multiple appointments at an ol element', () => {
    const today = new Date()

    const appointments = [
      { startsAt: today.setHours(12, 0) },
      { startsAt: today.setHours(13, 0) }
    ]

    console.log(appointments);
    

    render(<AppointmentsDayView appointments={appointments} />)
    
    // expect(container.querySelector('ol')).not.toBeNull()
    // expect(container.querySelector('ol').children).toHaveLength(2)
  })
})