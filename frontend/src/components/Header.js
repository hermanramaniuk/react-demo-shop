import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
    // history.push('/')
  }
  return (
    <header>
      <Navbar bg='primary' variant='dark ' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>eShop</Navbar.Brand>
          </LinkContainer>
          {/* <Route
            render={({ history }) => <SearchBox history={history} />}></Route> */}
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {userInfo ? (
                <>
                <LinkContainer to='/cart'>
                  <Nav.Link>
                    <i className='fas fa-shopping-cart' />
                    &nbsp;Cart
                  </Nav.Link>
                </LinkContainer>
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  {userInfo && userInfo.isAdmin && (
                    <>
                    <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Transactions</NavDropdown.Item>
                    </LinkContainer>
                    </>
                  )}
                  <hr />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                </>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user' /> &nbsp;Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
