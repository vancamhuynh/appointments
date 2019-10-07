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
  const firstNameField = () => form('customer').elements.firstName
  const labelFor = formElementName => container.querySelector(`label[for="${formElementName}"]`)

  it('should render a form', () => {
    render(<CustomerForm />)

    expect(form('customer')).not.toBeNull()
  })

  it('should render the first name as a text box', () => {
    render(<CustomerForm />)

    expectToBeInputFieldOfTypeText(firstNameField())
  })

  it('should include the existing value for the first name', () => {
    render(<CustomerForm firstName="Van" />)
    expect(firstNameField().value).toEqual('Van')
  })

  it('should render a label for firstName field', () => {
    render(<CustomerForm />)
    expect(labelFor('firstName')).not.toBeNull()
    expect(labelFor('firstName').textContent).toEqual('First name')
  })

  it('assigns an id that matches the label id to the first name field', () => {
    render(<CustomerForm />)
    expect(firstNameField().id).toEqual('firstName')
  })

  it('saves existing first name when submitted', async () => {
    expect.hasAssertions()
    
    render(
      <CustomerForm
        firstName="Van"
        onSubmit={({ firstName }) => expect(firstName).toEqual('Van')}  
      />
    )
    await ReactTestUtils.Simulate.submit(form('customer'))
  })
})