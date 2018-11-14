import * as myStyles from './styles.less'
import {Button} from 'antd'
export default () => {
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
          <Button type="primary">自定义样式</Button>
        </span>
      </p>
    </div>
    );
  }