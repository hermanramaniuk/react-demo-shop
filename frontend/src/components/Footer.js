import React from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
const Footer = () => {
  return (
    <footer className='custom-footer'>
        <Navbar bg="primary" variant="dark" className='custom-navbar'>
          <Col className='text-center footer-text font-link'>Copyright &copy; eShop</Col>
        </Navbar>
    </footer>
  )
}

export default Footer
