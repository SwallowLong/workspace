import React from 'react';
import { Card, Table, Modal,  } from 'antd';
import axios from './../../axios/index'
import { render } from 'less';
import Utils from '../../style/utils';

export default class BasicTable extends React.Component {

	state = {
		dataSource2: []
	}

	params = {
		page: 1
	}

	componentDidMount() {
		const data = [
			{
				id: '0',
				userName: 'Jack',
				sex: '1',
				state: '1',
				interest: '1',
				birthday: '2000-01-01',
				address: '北京',
				time: '09:00'
			},
			{
				id: '1',
				userName: 'Tom',
				sex: '1',
				state: '1',
				interest: '1',
				birthday: '2000-01-01',
				address: '北京',
				time: '09:00'
			},
			{
				id: '2',
				userName: 'Lily',
				sex: '1',
				state: '1',
				interest: '1',
				birthday: '2000-01-01',
				address: '北京',
				time: '09:00'
			}
		]
		data.map((item,index)=>{
			item.key = index
		})
		this.setState({
			dataSource: data
		})
		this.request()
	}

	//动态获取mock插件
	request = () => {
		let _this = this;
		axios.ajax({
			url: '/table/list',
			data: {
				params: {
					pages: this.state.page
				}
			}
		}).then((res) => {
			if (res.code === 0) {
				res.result.list.map((item,index)=>{
					item.key = index
				})
				
				this.setState({
					dataSource2: res.result.list,					
					pagination: Utils.pagination(res,(current)=>{
						_this.params.page = current;
						this.request();
					})
				
				})
			}
		})
	}
	onRowClick = (record,index) => {
		let selectKey = [index];
		Modal.info({
			title: '信息',
			content: `用户名： ${record.userName},用户爱好：${record.interest}`
		})
		this.setState({
			selectedRowKeys: selectKey,
			selectedItem: record
			
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
				dataIndex: 'userName'
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
		const selectedRowKeys = this.state.selectedRowKeys;
		const rowSelection = {
			type: 'radio',
			selectedRowKeys
		}
		const rowCheckSelection = {
			type: 'checkbox',
			selectedRowKeys,
			onChange: (selectedRowKeys,selectedRows) => {
				this.setState({
					selectedRowKeys,
					selectedRows
				})
			}
		}
		return (
			<div>
				<Card title="基础表格">
					<Table
						bordered
						dataSource={this.state.dataSource}
						columns={columns}
						pagination={false}
					/>
				</Card>
				<Card title="动态数据渲染表格" >
					<Table
						bordered
						dataSource={this.state.dataSource2}
						columns={columns}
						pagination={false}
					/>
				</Card>
				<Card title="Mock单选按钮" >
					<Table
						bordered
						rowSelection={rowSelection}
						onRow={(record,index) => {
							return {
								onClick: () => {
									return this.onRowClick(record,index)
								}
							}
						}}
						dataSource={this.state.dataSource2}
						columns={columns}
						pagination={false}
					/>
				</Card>
				<Card title="Mock多选按钮" >
					<Table
						bordered
						rowSelection={rowCheckSelection}
						onRow={(record,index) => {
							return {
								onClick: () => {
									return this.onRowClick(record,index)
								}
							}
						}}
						dataSource={this.state.dataSource2}
						columns={columns}
						pagination={false}
					/>
				</Card>
				<Card title="Mock-表格分页" >
					<Table
						bordered
						dataSource={this.state.dataSource2}
						columns={columns}
						pagination={this.state.pagination}
					/>
				</Card>
			</div>
		)
	}
}