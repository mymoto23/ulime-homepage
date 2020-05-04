import React, {Component} from 'react'
import './Signup.css'

class SignUp extends Component{

  render(){
    return (
        <div>

          <div className="limiter">
            <div className="container-login101" style={{minHeight: '70vh'}}>
              <h2 style={{textAlign: 'center',fontWeight: 'bolder', lineHeight: '1.5em'}}>
                전세계 시청자가
                <br />
                당신의 콘텐츠를 기다리고 있습니다.
              </h2>
              <br />
              <h6 style={{fontWeight: 'lighter'}}>
                ULIME을 통해 글로벌 크리에이터로 성장하세요!
              </h6>
              <br />
                <button className={'sign-up-button'} style={{backgroundColor: '#F57A9E'}} onClick={() => this.props.history.push('/pre-register')}>사전등록</button>
              <br />
              <div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}



export default SignUp
