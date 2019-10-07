import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'
import { 
  Appointment,
  AppointmentsDayView
 } from '../src/AppointmentsDayView'

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
  const today = new Date()
  const appointments = [
    { 
      startsAt: today.setHours(12, 0),
      customer: { firstName: 'Van' }
    },
    { 
      startsAt: today.setHours(13, 0),
      customer: { firstName: 'Cam' }
    }
  ]

  const render = component => ReactDOM.render(component, container)

  beforeEach(() => {
    container = document.createElement('div')
  })

  it('render a div with a right ID', () => {
    render(<AppointmentsDayView appointments={[]} />)
    expect(container.querySelector('div#AppointmentsDayView')).not.toBeNull()
    expect(container.textContent).toEqual("There is no appointments scheduled for today")
  })

  it('render multiple appointments at an ol element', () => {
   render(<AppointmentsDayView appointments={appointments} />)
    
    expect(container.querySelector('ol')).not.toBeNull()
    expect(container.querySelector('ol').children).toHaveLength(2)
  })

  it('render each appointment in an li', () => {
    render(<AppointmentsDayView appointments={appointments} />)

    expect(container.querySelectorAll('li')).toHaveLength(2)
    expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00')
    expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00')
  })

  it('should select the first customer by default', () => {
    render(<AppointmentsDayView appointments={appointments} />)
    
    expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00')
  })

  it('should have a button element in each li', () => {
    render(<AppointmentsDayView appointments={appointments} />)

    expect(container.querySelectorAll('li > button')).toHaveLength(2)
    expect(container.querySelectorAll('li > button')[0].type).toEqual('button')
    expect(container.textContent).toMatch('Van')
  })

  it('should render another appointment when selected', () => {
    render(<AppointmentsDayView appointments={appointments} />)

    const button = container.querySelectorAll('button')[1]
    ReactTestUtils.Simulate.click(button)

    expect(container.textContent).toMatch('Cam')
  })
})