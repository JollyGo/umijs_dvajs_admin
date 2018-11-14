import React, { PureComponent, Fragment } from 'react';
import {GlobalFooter} from 'ant-design-pro';
import { Button, Row, Form, Icon, Input ,Alert} from 'antd';
import config from '../../utils/config';
import { connect } from 'dva';
import styles from './index.less'
const FormItem = Form.Item

function mapStateToProps(state){
  return{
    visible:state.login.visible,
    loginLoading: state.loading.effects['login/login']
  }
}

@connect(mapStateToProps)
@Form.create()
class login extends PureComponent{

    handleOk=()=>{
      const { dispatch, form: { validateFields } } = this.props;
      validateFields((err, values) => {
        if (!err) {
          dispatch({
            type: 'login/login',
            payload: values,
          });
          // 重置 `visible` 属性为 false 以关闭对话框
        }
      });
    }

    errorClose=()=>{
      const {dispatch}=this.props;
      dispatch({
        type:'login/errorClose'
      })
    }

    render(){

        const {form, dispatch}=this.props
        const {getFieldDecorator}=form

        let footerLinks = [
          {
            key: 'github',
            title: <Icon type='github' />,
            href: 'https://github.com/zuiidea/antd-admin',
            blankTarget: true,
          },{
            key: 'DTT',
            title: <Icon type="fire" />,
            href: 'https://datang.com',
            blankTarget: true,
          },{
            key: '联系我',
            title: <Icon type="mail" />,
            href: 'mailto:wangjiale@datang.com',
            blankTarget: true,
          }
        ]

        return(
        
        <Fragment >
        <div className={styles.form}>
          <div className={styles.logo}>
            <img alt="logo" src={require('../../assets/logo.svg')} />
            <span>{config.siteName}</span>
          </div>
          <div>
            {this.props.visible?
            <Alert
              message="账户或者密码错误"
              type='error'
              showIcon
              banner
              closable
              afterClose={this.errorClose}
              />:null
            }
            </div>
          <form >
            
            <FormItem hasFeedback>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  onPressEnter={this.handleOk}
                  placeholder='用户名'
                />
              )}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  onPressEnter={this.handleOk}
                  placeholder='密码'
                />
              )}
            </FormItem>
            <Row>
              <Button
                type="primary"
                onClick={this.handleOk}
                loading={this.props.loginLoading}
              >
                登录
              </Button>
              <p>
                <span>
                  点击这里注册
                </span>
                <span style={{color:'red'}}>
                  忘记密码？
                </span>
              </p>
            </Row>
          </form>
        </div>
        <div className={styles.footer}>
          <GlobalFooter links={footerLinks} copyright={config.copyright}/>
        </div>
      </Fragment>
        )
    }
}

export default login;