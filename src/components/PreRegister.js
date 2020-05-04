import React, { Component } from 'react'
import './Signup/Signup.css'
import {Button, InputGroup, Modal, ModalBody, ModalHeader} from "reactstrap";
import DatePicker from "react-datepicker/es";
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Input from "reactstrap/es/Input";
import InputGroupAddon from "reactstrap/es/InputGroupAddon";
import InputGroupText from "reactstrap/es/InputGroupText";

class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      id: '',
      pw: '',
      pw_again: '',
      email: '',
      code: '',
      birthday: '',
      group: 1,

      modelOpen: false,
      pwIsValid: false,
      pwCompare: false,

      // UI상태 저장용
      buttonPressed_email: false,
    }
  }

  pwRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20}$)");

  handleChange = (e) => {
    switch (e.target.name) {
      case 'pw':
        if (e.target.name === 'pw') {
          if (this.pwRegex.test(e.target.value)) {
            this.setState({
              pw: e.target.value,
              pwIsValid: true
            });
          }
          else {
            this.setState({
              pw: e.target.value,
              pwIsValid: false
            });
          }
        }
        break;

      case 'pw_again':
        if (e.target.value === this.state.pw) {
          this.setState({
            pw_again: e.target.value,
            pwCompare: true
          });
        }
        else {
          this.setState({
            pw_again: e.target.value,
            pwCompare: false
          });
        }
        break;

      case 'id':
        this.props.onIdValidation(0);
        this.setState({
          id: e.target.value
        });
        break;

      default:
        this.setState({
          [e.target.name]: e.target.value
        });
        break;
    }
  };

  toggle = () => {
    this.setState({modalOpen: !this.state.modalOpen});
  };

  handleClick_id = () => {
    this.props.onConfirmId(this.state.id);
  };

  handleClick_email = () => {
    this.props.onSendEmail(this.state.email+'@snu.ac.kr');
    this.props.onEmailValidation(0);
    this.setState({
      buttonPressed_email: true
    });
  }

  handleClick_code = () => {
    this.props.onConfirmCode(this.state.code);
    this.setState({
      buttonPressed_code: true,
    })
  }

  handleClick_signUp = () => {
    const {name,id,pw,email, pwIsValid, pwCompare} = this.state;
    const {idIsValid, emailIsValid} = this.props;
    if(!(idIsValid && emailIsValid && pwIsValid && pwCompare)){
      alert('입력하신 정보가 잘못되었거나 유효하지 않습니다. 다시 한 번 확인해 주세요.');
    }
    else {
      try {
        this.props.onSignUp(name,id,pw,email+'@snu.ac.kr');
        alert("회원가입에 성공하였습니다.");
        this.props.history.push("/login/");
      } catch(e){
        alert("회원가입 실패 :" + e.message);
      }
    }
  }

  idUI = () => {
    const {idIsValid} = this.props;
    if(idIsValid===0) return <span className='check' style={{color:'blue'}}>아이디 중복체크를 완료해주세요.</span>
    else if(idIsValid===1) return <span className='check' style={{color:'green'}}>유효한 아이디입니다.</span>
    else return <span className='check' style={{color:'red'}}>유효하지 않거나 이미 가입된 아이디입니다.</span>
  }

  emailUI = () => {
    const {emailSent} = this.props;
    const {buttonPressed_email} = this.state;
    const {codeUI} = this;
    if(!buttonPressed_email) return;
    else{
      if(emailSent===0) return;
      else if(emailSent===2) return <span style={{color:'red'}}>유효하지 않거나 중복된 이메일입니다.</span>
      else return (
          <div>
            <input name='code' type='text' onChange={this.handleChange} />
            <button type='button' onClick={this.handleClick_code}>인증</button>
            {codeUI()}
          </div>
        )
    }
  }

  codeUI = () => {
    const {emailIsValid} = this.props;
    if(emailIsValid===0) return <span className='check' style={{color:'blue'}}>코드 인증을 완료해주세요.</span>
    else if(emailIsValid===1) return <span className='check' style={{color:'green'}}>인증이 완료되었습니다.</span>
    else return <span className='check' style={{color:'red'}}>인증에 실패하였습니다.</span>
  }

  render(){
    const {pw, pw_again, pwIsValid, pwCompare} = this.state;
    console.log('state', this.state.group);
    const {idUI, emailUI} = this;
    return (
      <div className={'container-login106'} style={{backgroundColor: '#F8F8F8'}}>
        <br />
        <br />
        <div style={{marginLeft: '8em'}}>
        <div style={{height: '0.4em', marginBottom: '1em', backgroundColor: '#F57A9E', width: '5%'}} />
          <h2 style={{fontWeight: 'lighter'}}>사전등록</h2>
        </div>

        <br />

        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '17em', width: '60%', alignItems: 'center', justifyContent: 'center'}}>
          {/*<Input class={'form-control input'} id={'preregister-input'} name='id'  type='text' maxLength='20' placeholder='이름' onChange={this.handleChange} />*/}

          <input className={'prereg-input'} placeholder={'이름'}/>

          {/*<InputGroup className={'name'}>*/}
            {/*/!*<InputGroupAddon addonType={'prepend'}>*!/*/}
              {/*/!*<InputGroupText><i className="fa fa-birthday-cake" aria-hidden="true"></i></InputGroupText>*!/*/}
            {/*/!*</InputGroupAddon>*!/*/}
            {/*<Input class={'form-control input'} id={'preregister-input'} type='date' maxLength='20' placeholder='생년월일' onChange={this.handleChange} />*/}
            {/*&nbsp;*/}
            {/*/!*<InputGroupAddon addonType={'prepend'}>*!/*/}
              {/*/!*<InputGroupText><i className="fa fa-venus-mars" aria-hidden="true"></i></InputGroupText>*!/*/}
            {/*/!*</InputGroupAddon>*!/*/}
            {/*<Input class={'form-control input'} id={'preregister-input'} type='select' maxLength='20' placeholder='성별' onChange={this.handleChange}>*/}
              {/*<option>성별</option>*/}
              {/*<option>남</option>*/}
              {/*<option>녀</option>*/}
              {/*<option>밝히고 싶지 않음</option>*/}
            {/*</Input>*/}
          {/*</InputGroup>*/}

          {/*<div className='name'>*/}
              {/*<span>*/}
              {/*/!*<input className='name-input' name='name' type='text' maxLength='20' placeholder='생일' onChange={this.handleChange} />*!/*/}
              {/*<DatePicker*/}
                {/*selected={this.state.birthday}*/}
                {/*// dateFormat={'Pp'}*/}
                {/*onChange={date => this.setState({birthday: date})}*/}
              {/*/>*/}
              {/*<span className="focus-input100"></span>*/}
                {/*<span className="symbol-input100">*/}
                  {/*<i className="fa fa-birthday-cake" aria-hidden="true"></i>*/}
                {/*</span>*/}
              {/*</span>*/}
          {/*</div>*/}

          {/*<InputGroup style={{display: 'flex', flexDirection: 'column'}}>*/}
            {/*<Input class={'form-control input'} id={'preregister-input1'} type='text' maxLength='20' placeholder='이메일 (example@gmail.com)' onChange={this.handleChange} />*/}
            {/*<p style={{fontSize: '12px', fontWeight: 'lighter', marginLeft: '39em'}}>*유튜브 채널 계정과 일치해야 사전등록 혜택을 받을 수 있습니다.</p>*/}
            {/*/!*<Button style={{marginLeft: '1em'}} className='verify' type='button' color={'primary'} onClick={this.handleClick_email}>인증코드 전송</Button>*!/*/}
          {/*</InputGroup>*/}

          <div style={{width: '100%'}}>
            <input className={'prereg-input'} placeholder={'이메일'} />
            <p style={{fontSize: '12px', fontWeight: 'lighter', float: 'right'}}>*유튜브 채널 계정과 일치해야 사전등록 혜택을 받을 수 있습니다.</p>
          </div>

          <input className={'prereg-input'} placeholder={'유튜브 채널 이름'} />

          {/*<div>*/}
            {/*<div className='email'>*/}
                {/*<span className='snu-email'><input name='email' className='email-add' type='text' placeholder='이메일' onChange={this.handleChange} />*/}
                  {/*<span className="focus-input100"></span>*/}
                  {/*<span className="symbol-input100">*/}
                    {/*<i className="fa fa-envelope" aria-hidden="true"></i>*/}
                  {/*</span>*/}
                {/*</span>*/}
              {/*<button className='verify' type='button' onClick={this.handleClick_email}>인증코드 전송</button>*/}
            {/*</div>*/}
            {/*{emailUI()}*/}
          {/*</div>*/}

          {/*<InputGroup className={'name'}>*/}
            {/*<InputGroupAddon addonType={'prepend'}>*/}
              {/*<InputGroupText><i className="fa fa-id-card-o" aria-hidden="true"></i></InputGroupText>*/}
            {/*</InputGroupAddon>*/}
            {/*<Input class={'form-control input'} id={'preregister-input'} name='id' type='text' maxLength='20' placeholder='유튜브 채널 이름' onChange={this.handleChange} />*/}
          {/*</InputGroup>*/}

          <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
            <input className={'prereg-input'} style={{width: '50%'}} type={'number'} placeholder={'구독자 수'} />
            <br />&nbsp;
            <select className={'prereg-input'} id={'mySelect'} style={{backgroundColor: 'white', color: '#F57A9E'}} placeholder={'컨텐츠 카테고리'}>
              <option>카테고리</option>
              <option>엔터테인먼트</option>
              <option>인물 & 블로그</option>
              <option>음악</option>
              <option>스타일 & 패션</option>
            </select>
          </div>

          {/*<InputGroup className={'name'}>*/}
            {/*<InputGroupAddon addonType={'prepend'}>*/}
              {/*<InputGroupText><i className="fa fa-venus-mars" aria-hidden="true"></i></InputGroupText>*/}
            {/*</InputGroupAddon>*/}
            {/*<Input className='id-input' name='id' type='select' maxLength='20' placeholder='성별' onChange={this.handleChange}>*/}
              {/*<option>성별</option>*/}
              {/*<option>남</option>*/}
              {/*<option>녀</option>*/}
              {/*<option>밝히고 싶지 않음</option>*/}
            {/*</Input>*/}
          {/*</InputGroup>*/}

          {/*<InputGroup className={'name'}>*/}
            {/*<InputGroupAddon addonType={'prepend'}>*/}
              {/*<InputGroupText><i className="fa fa-align-justify" aria-hidden="true"></i></InputGroupText>*/}
            {/*</InputGroupAddon>*/}
            {/*<Input class={'form-control input'} id={'preregister-input'} name='id' type='select' maxLength='20' placeholder='컨텐츠 카테고리' onChange={this.handleChange}>*/}
              {/*<option>컨텐츠 카테고리</option>*/}
              {/*<option>1</option>*/}
              {/*<option>2</option>*/}
              {/*<option>3</option>*/}
            {/*</Input>*/}
          {/*</InputGroup>*/}

          {/*<InputGroup className={'name'}>*/}
            {/*<InputGroupAddon addonType={'prepend'}>*/}
              {/*<InputGroupText><i className="fa fa-users" aria-hidden="true"></i></InputGroupText>*/}
            {/*</InputGroupAddon>*/}
            {/*<Input class={'form-control input'} id={'preregister-input'} name='id' type='select' maxLength='20' placeholder='구독자 수' onChange={this.handleChange}>*/}
              {/*<option>구독자 수</option>*/}
              {/*<option>1</option>*/}
              {/*<option>2</option>*/}
              {/*<option>3</option>*/}
            {/*</Input>*/}
          {/*</InputGroup>*/}

          {/*<InputGroup className={'name'}>*/}
            {/*<InputGroupAddon addonType={'prepend'}>*/}
              {/*<InputGroupText><i className="fa fa-link" aria-hidden="true"></i></InputGroupText>*/}
            {/*</InputGroupAddon>*/}
          {/*<select className={'prereg-input'} type={'url'} placeholder={'유튜브 채널 URL'} />*/}
          <select className={'prereg-input'} id={'mySelect'} style={{backgroundColor: 'white', color: '#F57A9E'}} onChange={e => this.setState({group: e.target.value})} placeholder={'소속'}>
            <option value={1}>개인</option>
            <option value={2}>MCN</option>
            <option value={3}>그룹</option>
          </select>
          {
            (+this.state.group === 2 || +this.state.group === 3) &&
              <input className={'prereg-input'} placeholder={'소속 단체 이름'} />
          }
          <input className={'prereg-input'} type={'url'} placeholder={'유튜브 채널 URL'} />
          {/*</InputGroup>*/}
          <br />
          <div style={{width: '100%'}}>
            <div style={{float: 'left'}}>
              <h6>
                <a style={{fontWeight: 'bolder'}}>개인정보 이용약관</a>
                &nbsp;
                <span style={{color: 'red', fontWeight: 'lighter', fontSize: '12px', textDecoration: 'underline'}} onClick={this.toggle}>(필수)</span>
                </h6>
              <input type={'radio'} /> &nbsp; <span style={{fontSize: '12px', fontWeight: 'lighter'}}>개인정보 이용약관에 동의합니다.</span>
            </div>
          </div>
          <br />
          <button className='sign-up-button' style={{backgroundColor: '#F57A9E'}} type='button' onClick={() => alert('죄송합니다. 현재는 사전등록 기간이 아닙니다.')}>사전등록</button>

          <Modal size={'lg'} isOpen={this.state.modalOpen} toggle={this.toggle}>
            <ModalHeader>
              개인정보 처리방침
            </ModalHeader>
            <ModalBody style={{whiteSpace: 'preline'}}>
              <strong>1. ULIME 개인정보처리방침</strong>
              <br />
              ULIME 개인정보처리방침은 회사가 서비스를 제공함에 있어 정보를 어떻게 수집, 이용, 보관, 파기하는지에 대한 정보를 담은 방침을 의미합니다.
              <br />
              <strong>2. 수집하는 개인정보의 항목</strong>
              <br />
              회사는 사전등록 시점부터 아래와 같은 개인정보 중 일부를 수집합니다.
              <br />
              이름, 이메일, 생년월일, 유튜브 채널 정보 (URL, 구독자수, 카테고리)
              <br />
              <strong>3. 수집한 개인정보의 이용</strong>
              <br />
              1) 회원 식별, 사전등록혜택제공, 중복등록 방지, 등 회원관리
              <br />
              2) 회원 문의, 제안, 제휴, 협력, 정식 서비스 론칭, 등 회사 관련 공지사항 전달
              <br />
              <strong>4. 회사는 원칙적으로 회원의 동의 없이 개인정보를 외부에 제공·위탁하지 않습니다. 단, 아래의 경우에 한해 제휴사, 국가기관, 등에 제공될 수 있습니다.</strong>
              <br />
              1) 회원이 회사와 약정을 체결한 경우
              <br />
              2) 회원의 생명이나 안전에 급박한 위험이 확인되어 이를 해소하기 위한 경우
              <br />
              3) 기타 관련 법령에 의해 개인정보 제공 의무가 발생한 경우 등
              <br />
              <strong>5. 수집한 개인정보의 보관 및 파기</strong>
              <br />
              개인정보 수집 및 사전등록기간이 종료된 후, 정식 서비스에 참여하지 않은 회원의 개인정보는 최대 1년 이후 파기 또는 분리보관 됩니다. 단, 법령에 의해 항목을 보관할 경우, 해당 법령에서 정한 최대 기간만큼 저장합니다.
              <br />
              <strong>6. 정보주체의 권리, 의무 및 행사</strong>
              <br />
              사전등록한 회원은 정식 서비스 론칭 후 언제든지 자신의 개인정보를 조회하거나 수정, 삭제, 탈퇴를 할 수 있습니다. 단, 회원이 회사와 약정을 체결하였을 경우, 해당 약정을 이행하기 위해, 약정이 종료되기 전까지 개인정보의 수정, 삭제, 탈퇴 요청을 거부할 수 있습니다.
              <br />
              <strong>7. 개인정보에 대한 기타 서비스 및 문의</strong>
              <br />
              회사는 회원의 개인정보를 최선으로 보호하고 관련된 불만을 처리하기 위해 문제 발생을 인지하는 즉시 대응할 것을 약속합니다. ULIME 서비스를 설정 메뉴에서 바로 해당 문제에 대한 해결을 요청 할 수 있습니다.
              <br />
              <br />

              기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
              <br />
              1) 개인분쟁조정위원회 (www.1336.or.kr/1336)
              <br />
              2) 정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)
              <br />
              3) 대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600)
              <br />

              4) 경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)
            </ModalBody>
          </Modal>
        </div>
      </div>
    )
  }
}



export default SignUp
