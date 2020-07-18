import React from 'react'
import { Card, Button, Radio } from 'antd'
import './ui.css'
import { EditOutlined, PlusOutlined, DeleteOutlined, SearchOutlined, DownloadOutlined, VerticalRightOutlined, VerticalLeftOutlined } from '@ant-design/icons';
import { Icon } from '@ant-design/compatible'

export default class Buttons extends React.Component {

    state = {
        loading: true,
        size: 'default'
    }

    handleCloseLoading = () => {
        this.setState({
            loading: false
        })
    }

    handleSizeChange = e => {
        this.setState({
            size: e.target.value
        })
    }
    render() {
        return (
            <div  className="card-warp">
                <Card title="基础按钮">
                    <Button type="primary">Imooc</Button>
                    <Button>Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button type="danger">Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title="图形按钮">
                    <Button icon={<PlusOutlined />}>创建</Button>
                    <Button icon={<EditOutlined />}>编辑</Button>
                    <Button icon={<DeleteOutlined />}>删除</Button>
                    <Button shape="circle" icon={<SearchOutlined />}></Button>
                    <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
                    <Button type="primary" icon={<DownloadOutlined />}>下载</Button>
                </Card>
                <Card title="Loading按钮">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组">
                    <Button.Group>
                        <Button type="primary" icon={<VerticalRightOutlined />} style={{ marginRight: 0 }}>返回</Button>
                        <Button type="primary">
                            前进
                            <Icon type="verticalLeft" />
                        </Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸">
                    <Radio.Group onChange={this.handleSizeChange} className="radio-size">
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>Imooc</Button>
                    <Button size={this.state.size}>Imooc</Button>
                    <Button type="dashed" size={this.state.size}>Imooc</Button>
                    <Button type="danger" size={this.state.size}>Imooc</Button>
                </Card>
            </div>
        );
    }
}