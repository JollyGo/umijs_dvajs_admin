import * as myStyles from './styles.less'
import {Button} from 'antd'
import React, { PureComponent } from 'react';
import {connect} from 'dva'

@connect()
class home extends PureComponent{
  onHandle=()=>{
    const { dispatch } = this.props;
      dispatch({
          type: 'user/center'
      }
    );
  }

  render(){ 
    return (
    <div >
      <span className={myStyles.home}>home index</span>
      <br/>
      <div className={myStyles.hello}>
        <span className={myStyles.deleted}>hello</span>
      </div>
      <br/>
      <p>
        <Button>原生Button</Button>
      </p>
      <p>
        <span className={myStyles['override-ant-btn']}>
          <Button type="primary" onClick={this.onHandle}>自定义样式</Button>
        </span>
      </p>
    </div>
    )}
}
export default home