import React from 'react'
import { Input, Select, Button, Checkbox, Radio, DatePicker } from 'antd'
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import Utils from '../../style/utils';
const FormItem = Form.Item;
const Option = Select.Option;

class FilterForm extends React.Component {

	handelFilterSubmit = ()=>{
		let fieldValue = this.props.form.getFieldsValue();
		this.props.filterSubmit(fieldValue);
	}

	reset = ()=>{
		this.props.form.resetFields();
	}

	initFormList = () => {
		const { getFieldDecorator } = this.props.form;
		const formList = this.props.formList;
		const formItemList = [];
		if (formList && formList.length > 0) {
			formList.forEach((item, i) => {
				let label = item.label;
				let field = item.field;
				let initialValue = item.initialValue || '';
				let placeHolder = item.placeHolder;
				let width = item.width;
				if (item.type == '时间查询') {
					const begin_time = <FormItem label={label} key={field}>
					{
						getFieldDecorator('begin_time', {initialValue: initialValue})(
							<DatePicker showTime={true} placeholder={placeHolder} format="YYYY-MM-DD HH:mm:ss" />
						)
					}
				</FormItem >;
				formItemList.push(begin_time)
				const end_time = <FormItem label="~" colon={false} key={field}>
					{
						getFieldDecorator('end_time', {initialValue: initialValue})(
							<DatePicker showTime={true} placeholder={placeHolder} format="YYYY-MM-DD HH:mm:ss" />
						)
					}
				</FormItem >;
				formItemList.push(end_time)
				} else if (item.type == 'INPUT') {
					const INPUT = <FormItem label={label} key={field}>
						{
							getFieldDecorator([field], {initialValue: initialValue})(
								<Input type="text" style={{ width: width }} placeholder={placeHolder} />
							)
						}
					</FormItem >;
					formItemList.push(INPUT);
				} else if (item.type == 'SELECT') {
					const SELECT = <FormItem label={label} key={field}>
						{
							getFieldDecorator([field], {initialValue: initialValue})(
								<Select
									style={{ width: width }}
									placeholder={placeHolder}
								>
									{Utils.getOptionList(item.list)}
								</Select>
							)
				}
					</FormItem >;
					formItemList.push(SELECT);
				} else if (item.type == 'CHECKBOX') {
					const CHECKBOX = <FormItem label={label} key={field}>
						{
							getFieldDecorator([field]), { 
								valuePropName: 'checked',
								//true || false
								initialValue: initialValue
							 }(
								<Checkbox>
									{label}
								</Checkbox>
							)
						}
					</FormItem >;
					formItemList.push(CHECKBOX);
				} else if (item.type == 'DATE') {
					const DATE = <FormItem label={label} key={field}>
						{
							getFieldDecorator([field])(
								<DatePicker showTime={true} placeholder={placeHolder} format="YYYY-MM-DD HH:mm:ss"/>
							)
						}
					</FormItem >;
					formItemList.push(DATE);
				} else if (item.type == '城市') {
					const city = <FormItem label='城市' key={field}>
						{
							getFieldDecorator([field])(
								<Select
									style={{width: 80}}
									placeholder={placeHolder}
								>
									{Utils.getOptionList([{id: '0', name: '杭州'},{id: '1', name: '北京'},{id: '2', name: '上海'},{id: '3', name: '深圳'}])}
								</Select>
							)
						}
					</FormItem >;
					formItemList.push(city);
				}
			})
		}
		return formItemList;
	}

	render() {
		return (
			<Form layout="inline"> 
				{ this.initFormList() }
				<FormItem>
					<Button type="primary" style={{ margin: '0 20px' }} onClick={this.handelFilterSubmit}>查询</Button>
					<Button onClick={this.reset}>重置</Button>
				</FormItem>
			</Form>
		)
	}
}
export default FilterForm = Form.create({})(FilterForm);