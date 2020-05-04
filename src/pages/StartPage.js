import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import maincover from "../static/maincover.jpeg"
import ServiceFlow from "../components/ServiceFlow";
import MainQ_1 from "../components/MainQ_1";
import MainQ_3 from "../components/MainQ_3";
import MainQ_2 from "../components/MainQ_2";
import MainLast from "../components/MainLast";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LazyLoad from 'react-lazyload';


class StartPage extends Component {

  constructor(props) {
    super(props);
    this.pageFocus = React.createRef();
  }

  handleLearnMoreClick = () => {
    if (this.pageFocus.current) {
      this.pageFocus.current.scrollIntoView(
        {
          behavior: 'smooth',
          block: 'nearest'
        }
      );
    }
  };


  render() {
    return(
      <div>
        <div className={'container-login102'} style={{minHeight: "95vh", backgroundImage: `url(${maincover})`, backgroundSize: 'cover'}}>
          <Row>
            <Col md={6} style={{marginLeft : '8em', color: 'white', marginTop: '3em'}}>
              <ReactCSSTransitionGroup
                transitionName={'slideleft'}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionAppear={true}
                transitionEnter={true}
                transitionLeave={false}
              >
                <div style={{width: '50em', marginTop: '5em'}}>
                  <h1 style={{fontWeight: 'bold', letterSpacing: '1px'}}>당신의 유튜브,</h1>
                  <h1><strong style={{letterSpacing: '1px'}}>이제 해외로 진출할 때입니다.</strong></h1>
                </div>
                <div>
                  <h5 style={{color: 'white', marginBottom: '2em', marginTop: '3em'}}>해외 시청자에게 간편하게 콘텐츠를 소개하세요.</h5>
                </div>
              </ReactCSSTransitionGroup>
            </Col>
          </Row>
          <ReactCSSTransitionGroup
            transitionName={'example'}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionAppear={true}
            transitionEnter={true}
            transitionLeave={false}
          >
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '5em', marginRight: '9em'}}>
              <button className={'sign-up-button'} onClick={this.handleLearnMoreClick} style={{marginLeft: '10em',backgroundColor: '#F57A9E', color: 'white', outline: 'none'}}>더 알아보기</button>
            </div>
          </ReactCSSTransitionGroup>
        </div>
        <div ref={this.pageFocus}>
          <LazyLoad height={900}>
            <MainQ_1 />
          </LazyLoad>
        </div>
        <LazyLoad height={400}>
          <MainQ_2 />
        </LazyLoad>
        <LazyLoad height={400}>
          <MainQ_3 />
        </LazyLoad>
        <LazyLoad height={400}>
          <ServiceFlow />
        </LazyLoad>
        <LazyLoad>
          <MainLast history={this.props.history} />
        </LazyLoad>
      </div>
    );
  }
}

export default StartPage;
