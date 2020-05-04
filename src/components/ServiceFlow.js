import React, {Component} from 'react';
import sf from "../static/serviceflow.png";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class ServiceFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategoryID: '',
      newCategoryName: '',
    }
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
        <div className={'container-login100'} style={{width: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'white'}}>
          <div style={{marginRight: '35em', marginTop: '3em'}}>
            <div style={{height: '0.4em', marginBottom: '1em', backgroundColor: '#F57A9E', width: '12%'}} />
            <h2 style={{lineHeight: '1.5em'}}>
              <span style={{fontWeight: 'lighter'}}>간편하게 YouTube 영상만 불러오면</span>
              <br />
              <strong style={{letterSpacing: '1px'}}>
                오늘부터 나도 글로벌 크리에이터!
              </strong>
            </h2>
          </div>
          <img style={{width: '90%', marginTop: '3.5em', marginBottom: '4em'}} src={sf} />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default ServiceFlow;
