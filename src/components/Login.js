import React, {Component} from 'react'
import {Col, Row} from "reactstrap";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import globe from "../static/globeicon.png";
import info from '../static/infoicon.png';
import click from '../static/clickicon.png';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }


  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName={'slidetop'}
          transitionApperTimeout={500}
          transitionEnterTimeout={500}
          transitionAppear={true}
          transitionEnter={true}
          transitionLeave={false}
        >
        <Row style={{marginTop: '3em', marginBottom : '3em'}}>
          <Col>
            <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center', letterSpacing: '1px'}}>
              <h2 style={{lineHeight: '1.5em'}}>
                <strong style={{color: '#F57A9E'}}>ULIME</strong>이 제공하는 <br />
                <strong style={{color: '#F57A9E'}}>글로벌 크리에이터를</strong> 위한 핵심 가치
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{height: '0.4em', backgroundColor: '#F57A9E', width: '4%'}}>
            </div>
          </Col>
        </Row>
        </ReactCSSTransitionGroup>
        <Row>
        <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center', margin: '6.2em'}}>
            <Col className={'col-md-4'}>
              <ReactCSSTransitionGroup
                transitionName="slideleft"
                transitionAppear={true}
                transitionApperTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
              >
                <img style={{height: '3em'}} src={globe} />
                <h6 style={{marginTop: '2em'}}><strong>글로벌 성장</strong></h6>
                <p style={{fontSize: '15px', color: 'grey', marginTop: '2em', letterSpacing: '0.5px', lineHeight: '2em', margin: '2em', textAlign: 'justify'}}>
                  ​크리에이터의 해외 진출은 단순히 자막 생성뿐만 아니라 나라마다 다른 콘텐츠 트렌드와 마케팅 채널을 파악하고 활용할 수 있어야 이루어낼 수 있습니다. ULIME은 해외 콘텐츠를 추천하는 글로벌 플랫폼으로서 크리에이터의 크로스보더 성장에 대한 부담을 덜어줍니다.
                </p>
              </ReactCSSTransitionGroup>
            </Col>
            <Col className={'col-md-4'}>
              <ReactCSSTransitionGroup
                transitionName={'example'}
                transitionEnterTimeout={1000}
                transitionApperTimeout={500}
                transitionAppear={true}
                transitionEnter={true}
                transitionLeave={false}
                >
                <div>
                  <img style={{height: '3em'}} src={click} />
                  <h6 style={{marginTop: '2em'}}><strong>간편한 접근</strong></h6>
                  <p style={{fontSize: '15px', color: 'grey', marginTop: '2em', letterSpacing: '0.5px', lineHeight: '2em', margin: '2em', textAlign: 'justify'}}>
                    ULIME에서는 페이지 하나로 크리에이터 활동을 정리하고 플랫폼 사이에서 발생하는 시청자 유실을 최소화 합니다. 세계 각국의 시청자에게 크리에이터를 소개하는 ULIME은 나라마다 다르게 활성화 되어 있는 소셜 플랫폼으로 인한 마케팅의 어려움을 해소합니다.
                  </p>
                </div>
              </ReactCSSTransitionGroup>
            </Col>
            <Col className={'col-md-4'}>
              <ReactCSSTransitionGroup
                transitionName="slide"
                transitionAppear={true}
                transitionApperTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
              >
                <div key={'test'}>
                  <img style={{height: '3em'}} src={info} />
                  <h6 style={{marginTop: '2em'}}><strong>정보 습득</strong></h6>
                  <p style={{fontSize: '15px', color: 'grey', marginTop: '2em', letterSpacing: '0.5px', lineHeight: '2em', margin: '2em', textAlign: 'justify'}}>
                    ULIME은 글로벌 추천 플랫폼으로서 크리에이터의 글로벌 성장을 위해 필요한 정보를 수집하고 제공합니다. ULIME을 통해 나라별로 트렌딩하는 콘텐츠 분야와 키워드를 알 수 있으며, 크리에이터는 해외 시청자에게 효과적으로 접근하기 위한 정보를 습득할 수 있습니다.
                  </p>
                </div>
              </ReactCSSTransitionGroup>
            </Col>
        </div>
        </Row>
      </div>
    )
  }
}

export default Login
