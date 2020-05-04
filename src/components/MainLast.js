import React, {Component} from 'react';
import phone_creator from '../static/phone_creator.png'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class MainLast extends Component {
  constructor(props) {
    super(props);
  }

  handleLearnMoreClick = (e) => {
    switch(e.target.name) {
      case 'more':
        this.props.history.push('/intro');
        break;
      case 'pre-register':
        this.props.history.push('/pre-register');
    }
  };

  render() {
    return(
      <ReactCSSTransitionGroup
        transitionName={'slidebottom'}
        transitionApperTimeout={500}
        transitionEnterTimeout={500}
        transitionAppear={true}
        transitionEnter={true}
        transitionLeave={false}
      >
        <div>
          <div className={'container-login105'} style={{flexDirection: 'column', textAlign: 'center'}}>
            <h1><strong>
              크리에이터의 해외 진출 <br />
              <span style={{color:'#F57A9E'}}>효과적인 마케팅에서</span> 시작됩니다.
            </strong>
            </h1>
            <div style={{height: '0.4em', marginBottom: '2em', marginTop: '1em',  backgroundColor: '#F57A9E', width: '4%'}} />
            <h5 style={{color: 'black', letterSpacing: '1px', lineHeight: '1.5em', marginTop: '2em', fontWeight: 'lighter'}}>단 하나의 플랫폼으로 마케팅의 불편함을 해소하고
              <br />
              세계 각지에 있는 시청자를 사로잡으세요.
            </h5>
          </div>
          <div style={{textAlign: 'center'}}>
            <div>
              <button name={'more'} className={'sign-up-button'} onClick={e => this.handleLearnMoreClick(e)} style={{backgroundColor: 'white', color: '#F57A9E', outline: 'none', border: '1px solid #F57A9E', marginRight: '0.5em', fontWeight: 'bolder'}}>더 알아보기</button>
              <button name={'pre-register'} className={'sign-up-button'} onClick={e => this.handleLearnMoreClick(e)} style={{backgroundColor: '#F57A9E', color: 'white', outline: 'none', marginLeft: '0.5em', fontWeight: 'bolder'}}>사전 등록</button>
            </div>

            <div style={{maxHeight: '400px', overflow: 'hidden', marginLeft: '1.2em'}} >
              <img style={{maxHeight: 'initial', width: '40%'}} src={phone_creator} />
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }

}

export default MainLast;
