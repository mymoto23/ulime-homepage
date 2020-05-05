import React, {Component} from 'react';
import axios from 'axios';
import * as Constants from '../Constants';

class MainFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      email: '',
      content: '',
    };
  }

  handleChange(e){
    switch(e.target.id) {
      case 'title':
        this.setState({title: e.target.value});
        break;
      case 'email':
        this.setState({email: e.target.value});
        break;
      case 'content':
        this.setState({content: e.target.value});
        break;
      default:
        return;
    }
  };

  async handleClick() {
    const URL = `${Constants.API_URL}/inquiry/`;
    const {title, content, email} = this.state;
    if (!title || !content || !email) {
      alert('제목, 이메일, 문의 내용을 입력해 주세요.');
      return;
    }
    try {
      await axios.post(URL, this.state)
        .then(() => {
          alert('문의가 성공적으로 접수되었습니다. 감사합니다.');
          this.setState({title: '', email: '', content: ''});
        })
        .catch(err => {
          console.log(err.response);
          alert(err.response.data.error);
        });
    } catch(e) {
      alert(e);
    }
  }

  render() {
    const {title, email, content} = this.state;
    return(
      <div className={'main-footer'}>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
          <div
            style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', width: '30%', margin: '2em'}}>
          <span style={{fontSize: '15px', fontWeight: 'lighter', lineHeight: '1.5em'}}>
            (주) XX  |  대표 XXX  |  사업자 등록번호 XXX-XX-XXXXXX
            <br/>
            XXXXX XXXXX XXX XXX XXX XX
          </span>

          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '60%', margin: '2em'}}>
            <h6 style={{fontWeight: 'bolder'}}>문의</h6>
            <input id={'title'} value={title} className={'requisite-input'} onChange={e => this.handleChange(e)} placeholder={'제목'}/>
            <input id={'email'} value={email} className={'requisite-input'} onChange={e => this.handleChange(e)} placeholder={'이메일'}/>
            <textarea id={'content'} value={content} className={'requisite-input'} onChange={e => this.handleChange(e)} style={{height: '10em'}} placeholder={'문의 내용'}/>
            <button type={'submit'} style={{backgroundColor: 'white', color: '#F57A9E'}} onClick={() => this.handleClick()}>문의하기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainFooter;
