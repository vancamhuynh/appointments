import React from 'react'
import { createContainer } from './domManipulators'
import { CustomerForm } from '../src/CustomerForm'
import ReactTestUtils from 'react-dom/test-utils'

describe('CustomerForm', () => {
  let render, container

  beforeEach(() => {
    ({ render, container } = createContainer())
  })

  const form = id => container.querySelector(`form[id="${id}"]`)
  const expectToBeInputFieldOfTypeText = formElement => {
    expect(formElement).not.toBeNull()
    expect(formElement.tagName).toEqual('INPUT')
    expect(formElement.type).toEqual("text")
  }
  const field = (name) => form('customer').elements[name]
  const labelFor = formElementName => container.querySelector(`label[for="${formElementName}"]`)
  const itRendersAsATextBox = (fieldName) => {
    it(`should render the ${fieldName} as a text box`, () => {
      render(<CustomerForm />)
  
      expectToBeInputFieldOfTypeText(field(fieldName))
    })
  }
  const itIncludeTheExistingValue = (fieldName) => {
    it(`should include the existing value for the ${fieldName}`, () => {
      render(<CustomerForm {...{[fieldName]: "value"}} />)
      expect(field(fieldName).value).toEqual('value')
    })
  }

  const itRenderALabel = (fieldName, label) => {
    it(`should render a label for ${fieldName}`, () => {
      render(<CustomerForm />)
      expect(labelFor(fieldName)).not.toBeNull()
      expect(labelFor(fieldName).textContent).toEqual(label)
    })
  }

  const itAssignAnIdThatMatchesLabelId = (fieldName, id) => {
    it(`assigns an id that matches the label id to ${fieldName} field`, () => {
      render(<CustomerForm />)
      expect(field(fieldName).id).toEqual(id)
    })
  }

  const itSubmitsExistingValue = async (fieldName, value) => {
    it('saves existing value when submitted', async () => {
      expect.hasAssertions()
      
      render(
        <CustomerForm
          {...{ [fieldName]: value,
          onSubmit: (props) => expect(props[fieldName]).toEqual(value)} }
        />
      )

      await ReactTestUtils.Simulate.submit(form('customer'))
    })
  }

  const itSubmitsNewValue = async (fieldName, value) => {
    it(`should save new ${fieldName} when submitted`, async () => {
      expect.hasAssertions()
  
      render(
        <CustomerForm 
          {...{ [fieldName]: 'Van',
          onSubmit: (props) => expect(props[fieldName]).toEqual(value) }}
        />
      )
  
      await ReactTestUtils.Simulate.change(field(fieldName), { target: { value: value, name: fieldName } })
      await ReactTestUtils.Simulate.submit(form('customer'))
    })
  }
  it('should render a form', () => {
    render(<CustomerForm />)

    expect(form('customer')).not.toBeNull()
  })

  it('has a submit button', () => {
    render(<CustomerForm />)
    const subnmitBtn = container.querySelector('input[type="submit"]')
    
    expect(subnmitBtn).not.toBeNull()
  })

  describe('First Name field', () => {
    
    itRendersAsATextBox('firstName')
    itIncludeTheExistingValue('firstName')
    itRenderALabel('firstName', 'First name')
    itAssignAnIdThatMatchesLabelId('firstName', 'firstName')
    itSubmitsExistingValue('firstName', 'Van')  
    itSubmitsNewValue('firstName', 'Vicky') 
  })

  describe('Last Name field', () => {

    itRendersAsATextBox('lastName')
    itIncludeTheExistingValue('lastName')
    itRenderALabel('lastName', 'Last name')
    itAssignAnIdThatMatchesLabelId('lastName', 'lastName')
    itSubmitsExistingValue('lastName', 'Huynh')  
    itSubmitsNewValue('lastName', 'Scott') 
  //   it('assigns an id that matches the label id to the first name field', () => {
  //     render(<CustomerForm />)
  //     expect(field('firstName').id).toEqual('firstName')
  //   })
  
  //   it('saves existing first name when submitted', async () => {
  //     expect.hasAssertions()
      
  //     render(
  //       <CustomerForm
  //         firstName="Van"
  //         onSubmit={({ firstName }) => expect(firstName).toEqual('Van')}  
  //       />
  //     )
  //     await ReactTestUtils.Simulate.submit(form('customer'))
  //   })
  
  //   it('should save new first name when submitted', async () => {
  //     expect.hasAssertions()
  
  //     render(
  //       <CustomerForm 
  //         firstName="Van"
  //         onSubmit={({ firstName }) => expect(firstName).toEqual('Cam')}
  //       />
  //     )
  
  //     await ReactTestUtils.Simulate.change(field('firstName'), { target: { value: 'Cam' } })
  //     await ReactTestUtils.Simulate.submit(form('customer'))
  //   })
  })

  describe('Phone Number field', () => {

    itRendersAsATextBox('phoneNumber')
    itIncludeTheExistingValue('phoneNumber')
    itRenderALabel('phoneNumber', 'Phone number')
    itAssignAnIdThatMatchesLabelId('phoneNumber', 'phoneNumber')
    itSubmitsExistingValue('phoneNumber', '0000')  
    itSubmitsNewValue('phoneNumber', '1234') 
  })
})