import React from 'react'
import { Card, Row, Col, Modal } from 'antd'
import './ui.css'


export default class Gallery extends React.Component {

    state = {
        visible: false
    }

    openGallery = () => {
        this.setState({
            visible: true
        })
    }

    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={4}>
                        <Card
                            onClick={this.openGallery}
                            hoverable
                            cover={<img style={{height: '100%'}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Card.Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card
                            onClick={this.openGallery}
                            hoverable
                            cover={<img style={{height: '100%'}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Card.Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card
                            onClick={this.openGallery}
                            hoverable
                            cover={<img style={{height: '100%'}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Card.Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card
                            onClick={this.openGallery}
                            hoverable
                            cover={<img style={{height: '100%'}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Card.Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card
                            onClick={this.openGallery}
                            hoverable
                            cover={<img style={{height: '100%'}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Card.Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                </Row>
                <Modal
                    width={300}
                    height={500}
                    visible={this.state.visible}
                    onCancel={() => {
                        this.setState({
                            visible: false
                        })
                    }}
                    title="图片画廊"
                    footer={null}
                >
                    {<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ width: '100%', height: '100%' }} />}
                </Modal>
            </div>
        );
    }
}