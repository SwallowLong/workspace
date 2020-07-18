import React from 'react'
import { Card, Button, message, Tabs } from 'antd'
import './ui.css'
import { Icon } from '@ant-design/compatible'

const TabPane = Tabs.TabPane;

export default class Tabss extends React.Component {

    newTabIndex = 0;

    handleCallback = (key) => {
        message.info("Hi,您选择了页签：" + key)
    }

    componentWillMount() {
        const panes = [
            {
                title: 'Tab 1',
                content: 'Tab 1',
                key: '1'
            },
            {
                title: 'Tab 2',
                content: 'Tab 2',
                key: '2'
            },
            {
                title: 'Tab 3',
                content: 'Tab 3',
                key: '3'
            }
        ]
        this.setState({
            activeKey: panes[0].key,
            panes
        })
    }

    onChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
      };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        const newPanes = [...panes];
        newPanes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({
            panes: newPanes,
            activeKey,
        });
    };

    remove = targetKey => {
        const { panes, activeKey } = this.state;
        let newActiveKey = activeKey;
        let lastIndex;
        panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = panes.filter(pane => pane.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }
        this.setState({
            panes: newPanes,
            activeKey: newActiveKey,
        });
    };


    render() {
        return (
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">
                            antd的tabs组件第一个页面
                        </TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>
                            antd的tabs组件第二个页面
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            antd的tabs组件第三个页面
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">
                            antd的tabs组件第一个页面
                        </TabPane>
                        <TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">
                            antd的tabs组件第二个页面
                        </TabPane>
                        <TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">
                            antd的tabs组件第三个页面
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs
                        onChange={this.onChange}
                        defaultActiveKey="1"
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((panel) => {
                                return <TabPane
                                    tab={panel.title}
                                    key={panel.key}
                                />
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}