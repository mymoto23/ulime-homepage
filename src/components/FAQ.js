import React, {Component} from 'react';
import {ListGroupItem, ListGroup, CardBody, Card} from "reactstrap";
import UncontrolledCollapse from "reactstrap/es/UncontrolledCollapse";
import arrowdown from '../static/arrowdown.png';
import arrowup from '../static/arrowup.png';

class FAQ extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div style={{margin: '5em'}}>
        <h2>자주 묻는 질문</h2>
        <div style={{margin: '4em'}}>
          <ListGroup>
            <ListGroupItem style={{outline: 'none', color: 'black', textAlign: 'left', fontWeight: 'bolder'}} action tag={'button'} id={'toggler'}>유튜브 구글 계정으로 회원가입 해야하나요?
              <img style={{float: 'right', height: '1em', marginTop: '4px'}} src={arrowdown} />
            </ListGroupItem>
            <UncontrolledCollapse toggler={'#toggler'}>
              <Card style={{backgroundColor: '#F8F8F8', borderRadius: '0px'}}>
                <CardBody style={{color: '#808080', fontSize: '13px'}}>
                  네, ULIME 사전등록 및 회원가입 시 크리에이터는 반드시 유튜브 구글 계정을 이용하셔야합니다.
                  <br />기타 이메일 계정을 사용한다면 사전등록 혜택을 수령 받지 못할 뿐만 아니라 크리에이터 페이지를 생성할 수 없습니다.
                </CardBody>
              </Card>
            </UncontrolledCollapse>
            <br />
            <ListGroupItem style={{outline: 'none', color: 'black', textAlign: 'left'}} action tag={'button'} id={'toggler1'}>ULIME과 유튜브는 어떻게 다른가요?
              <img style={{float: 'right', height: '1em', marginTop: '4px'}} src={arrowdown} />
            </ListGroupItem>
            <UncontrolledCollapse toggler={'#toggler1'}>
              <Card style={{backgroundColor: '#F8F8F8'}}>
                <CardBody style={{color: '#808080', fontSize: '13px'}}>
                  ULIME은 유튜브 크리에이터를 해외 시청자에게 추천해주는 어플리케이션 서비스입니다.
                  <br />유튜브는 개인 맞춤 추천에 최적화 되어 있으므로 시청자는 본인이 인지하고 있는 관심분야와 트렌드에 맞는 콘텐츠를 소비합니다.
                  <br />따라서 국경을 넘나드는 콘텐츠 추천과 소비는 원활하게 이루어지지 않습니다. <br />ULIME은 언어 장벽과 문화 차이로 인해 접점을 가지기 어려웠던 크리에이터와 시청자를 연결해주는 콘텐츠 및 마케팅 플랫폼입니다.
                </CardBody>
              </Card>
            </UncontrolledCollapse>
            <br />
            <ListGroupItem style={{outline: 'none', color: 'black', textAlign: 'left'}} action tag={'button'} id={'toggler2'}>ULIME 콘텐츠에 대해 알려주세요!
              <img style={{float: 'right', height: '1em', marginTop: '4px'}} src={arrowdown} />
            </ListGroupItem>
            <UncontrolledCollapse toggler={'#toggler2'}>
              <Card style={{backgroundColor: '#F8F8F8'}}>
                <CardBody style={{color: '#808080', fontSize: '13px'}}>
                  ULIME에서 볼 수 있는 모든 콘텐츠는 크리에이터가 자신의 유튜브 영상을 홍보하기 위해 등록한 콘텐츠입니다. <br />시청자는 ULIME에서 해외 크리에이터의 영상을 시청하고 더 관심이 생긴다면 바로가기를 통해 크리에이터의 유튜브 채널을 방문할 수 있습니다.
                </CardBody>
              </Card>
            </UncontrolledCollapse>
            <br />
            <ListGroupItem style={{outline: 'none', color: 'black', textAlign: 'left'}} action tag={'button'} id={'toggler3'}>크리에이터는 ULIME의 홍보효과를 어떻게 확인할 수 있나요?
              <img style={{float: 'right', height: '1em', marginTop: '4px'}} src={arrowdown} />
            </ListGroupItem>
            <UncontrolledCollapse toggler={'#toggler3'}>
              <Card style={{backgroundColor: '#F8F8F8'}}>
                <CardBody style={{color: '#808080', fontSize: '13px'}}>
                  ULIME은 시청자를 효과적으로 크리에이터의 유튜브 채널로 유입시키기 위해 노력합니다. 콘텐츠를 등록한 크리에이터는 시청자반응 데이터를 제공받음으로써 ULIME의 마케팅 효과를 확인할 수 있습니다. <br />시청자반응 데이터를 통해 크리에이터는 콘텐츠 도달과 조회수, 그리고 그 중 실제로 크리에이터의 유튜브 채널로 유입되는 잠재적 구독자 수를 알 수 있습니다.
                </CardBody>
              </Card>
            </UncontrolledCollapse>
            <br />
            <ListGroupItem style={{outline: 'none', color: 'black', textAlign: 'left'}} action tag={'button'} id={'toggler4'}>시청자에게 도달하는 콘텐츠는 모두 같나요?
              <img style={{float: 'right', height: '1em', marginTop: '4px'}} src={arrowdown} />
            </ListGroupItem>
            <UncontrolledCollapse toggler={'#toggler4'}>
              <Card style={{backgroundColor: '#F8F8F8'}}>
                <CardBody style={{color: '#808080', fontSize: '13px'}}>
                  ULIME은 나라마다 서버가 존재합니다. 각 나라의 크리에이터마다 등록하고 싶은 콘텐츠와 타겟으로하는 해외 시청자가 다르기 때문에 시청자에게 도달하는 콘텐츠는 서버마다 다릅니다. <br />둘러보기 메뉴에서 인기 콘텐츠를 예시로 들었을때 콘텐츠의 화제성은 나라마다 다를 수 있어 시청자에게 도달하는 콘텐츠는 차이가 있습니다.
                </CardBody>
              </Card>
            </UncontrolledCollapse>
            <br />
            <ListGroupItem style={{outline: 'none', color: 'black', textAlign: 'left'}} action tag={'button'} id={'toggler5'}>크리에이터에게 적합한 해외 시장을 어떻게 알 수 있나요?
              <img style={{float: 'right', height: '1em', marginTop: '4px'}} src={arrowdown} />
            </ListGroupItem>
            <UncontrolledCollapse toggler={'#toggler5'}>
              <Card style={{backgroundColor: '#F8F8F8'}}>
                <CardBody style={{color: '#808080', fontSize: '13px'}}>
                  ULIME이 분석하는 글로벌 콘텐츠 트렌드를 통해 나라마다 어떤 분야, 키워드, 그리고 콘텐츠가 인기가 있는지 파악할 수 있습니다. <br />크리에이터는 본인의 콘텐츠 연관성이 높은 분야와 주제가 화제가 되고 있는 나라에서 긍정적인 마케팅 효과를 기대할 수 있습니다.
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </ListGroup>
        </div>
      </div>
    );
  }

}

export default FAQ;
