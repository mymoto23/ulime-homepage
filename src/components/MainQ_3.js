import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import mainq_3 from "../static/mainq_3.png";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MainQ_3 extends Component {
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
        <div style={{backgroundColor: '#FAFAFA'}}>
          <div style={{minHeight: "95vh", background: `url(${mainq_3}) bottom right no-repeat`, backgroundSize: '700px'}}>
            <div>
              <Row>
                <Col style={{marginLeft : '8em', color: 'black', marginTop: '3em'}}>
                  <div style={{width: '50em', marginTop: '5em'}}>
                    <div style={{height: '0.4em', marginBottom: '1em', backgroundColor: '#F57A9E', width: '7%'}} />
                    <h1 style={{letterSpacing: '1px', fontWeight: 'lighter'}}>해외 시청자에게 어필하기 위해</h1>
                    <h1><strong style={{letterSpacing: '1px'}}>어디서부터 시작해야할지 막막한가요?</strong></h1>
                  </div>
                  <div>
                    <h5 style={{color: 'black', letterSpacing: '1px', fontWeight: 'lighter', lineHeight: '1.5em', marginBottom: '2em', marginTop: '3em'}}>ULIME에는 해외 크리에이터에 대해 알아가고 싶은<br />
                      적극적인 시청자들이 모여있습니다.
                    </h5>
                  </div>
                  {/*<img style={{width: 500, height: 300}} alt={'Image was not found'} src={logo} />*/}
                  {/*<img style={{width: '50%', height: 'auto'}} src={ulime} />*/}
                </Col>
                {/*<Col style={{position: 'relative', right: '0px', bottom: '0px'}}>*/}
                {/*<img style={{width: '600px'}} src={mainq_1} />*/}
                {/*</Col>*/}
              </Row>
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default MainQ_3;
