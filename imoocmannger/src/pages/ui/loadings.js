import React from 'react'
import { Card, Button, Spin, Alert } from 'antd'
import { Icon } from '@ant-design/compatible'

export default class Loadings extends React.Component {

    render() {
        let icon = <Icon type="loading" style={{ fontSize: 24 }} />
        return (
            <div>
                <Card title="Spin用法">
                    <div className="spin-wrap">
                        <Spin size="small" />
                        <Spin size="default" />
                        <Spin size="large" />
                        <Spin tip="Loading..." indicator={icon} />
                    </div>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Spin tip="加载中..." indicator={icon}>
                        <Alert
                            message="React"
                            description="antd内容信息框"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}