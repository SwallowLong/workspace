import React from 'react'
import { Card, Button, Modal } from 'antd'
import './ui.css'
import { EditOutlined, PlusOutlined, DeleteOutlined, SearchOutlined, DownloadOutlined, VerticalRightOutlined, VerticalLeftOutlined } from '@ant-design/icons';
import { Icon } from '@ant-design/compatible'

export default class Modals extends React.Component {

    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }

    handleOpen = (type) => {
        this.setState({
            [type]: true
        })
    }

    handleConfirm = (type) => {
        Modal[type]({
            title: 'hello world',
            content: 'antd中的弹框的应用'
        })
    }

    render(){
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warn')}>Warning</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={()=>{
                        this.setState({
                            showModal1: false
                        })
                    }}
                >
                    <p>antd的弹框应用</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="下一步"
                    cancelText="取消"
                    onCancel={()=>{
                        this.setState({
                            showModal2: false
                        })
                    }}
                >
                    <p>antd的弹框中自定义确定按钮和取消按钮文字</p>
                </Modal>
                <Modal
                    title="React"
                    style={{top:20}}
                    visible={this.state.showModal3}
                    onCancel={()=>{
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                    <p>antd的弹框中添加自定义样式</p>
                </Modal>
                <Modal
                    title="React"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    onCancel={()=>{
                        this.setState({
                            showModal4: false
                        })
                    }}
                >
                    <p>antd的弹框中添加自定义水平居中</p>
                </Modal>
            </div>
        );
    }
}