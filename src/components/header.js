import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import { Link } from 'react-router-dom'
  import { connect } from 'react-redux'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
        <Link to='/'><NavbarBrand style={{color:'white'}}>{this.props.nama}</NavbarBrand></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              <NavItem>
                <Link to='/form' style={{textDecoration:'none'}}><NavLink  style={{color:'white' , textDecoration:'none'}}>Login</NavLink></Link> 
              </NavItem>
              <NavItem>
              <NavItem>
                <Link to='/tugas-api' style={{textDecoration:'none'}}><NavLink  style={{color:'white' , textDecoration:'none'}}>TUGAS API</NavLink></Link> 
              </NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Register</NavLink>
              </NavItem>
              <NavItem>
                <Link to='/latihan2' style={{textDecoration:'none'}}><NavLink  style={{color:'white' , textDecoration:'none'}}>Latihan2</NavLink></Link> 
              </NavItem>
              <NavItem>
                <Link to='/latihan3' style={{textDecoration:'none'}}><NavLink  style={{color:'white' , textDecoration:'none'}}>Latihan3</NavLink></Link> 
              </NavItem>
              <NavItem>
                <NavLink style={{color:'white'}}>{this.props.kata} Todo</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {nama : state.user.username,
          email : state.user.email,
          buah : state.product.namaProduct,
          kata : state.jumlah.count}
}

export default connect(mapStateToProps)(Header)