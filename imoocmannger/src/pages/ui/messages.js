import React from 'react'
import { Card, Button, message } from 'antd'
import './ui.css'

export default class Messages extends React.Component {

    constructor (props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount () {
        console.log(this.props.isLogin)
    }

    showMessage = (type) => {
        message[type]("antd中的message组件");
    }

    render() {
        return (
            <div>
                <Card title="全局提示框" className="card-wrap" >
                    <Button type="primary" onClick={()=>this.showMessage('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.showMessage('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.showMessage('warning')}>Warnning</Button>
                    <Button type="primary" onClick={()=>this.showMessage('error')}>Error</Button>
                    <Button type="primary" onClick={()=>this.showMessage('loading')}>Loading</Button>
                    <Tmp isLogin={this.props.isLogin}></Tmp>
                </Card>
            </div>
        );
    }
}