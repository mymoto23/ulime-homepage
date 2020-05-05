import React, {Component} from 'react'
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import '../style.css';
import * as Constants from '../Constants';
import {CATEGORY_TYPE_STRINGS} from "../Constants";
import {AFFILIATION_TYPE_STRINGS} from "../Constants";
import axios from 'axios';

class PreRegister extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      youtubeChannelName: '',
      subscriberCount: null,
      category: 100,
      affiliation: 100,
      affiliatedWith: '',
      youtubeChannelURL: '',
      modelOpen: false,
      agreedToTerms: false
    }
  }

  toggle = () => {
    this.setState({modalOpen: !this.state.modalOpen});
  };

  handleChange = (e) => {
    switch(e.target.name) {
      case 'name':
        this.setState({name: e.target.value});
        break;
      case 'email':
        this.setState({email: e.target.value});
        break;
      case 'channelname':
        this.setState({youtubeChannelName: e.target.value});
        break;
      case 'subscribercount':
        if (+e.target.value < 0 ) {
          alert('구독자 수는 0명 이상이어야 합니다');
          return;
        }
        this.setState({subscriberCount: +e.target.value});
        break;
      case 'category':
        this.setState({category: +e.target.value});
        break;
      case 'affiliation':
        this.setState({affiliation: +e.target.value});
        if (+e.target.value === Constants.AFFILIATION_INDIVIDUAL) this.setState({affiliatedWith: ''});
        break;
      case 'affiliatedwith':
        this.setState({affiliatedWith: e.target.value});
        break;
      case 'youtubeURL':
        this.setState({youtubeChannelURL: e.target.value});
        break;
      default:
        return;
    }
  };

  areAllFieldsEntered = () => {
    const {name, email, youtubeChannelName, subscriberCount, category, affiliation, youtubeChannelURL} = this.state;
    return name && email && youtubeChannelName && subscriberCount >= 0 && category !== 100 && affiliation !== 100 && youtubeChannelURL;
  };

  handleClick = async () => {
    const {agreedToTerms} = this.state;
    if (!agreedToTerms) {
      alert('개인정보 이용약관에 동의해주시기 바랍니다.');
      return;
    }
    if (!this.areAllFieldsEntered()) {
      alert('사전등록에 필요한 정보를 완전히 기입해주시기 바랍니다.');
      return;
    }
    try {
      const data = {
        ...this.state
      };
      delete data.modelOpen;
      delete data.agreedToTerms;
      await axios.post(`${Constants.API_URL}/preregister`, data)
        .then(() => {
          alert('성공적으로 사전등록이 되었습니다. 감사합니다.');
          this.setState({
            name: '',
            email: '',
            youtubeChannelName: '',
            subscriberCount: '',
            category: 100,
            affiliation: 100,
            affiliatedWith: '',
            youtubeChannelURL: ''
          })
        })
        .catch(err => {
          console.log(err.response);
          alert(err.response.data.error);
        });
    } catch (e) {
      alert(e.message);
    }
  };

  render(){
    const {name, email, youtubeChannelName, subscriberCount, category, affiliation, youtubeChannelURL, affiliatedWith} = this.state;
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

          <input name={'name'} value={name} className={'prereg-input'} placeholder={'이름'} onChange={e => this.handleChange(e)} />

          <div style={{width: '100%'}}>
            <input name={'email'} value={email} className={'prereg-input'} placeholder={'이메일'} onChange={e => this.handleChange(e)} />
            <p style={{fontSize: '12px', fontWeight: 'lighter', float: 'right'}}>*유튜브 채널 계정과 일치해야 사전등록 혜택을 받을 수 있습니다.</p>
          </div>

          <input name={'channelname'} value={youtubeChannelName} className={'prereg-input'} placeholder={'유튜브 채널 이름'} onChange={e => this.handleChange(e)} />

          <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
            <input name={'subscribercount'} value={subscriberCount} className={'prereg-input'} style={{width: '50%'}} type={'number'} placeholder={'구독자 수'} onChange={e => this.handleChange(e)} />
            <br />&nbsp;
            <select name={'category'} value={category} className={'prereg-input'} id={'mySelect'} style={{backgroundColor: 'white', color: '#F57A9E'}} placeholder={'컨텐츠 카테고리'} onChange={e => this.handleChange(e)}>
              <option value={100}>카테고리를 선택해 주세요.</option>
              {Constants.CATEGORIES.map(c => (
                <option key={c} value={c}>{CATEGORY_TYPE_STRINGS[c]}</option>
              ))}
            </select>
          </div>

          <select name={'affiliation'} value={affiliation} className={'prereg-input'} id={'mySelect'} style={{backgroundColor: 'white', color: '#F57A9E'}} onChange={e => this.handleChange(e)} placeholder={'소속'}>
            <option value={100}>소속을 선택해 주세요.</option>
            {Constants.AFFILIATIONS.map(a => (
              <option key={a} value={a}>{AFFILIATION_TYPE_STRINGS[a]}</option>
            ))}
          </select>
          {
            (+this.state.affiliation === Constants.AFFILIATION_MCN || +this.state.affiliation === Constants.AFFILIATION_GROUP) &&
              <input name={'affiliatedwith'} value={affiliatedWith} className={'prereg-input'} placeholder={'소속 단체 이름'} onChange={e => this.handleChange(e)} />
          }
          <input name={'youtubeURL'} value={youtubeChannelURL} className={'prereg-input'} type={'url'} placeholder={'유튜브 채널 URL'} onChange={e => this.handleChange(e)} />
          <br />
          <div style={{width: '100%'}}>
            <div style={{float: 'left'}}>
              <h6>
                <span style={{fontWeight: 'bolder'}}>개인정보 이용약관</span>
                &nbsp;
                <a href={'#'} style={{color: 'red', fontWeight: 'lighter', fontSize: '12px', textDecoration: 'underline'}} onClick={this.toggle}>(필수)</a>
                </h6>
              <input type={'radio'} onChange={e => this.setState({agreedToTerms: e.target.checked})} /> &nbsp; <span style={{fontSize: '12px', fontWeight: 'lighter'}}>개인정보 이용약관에 동의합니다.</span>
            </div>
          </div>
          <br />
          <button className='sign-up-button' style={{backgroundColor: '#F57A9E'}} type='button' onClick={() => this.handleClick()}>사전등록</button>

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



export default PreRegister
