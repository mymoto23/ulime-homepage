import React, {Component} from 'react';
import {Badge, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";

class MyNavBar extends Component {
  scrollToBottom = () => {
    if (this.props.height && this.props.height < 2500) {
      window.scrollTo({top: 5000, bottom: 0, behavior: 'smooth'});
    } else {
      window.scrollTo({top: this.props.height, bottom: 0, behavior: 'smooth'});
    }
  };

  render() {
    return(
      <Navbar style={{backgroundColor: 'white', boxShadow: '0px 0px 3px 1px #C0C0C0'}} light expand="md">
        <NavbarBrand href="/" style={{marginLeft: '5.5em', display: 'flex', alignItems: 'center', marginTop: '3px'}}>
          <h5 style={{color: '#F57A9E'}}>
            {/*<img style={{'height' : '30px'}} src={ulime}/> &nbsp;ulime*/}
            <strong>ULIME</strong>
          </h5>
        </NavbarBrand>
          <Nav className="ml-auto" navbar style={{marginRight: '6em'}}>
            <NavItem className={'navbar-item'}>
              <NavLink style={{color: 'grey'}} href="/intro">서비스 소개</NavLink>
            </NavItem>
            {/*<NavItem className={'navbar-item'}>*/}
              {/*<NavLink style={{color: 'grey'}} href="/faq">FAQ</NavLink>*/}
            {/*</NavItem>*/}
            {
              <div style={{display: 'flex', justifyContent: 'center'}}>
                {/*<NavItem className={'navbar-item'}>*/}
                  {/*<NavLink style={{color: 'grey'}} onClick={this.scrollToBottom}>문의하기</NavLink>*/}
                {/*</NavItem >*/}
                <NavItem className={'navbar-item'}>
                  <NavLink style={{color: 'white'}} href={'/pre-register'}> <Badge style={{backgroundColor: '#F57A9E', color: 'white', fontSize: '14px', display: 'flex', alignItems: 'center'}} pill><span style={{fontWeight: 'normal'}}>사전등록</span></Badge></NavLink>
                </NavItem>
              </div>
            }
          </Nav>
      </Navbar>
    );
  }
}

export default MyNavBar;
