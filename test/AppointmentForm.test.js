import React from 'react'
import { createContainer } from './domManipulators'
import { AppointmentForm } from '../src/AppointmentForm'
import ReactTestUtils from 'react-dom/test-utils'

describe('AppointmentForm', () => {
  let render, container

  beforeEach(() => {
    ({ render, container } = createContainer())
  })

  const form = id => container.querySelector(`form[id=${id}]`)
  const field = fieldName => form('appointment').elements[fieldName]
  const findOption = (dropdownNode, textContent) => {
    const options = Array.from(dropdownNode.childNodes)
    return options.find(option => option.textContent === textContent)
  }
  const timeSlotTable = () => {
    return container.querySelector("table#time-slots")
  }


  // it('renders a form', () => {
  //   render(<AppointmentForm />)
    
  //   expect(form('appointment')).not.toBeNull()
  // })

  // describe('service field', () => {
  //   it('renders as a select box', () => {
  //     render(<AppointmentForm />)
      
  //     expect(field('service')).not.toBeUndefined()
  //     expect(field('service').tagName).toEqual('SELECT')
  //   })

  //   it('initially has a blank value chose', () => {
  //     render(<AppointmentForm />)
  //     const firstNode = field('service').childNodes[0]

  //     expect(firstNode.value).toEqual('')
  //     expect(firstNode.selected).toBeTruthy()
  //   })

  //   it('lists all services', () => {
  //     const selectableServices =  [
  //       'Cut',
  //       'Blow-dry'
  //     ]

  //     render(<AppointmentForm selectableServices={selectableServices}/>)

  //     const optionNodes = Array.from(field('service').childNodes)
  //     const renderedServices = optionNodes.map(node => node.textContent)

  //     expect(renderedServices).toEqual(expect.arrayContaining(selectableServices))
  //   })

  //   it('pre-selects the existing value', () => {
  //     const services = ['Cut', 'Blow-dry']
  //     render(<AppointmentForm 
  //       selectableServices={services}
  //       service="Blow-dry"
  //     />)

  //     const option = findOption(field('service'),'Blow-dry')
  //     expect(option.selected).toBeTruthy()
  //   })

  //   it('renders a label', () => {
  //     render(<AppointmentForm />)
      
  //     expect(container.querySelector('label[for="service"]')).not.toBeNull()
  //     expect(container.querySelector('label[for="service"]').textContent).toEqual('Service')
  //   })

  //   it('assigns an ID that matches the label ID', () => {
  //     render(<AppointmentForm />)
  //     expect(field('service').id).toEqual('service')
  //   })

  //   it('saves existing value when submitted', async () => {
  //     expect.hasAssertions()

  //     render(<AppointmentForm 
  //       service="Cut"
  //       onSubmit={({ service }) => expect(service).toEqual('Cut')}
  //     />)

  //     await ReactTestUtils.Simulate.submit(form('appointment'))
      
  //   })

  //   it('saves new value when submitted', async () => {
  //     expect.hasAssertions()

  //     render(<AppointmentForm 
  //       service="Cut"
  //       onSubmit={({ service }) => expect(service).toEqual('Extensions')}
  //     />)

  //     await ReactTestUtils.Simulate.change(field('service'), { target: { value: 'Extensions' }})
  //     await ReactTestUtils.Simulate.submit(form('appointment'))

  //   })
  // })

  describe('time slot table', () => {
    it('renders a table for time slots', () => {
      render(<AppointmentForm />)

      expect(timeSlotTable()).not.toBeNull()
    })

    it('renders a time slot for every half an hour between open and close times', () => {
      render(<AppointmentForm salonOpensAt={9} salonClosesAt={11} />)
      const timesOfDay = timeSlotTable().querySelectorAll('tbody >* th')

      expect(timesOfDay).toHaveLength(4)
      expect(timesOfDay[0].textContent).toEqual('09:00')
      expect(timesOfDay[1].textContent).toEqual('09:30')
      expect(timesOfDay[3].textContent).toEqual('10:30')
    })

    it('renders an empty cell at the start of the header row', () => {
      render(<AppointmentForm />)
      expect(timeSlotTable().querySelector('thead > tr').firstChild.textContent).toEqual("")
    })
  })
})