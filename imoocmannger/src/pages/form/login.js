import React from 'react';
import { Card, Input, Button, message, Checkbox } from 'antd'
import { Form, Icon } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';

const FormItem = Form.Item;
class FormLogin extends React.Component {

    handleSubmit = (e) => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success('欢迎回来！' + values.userName);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="card-wrap">
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{ marginTop: 10 }}>
                    <Form style={{ width: 300 }}>
                        <FormItem
                            name="username"
                        >
                            {
                                getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Please input your UserName!' }]

                                })(
                                    <Input prefix={<Icon type="user" />} placeholder="请输入用户名" />
                                )
                            }

                        </FormItem>
                        <FormItem
                            name="password"
                        >
                            {
                                getFieldDecorator('usePwd', {
                                    rules: [
                                        { required: true, message: 'Please input your Password!' },
                                        {
                                            min: 5, max: 10,
                                            message: '请输入5～10个字母'
                                        }
                                    ]

                                })(
                                    <Input prefix={<Icon type="lock" />} placeholder="请输入密码" />
                                )
                            }
                        </FormItem>
                        <FormItem
                            name="password"
                        >
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true

                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{ float: 'right' }}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Form.create()(FormLogin);
