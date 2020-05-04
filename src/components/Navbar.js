import React, {Component} from 'react';
import {
  Badge,
  Collapse, DropdownItem, DropdownMenu,
  DropdownToggle,
  Nav, Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";
import ulime from '../../static/ulime.png'

class MyNavBar extends Component {
    state = {
      isOpen: false,
      loggedIn: !!sessionStorage.getItem('token'),
    };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  scrollToBottom = () => {
    if (this.props.height && this.props.height < 2500) {
      window.scrollTo({top: 5000, bottom: 0, behavior: 'smooth'});
    } else {
      window.scrollTo({top: this.props.height, bottom: 0, behavior: 'smooth'});
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.token || sessionStorage.getItem('token')) {
      this.setState({loggedIn: true});
    } else {
      this.setState({loggedIn: false});
    }
  }

  handleLogOut() {
    sessionStorage.clear();
    alert('로그아웃 되었습니다');
  }

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
            {this.state.loggedIn ? <div style={{display: 'flex', justifyContent: 'center'}}>
              <NavItem>
                <NavLink href={'/message'}>쪽지함</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={'/mypage'}>내 정보</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={'/'} onClick={() => this.handleLogOut()}>로그아웃</NavLink>
              </NavItem>
              <span style={{marginTop: '8px'}}>{`${sessionStorage.getItem('name')} 님, 환영합니다!`}</span>
            </div> :
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
