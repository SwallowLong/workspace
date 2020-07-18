import React from 'react'
import { Row, Col } from 'antd';
import './index.css'
import Utils from './../../style/utils'
import { connect } from 'react-redux'



class Header extends React.Component {

    state = {};

    componentWillMount() {
        this.setState({
            userName: '吴煜龙'
        })
        setInterval(() => {
            let systime = Utils.formateDate(new Date());
            this.setState({
                systime
            })
        }, 1000)
    }

    render() {
        const menuType = this.props.menuType;
        return (
            <div className="header">
                <Row className="header-top">
                    {
                        menuType ?
                            <Col span="6" className="logo">
                                <img src="/assets/logo-ant.svg" alt="" />
                                <span>IMooc 通用管理</span>
                            </Col> : ''
                    }
                    <Col span={menuType ? 18 : 24}>
                        <span>欢迎, {this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                {
                    menuType ? '' : <Row className="breadcrumb">
                        <Col span="4" className="breadcrumb-title">
                            { this.props.menuName }
                        </Col>
                        <Col span="20" className="weather">
                            <span className="date">{this.state.systime}</span>
                        </Col>
                    </Row>
                }

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        menuName: state.menuName
    }
}
export default connect(mapStateToProps)(Header)