import React, {Component} from 'react'
import mainq_1 from "../static/mainq_1.png";
import {Col, Row} from "reactstrap";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MainQ_1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ReactCSSTransitionGroup
        transitionName={'example'}
        transitionApperTimeout={500}
        transitionEnterTimeout={500}
        transitionAppear={true}
        transitionEnter={true}
        transitionLeave={false}
      >
        <div style={{backgroundColor: '#FCFCFC'}}>
          <div style={{minHeight: "98vh", backgroundColor: '#FCFCFC', background: `url(${mainq_1}) bottom right no-repeat`, backgroundSize: '700px'}}>
            <div>
              <Row>
                <Col style={{marginLeft : '8em', color: 'black', marginTop: '3em'}}>
                  <div style={{width: '50em', marginTop: '5em'}}>
                    <div style={{height: '0.4em', marginBottom: '1em', backgroundColor: '#F57A9E', width: '7%'}} />
                    <h1 style={{letterSpacing: '1px', fontWeight: 'lighter'}}>자막을 제공하는 영상을 공유해도</h1>
                    <h1><strong style={{letterSpacing: '1px'}}>유튜브 채널 성장이 미미한가요?</strong></h1>
                  </div>
                  <div>
                    <h5 style={{color: 'black', fontWeight: 'lighter', letterSpacing: '1px', lineHeight: '1.5em', marginBottom: '2em', marginTop: '3em'}}>ULIME은 크리에이터의 글로벌 인지도를 높이고 <br />
                    시청자를 유튜브 채널로 유입시키기 위해 노력합니다.
                    </h5>
                  </div>
                </Col>
              </Row>
            </div>
            {/*<div style={{position: 'absolute', right: '0', bottom: '0'}}><img style={{width: '600px'}} src={mainq_1} /></div>*/}
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default MainQ_1
