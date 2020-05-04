import React, {Component} from 'react';
import phone_creator from '../static/phone_creator.png';
import phone_explore from '../static/phone_explore.png';
import phone_feed from '../static/phone_feed.png';
import phone_contents from '../static/phone_contents.png';
import LoginPage from "../page/LoginPage";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LazyLoad from 'react-lazyload';
import SignupPage from "../page/SignupPage";

class Intro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <LoginPage />
        <LazyLoad height={200}>
          <div className={'container-login103'}>
            <ReactCSSTransitionGroup
              transitionName={'slideleft'}
              transitionApperTimeout={500}
              transitionEnterTimeout={500}
              transitionAppear={true}
              transitionEnter={true}
              transitionLeave={false}
            >
            <div style={{marginLeft: '3em'}}>
              <h2 style={{lineHeight: '2em', marginLeft: '2em'}}><span style={{fontWeight: 'lighter'}}>대표 콘텐츠부터 시청자 리뷰까지 <br /> 한눈에 보는 </span><strong><span style={{color: '#F57A9E'}}>크리에이터 페이지</span></strong></h2>
              <p style={{fontSize: '15px', color: 'grey', marginTop: '2em', wordBreak: 'keep-all', lineHeight: '2em', marginLeft: '4.5em', textAlign: 'justify'}}>해외 시청자를 사로잡기 위해 콘텐츠만큼이나 중요한 것은 바로 크리에이터의 접근성입니다.<br /> 시청자가 세계 어디에 있든 검색 한번으로 크리에이터에 대해 손쉽게 알아볼 수 있습니다.</p>
            </div>
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
              transitionName={'slidebottom'}
              transitionApperTimeout={500}
              transitionEnterTimeout={500}
              transitionAppear={true}
              transitionEnter={true}
              transitionLeave={false}
            >
              <img src={phone_creator} style={{display: 'flex', marginTop: '5em', marginLeft: '3em', float: 'right', height: '50em'}} />
            </ReactCSSTransitionGroup>
          </div>
        </LazyLoad>
        {/*<LazyLoad height={200}>*/}
        {/*  <div className={'container-login103'} style={{backgroundColor: '#F8F8F8'}}>*/}
        {/*    <ReactCSSTransitionGroup*/}
        {/*      transitionName={'slideleft'}*/}
        {/*      transitionApperTimeout={500}*/}
        {/*      transitionEnterTimeout={500}*/}
        {/*      transitionAppear={true}*/}
        {/*      transitionEnter={true}*/}
        {/*      transitionLeave={false}*/}
        {/*    >*/}
        {/*      <div style={{marginLeft: '3em'}}>*/}
        {/*        <h2 style={{lineHeight: '2em', marginLeft: '2em'}}><span style={{fontWeight: 'lighter'}}>크리에이터의 소식을 간편하게 |  </span><strong><span style={{color: 'black  '}}>피드</span></strong></h2>*/}
        {/*        <p style={{fontSize: '15px', color: 'grey', marginTop: '2em', wordBreak: 'keep-all', lineHeight: '2em', marginLeft: '4.5em', textAlign: 'justify'}}>크리에이터는 다양한 게시물을 통해 자신의 활동을 해외 시청자와 공유할 수 있습니다. <br /> 시청자는 즐겨찾기한 크리에이터의 소식을 피드에서 바로 접할 수 있습니다.</p>*/}
        {/*      </div>*/}
        {/*    </ReactCSSTransitionGroup>*/}
        {/*    <ReactCSSTransitionGroup*/}
        {/*      transitionName={'slidebottom'}*/}
        {/*      transitionApperTimeout={500}*/}
        {/*      transitionEnterTimeout={500}*/}
        {/*      transitionAppear={true}*/}
        {/*      transitionEnter={true}*/}
        {/*      transitionLeave={false}*/}
        {/*    >*/}
        {/*      <img src={phone_feed} style={{display: 'flex', marginTop: '5em', marginLeft: '5em', float: 'right', height: '50em'}} />*/}
        {/*    </ReactCSSTransitionGroup>*/}
        {/*  </div>*/}
        {/*</LazyLoad>*/}
        <LazyLoad height={200}>
          <div style={{backgroundColor: '#F57A9E'}} className={'container-login103'}>
            <ReactCSSTransitionGroup
              transitionName={'slidebottom'}
              transitionApperTimeout={500}
              transitionEnterTimeout={500}
              transitionAppear={true}
              transitionEnter={true}
              transitionLeave={false}
            >
              <img src={phone_explore} style={{display: 'flex', marginTop: '5em', marginLeft: '2.7em', float: 'right', height: '50em'}} />
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
              transitionName={'slide'}
              transitionApperTimeout={500}
              transitionEnterTimeout={500}
              transitionAppear={true}
              transitionEnter={true}
              transitionLeave={false}
            >
              <div>
                <h2 style={{lineHeight: '2em', marginLeft: '2em', color: 'white'}}><span style={{fontWeight: 'lighter'}}>분야별로 트렌딩하는 콘텐츠 | </span><strong><span style={{color: 'ivory'}}>둘러보기</span></strong></h2>
                <p style={{fontSize: '15px', color: 'white', marginTop: '2em', wordBreak: 'keep-all', lineHeight: '2em', marginLeft: '4.5em', textAlign: 'justify'}}>시청자는 둘러보기를 통해 더 많은 콘텐츠와 크리에이터를 접할 수 있습니다. <br />다양한 문화의 콘텐츠는 시청자의 관심 분야에 새로운 가치를 더합니다.</p>
              </div>
            </ReactCSSTransitionGroup>
          </div>
        </LazyLoad>
        <LazyLoad height={200}>
          <div className={'container-login103'} style={{backgroundColor: '#FBFAF8'}}>
            <ReactCSSTransitionGroup
              transitionName={'slideleft'}
              transitionApperTimeout={500}
              transitionEnterTimeout={500}
              transitionAppear={true}
              transitionEnter={true}
              transitionLeave={false}
            >
              <div style={{marginLeft: '3em'}}>
                <h2 style={{lineHeight: '2em', marginLeft: '2em'}}><span style={{fontWeight: 'lighter'}}>글로벌 시청자를 위한 </span><strong><span style={{color: '#F57A9E'}}>글로벌 콘텐츠</span></strong></h2>
                <p style={{fontSize: '15px', color: 'grey', marginTop: '2em', lineHeight: '2em', marginLeft: '4.5em', textAlign: 'justify', width: '100%'}}>ULIME은 시청자에게 해외 크리에이터를 소개하고 콘텐츠를 추천합니다. 자막생성만으로는 <br />유튜브에서 타겟하기 어려웠던 해외 시청자의 마음을 사로잡고 유튜브 채널 방문을 유도하세요.</p>
              </div>
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
              transitionName={'slidebottom'}
              transitionApperTimeout={500}
              transitionEnterTimeout={500}
              transitionAppear={true}
              transitionEnter={true}
              transitionLeave={false}
            >
            <img src={phone_contents} style={{display: 'flex', marginTop: '5em', marginLeft: '7.8em', float: 'right', height: '50em'}} />
            </ReactCSSTransitionGroup>
          </div>
        </LazyLoad>
        <LazyLoad height={200}>
          <ReactCSSTransitionGroup
            transitionName={'example'}
            transitionApperTimeout={500}
            transitionEnterTimeout={500}
            transitionAppear={true}
            transitionEnter={true}
            transitionLeave={false}
          >
            <SignupPage history={this.props.history} />
          </ReactCSSTransitionGroup>
        </LazyLoad>
      </div>
    );
  }
}

export default Intro;
