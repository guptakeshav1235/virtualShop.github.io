import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='checkout'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }} to='/login'>
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link style={{ fontSize: '20px', fontWeight: 'bold' }} disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }} to='/shipping'>
            <Nav.Link>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link style={{ fontSize: '20px', fontWeight: 'bold' }} disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }} to='/payment'>
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link style={{ fontSize: '20px', fontWeight: 'bold' }} disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }} to='/placeorder'>
            <Nav.Link>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link style={{ fontSize: '20px', fontWeight: 'bold' }} disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
