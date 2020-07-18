import React from 'react';
import { Card, Table, Modal, Badge,Button } from 'antd';
import axios from './../../axios/index'
import Utils from '../../style/utils';
import { render } from 'less';

export default class HighTable extends React.Component {

    componentDidMount() {
        this.request();
    }
    state = {};
    params = {
        page: 1
    }
    request = () => {
        let _this = this;
        axios.ajax({
            url: '/table/high/list',
            data: {
                params: {
                    pages: this.state.page
                }
            }
        }).then((res) => {
            if (res.code === 0) {
                res.result.list.map((item, index) => {
                    item.key = index
                })

                this.setState({
                    dataSource: res.result.list,
                    pagination: Utils.pagination(res, (current) => {
                        _this.params.page = current;
                        this.request();
                    })

                })
            }
        })
		}
		
		handleChange = (pagination, filters, sorter)=>{
			this.setState({
				sortOrder: sorter.order
			})
		}

		handleDelete = (item)=>{
			let id = item.id;
			Modal.confirm({
				title: '确认',
				content: '你确定要删除当前按钮'
			})
		}
    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'username'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '初学者',
                        '2': '入门',
                        '3': '登门入室',
                        '4': '实习生',
                        '5': '实习大师',
                        '6': '正式',
                        '7': '初级前端工程师',
                        '8': '中级前端工程师',
                        '9': '高级前端工程师',
                        '10': '老员工'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(state) {
                    let config = {
                        '1': '篮球',
                        '2': '羽毛球',
                        '3': '游泳',
                        '4': '健身',
                        '5': '吃东西',
                        '6': '睡觉',
                        '7': '看书',
                        '8': '踢足球',
                        '9': '打游戏',
                        '10': '滑雪'
                    }
                    return config[state];
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ]
        const columns2 = [
            {
                title: 'id',
                dataIndex: 'id',
                fixed: 'left'
            },
            {
                title: '用户名',
                dataIndex: 'username',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '初学者',
                        '2': '入门',
                        '3': '登门入室',
                        '4': '实习生',
                        '5': '实习大师',
                        '6': '正式',
                        '7': '初级前端工程师',
                        '8': '中级前端工程师',
                        '9': '高级前端工程师',
                        '10': '老员工'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(state) {
                    let config = {
                        '1': '篮球',
                        '2': '羽毛球',
                        '3': '游泳',
                        '4': '健身',
                        '5': '吃东西',
                        '6': '睡觉',
                        '7': '看书',
                        '8': '踢足球',
                        '9': '打游戏',
                        '10': '滑雪'
                    }
                    return config[state];
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            },
            {
                title: '睡觉时间',
                dataIndex: 'time',
                fixed: 'right'
            },
				]
				const columns3 = [
					{
							title: 'id',
							dataIndex: 'id'
					},
					{
							title: '用户名',
							dataIndex: 'username'
					},
					{
							title: '性别',
							dataIndex: 'sex',
							render(sex) {
									return sex == 1 ? '男' : '女'
							}
					},
					{
						title: '年龄',
						dataIndex: 'age',
						sorter: (a,b)=>{
							return a.age - b.age;
						},
						sortOrder: this.state.sortOrder
					},
					{
							title: '状态',
							dataIndex: 'state',
							render(state) {
									let config = {
											'1': '初学者',
											'2': '入门',
											'3': '登门入室',
											'4': '实习生',
											'5': '实习大师',
											'6': '正式',
											'7': '初级前端工程师',
											'8': '中级前端工程师',
											'9': '高级前端工程师',
											'10': '老员工'
									}
									return config[state];
							}
					},
					{
							title: '爱好',
							dataIndex: 'interest',
							render(state) {
									let config = {
											'1': '篮球',
											'2': '羽毛球',
											'3': '游泳',
											'4': '健身',
											'5': '吃东西',
											'6': '睡觉',
											'7': '看书',
											'8': '踢足球',
											'9': '打游戏',
											'10': '滑雪'
									}
									return config[state];
							}
					},
					{
							title: '生日',
							dataIndex: 'birthday'
					},
					{
							title: '地址',
							dataIndex: 'address'
					},
					{
							title: '早起时间',
							dataIndex: 'time'
					}
			]
			const columns4 = [
				{
						title: 'id',
						dataIndex: 'id'
				},
				{
						title: '用户名',
						dataIndex: 'username'
				},
				{
						title: '性别',
						dataIndex: 'sex',
						render(sex) {
								return sex == 1 ? '男' : '女'
						}
				},
				{
						title: '状态',
						dataIndex: 'state',
						render(state) {
								let config = {
										'1': '初学者',
										'2': '入门',
										'3': '登门入室',
										'4': '实习生',
										'5': '实习大师',
										'6': '正式',
										'7': '初级前端工程师',
										'8': '中级前端工程师',
										'9': '高级前端工程师',
										'10': '老员工'
								}
								return config[state];
						}
				},
				{
						title: '爱好',
						dataIndex: 'interest',
						render(state) {
								let config = {
										'1': <Badge status="success" text="篮球" />,
										'2': <Badge status="warning" text="羽毛球'" />,
										'3': <Badge status="processing" text="游泳" />,
										'4': <Badge status="error" text="健身" />,
										'5': <Badge status="error" text="吃东西" />,
										'6': <Badge status="default" text="睡觉" />,
										'7': <Badge status="success" text="看书" />,
										'8': <Badge status="warning" text="踢足球" />,
										'9': <Badge status="processing" text="打游戏" />,
										'10': <Badge status="success" text="滑雪" />
								}
								return config[state];
						}
				},
				{
						title: '生日',
						dataIndex: 'birthday'
				},
				{
						title: '地址',
						dataIndex: 'address'
				},
				{
						title: '操作',
						render: (text,item)=>{
							return <Button size="small" onClick={(item)=>{ this.handleDelete(item) }}>删除</Button>
						}
				}
		]
        return (
            <div>
                <Card title="头部固定">
                    <Table
                        bordered
                        dataSource={this.state.dataSource}
                        columns={columns}
                        pagination={false}
                        scroll={{ y: 240 }}
                    />
                </Card>
                <Card title="左侧固定" >
                    <Table
                        bordered
                        dataSource={this.state.dataSource}
                        columns={columns2}
                        pagination={false}
                        scroll={{ x: 1900 }}
                    />
                </Card>
								<Card title="功能">
                    <Table
                        bordered
                        dataSource={this.state.dataSource}
                        columns={columns3}
												pagination={false}
												onChange={this.handleChange}
                    />
                </Card>
								<Card title="操作按钮">
                    <Table
                        bordered
                        dataSource={this.state.dataSource}
                        columns={columns4}
												pagination={false}
												onChange={this.handleChange}
                    />
                </Card>
            </div>
        )
    }
}