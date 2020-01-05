import React from 'react';
import Redirect from 'umi/redirect';
import { connect } from 'dva';
import pathToRegexp from 'path-to-regexp';
import { Card, Row, Col, Avatar, Icon, Button, Form, Input, Divider } from 'antd';
import Authorized from '@/utils/Authorized';
import { ConnectProps, ConnectState, Route, ContainerModelState } from '@/models/connect';
import NoteEdit from './NoteEdit';


const { Meta } = Card;

interface AuthComponentProps extends ConnectProps {
    container: ContainerModelState;
}


const CourseList1: React.FC<AuthComponentProps> = ({
    children,
    route = {
        routes: [],
    },
    location = {
        pathname: '',
    },
    container,
}) => {
    debugger;
    // const { containerInfo, containerList } = container;
    const cs = [];
    const c = {
        containerId: '刘云生',
        name: '刘云生',
        containerCode: '刘云生',
        description: '刘云生',
    };

    for (let i = 0; i < 10; i++) {
        cs.push(c);
    }


    const Show = cs.map(cc =>
        <Col span={6} style={{ paddingTop: 20 }}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://img1.mukewang.com/szimg/5cbf00c608f52a3b06000338.jpg" />}
                actions={[

                    <Button type="primary" htmlType="submit" onClick={() => {
                        alert(`${cc.containerCode}`);
                    }} >
                        详情
                  </Button>,

                    <Button type="primary" htmlType="submit" onClick={() => {
                        alert(`${cc.containerCode}`);
                    }} >
                        编辑
                    </Button>]}

            >

前端下一代开发语言TypeScript  从基础到axios实战

            </Card></Col>,


    );


    return (
        <div>
            <Form layout="horizontal">
                <Row gutter={24}>
                    <Col span={6} style={{ paddingTop: 20 }}>
                        <Form.Item label="镜像名称">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={6} style={{ paddingTop: 20 }}>
                        <Form.Item label="创建人">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={6} style={{ paddingTop: 20 }}>
                        <Form.Item label=" 操作">
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                查询
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>


            <Divider>镜像</Divider>
            <Row gutter={16}>{Show}</Row>

        </div>
    );
};
export default connect(({ container }: ConnectState) => ({
    container,
}))(CourseList1);
