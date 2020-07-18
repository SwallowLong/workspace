import React from 'react'
import moment from 'moment'
import { Card, Button, Input, Checkbox, Select, Radio, Switch, DatePicker, TimePicker, Upload, message, InputNumber } from 'antd'
import { Icon, Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { Option } = Select;
const TextArea = Input.TextArea;
class FormRegister extends React.Component {

    state = {};

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        message.success('提交成功')
    }

    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    userImg: imageUrl,
                    loading: false,
                }),
            );
        }
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form>
                        <FormItem label="用户名" {...formItemLayout}>

                            {
                                getFieldDecorator('userName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your UserName!'
                                        }
                                    ]

                                })(
                                    <Input prefix={<Icon type="user" />} placeholder="请输入用户名" />
                                )
                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>

                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: ''
                                })(
                                    <Input type="password" prefix={<Icon type="lock" />} placeholder="请输入密码" />
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>

                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1'
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>

                            {
                                getFieldDecorator('age', {
                                    initialValue: '18'
                                })(
                                    <InputNumber />
                                )
                            }
                        </FormItem>
                        <FormItem label="喜欢的水果" {...formItemLayout}>

                            {
                                getFieldDecorator('state', {
                                    initialValue: "3"
                                })(
                                    <Select>
                                        <Option value="1">苹果</Option>
                                        <Option value="2">香蕉</Option>
                                        <Option value="3">西瓜</Option>
                                        <Option value="4">FE</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>

                            {
                                getFieldDecorator('interest', {
                                    initialValue: ['1', '2', '4']
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">游泳</Option>
                                        <Option value="2">健身</Option>
                                        <Option value="3">打篮球</Option>
                                        <Option value="4">FE</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment('2020-7-9')
                                })(
                                    <DatePicker
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    initialValue: '杭州西湖'
                                })(
                                    <TextArea
                                        autosize={{
                                            minRows: 4,
                                            maxRows: 6
                                        }
                                        }
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time')(
                                    <TimePicker />
                                )
                            }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        onChange={this.handleChange}
                                    >
                                        {this.state.userImg ? <img src={this.state.userImg} /> : <Icon type="plus" />}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout} >
                            {
                                getFieldDecorator('userImg')(
                                    <Checkbox>我已阅读过<a href="#">协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout} >
                            {
                                <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormRegister);