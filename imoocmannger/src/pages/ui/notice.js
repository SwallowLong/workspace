import React from 'react'
import { Card, Button, Radio, notification } from 'antd'
import './ui.css'

export default class Notice extends React.Component {

    handleNotification = (type,direction) => {
        if(direction) {
            notification.config({
                placement: direction
            })
        }
        notification[type]({
            message: 'antd中的通知提醒框',
            description: 'notification是antd中的属性'
        });
    }

    render() {
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleNotification('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleNotification('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleNotification('warning')}>Warnning</Button>
                    <Button type="primary" onClick={()=>this.handleNotification('error')}>Error</Button>
                </Card>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleNotification('success','topLeft')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleNotification('info','topRight')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleNotification('warning','bottomLeft')}>Warnning</Button>
                    <Button type="primary" onClick={()=>this.handleNotification('error','bottomRight')}>Error</Button>
                </Card>
            </div>
        );
    }
}