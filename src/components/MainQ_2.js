import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import mainq_2 from '../static/mainq_2.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MainQ_2 extends Component {
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
        <div style={{minHeight: "98vh", backgroundColor: '#F57A9E'}}>
          <div style={{background: `url(${mainq_2}) bottom right no-repeat`, backgroundSize: '550px'}}>
            <Row>
              <Col style={{marginLeft : '8em', color: 'white', marginTop: '3em'}}>
                <div style={{width: '50em', marginTop: '6em'}}>
                  <div style={{height: '0.4em', marginBottom: '1em', backgroundColor: 'white', width: '7%'}} />
                  <h1 style={{letterSpacing: '1px', fontWeight: 'lighter'}}>자신의 콘텐츠를 좋아할만한 </h1>
                  <h1><strong style={{letterSpacing: '1px'}}>해외 시청자가 누구인지 궁금한가요? </strong></h1>
                </div>
                <div>
                  <h5 style={{color: 'white', letterSpacing: '1px', fontWeight: 'lighter', lineHeight: '1.5em', marginBottom: '2em', marginTop: '3em'}}>문화와 정서 차이를 고려하지 않고<br />
                    자막과 콘텐츠를 제작하는 것은 비효율적일 수 있습니다.
                  </h5>
                  <h5 style={{color: 'white', letterSpacing: '1px', fontWeight: 'lighter', lineHeight: '1.5em', marginBottom: '2em', marginTop: '3em'}}>ULIME은 <strong>해외 시청자의 공감을</strong> 얻기 위해 필요한 정보를 수집할 수 있습니다.
                </h5>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default MainQ_2;
