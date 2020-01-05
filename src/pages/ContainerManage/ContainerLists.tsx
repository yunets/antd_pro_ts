import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Redirect from 'umi/redirect';
import { connect } from 'dva';
import pathToRegexp from 'path-to-regexp';
import { Card, Row, Col, Avatar, Icon, Button, Form, Input, Divider } from 'antd';
import { AnyARecord } from 'dns';
import Authorized from '@/utils/Authorized';
import { ConnectProps, ConnectState, Route, ContainerModelState } from '@/models/connect';


const { Meta } = Card;

interface AuthComponentProps extends ConnectProps {
    container: ContainerModelState;
}

const copy = (e: any) => {
    debugger;
    alert('复制成功');
}

const ContainerLists: React.FC<AuthComponentProps> = ({
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
    const { containerInfo, containerList } = container;
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
        <Col span={8} style={{ paddingTop: 20 }}>
            <Card
                hoverable
               // style={{ width: 400 }}
                // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                actions={[

                    <Button type="primary" htmlType="submit" onClick={() => {
                        alert(`${cc.containerCode}`);
                    }} >
                        详情
                  </Button>,
                  <Button type="primary" htmlType="submit" onClick={() => {
                    alert(`${cc.containerCode}`);
                }} >
                    扩容
              </Button>,
                    <CopyToClipboard
                        text="wwwwwwww" // 需要复制的文本
                        onCopy={copy} // 复制完成的回调
                    >
                        <Button type="primary"> 复制 </Button>
                    </CopyToClipboard>,

                    <Button type="primary" htmlType="submit" onClick={e => {
                        copy(`${cc.containerCode}`);
                        copy(e);
                    }} >
                        释放
                    </Button>]}

            >
                <strong>刘云生</strong> <br/>
                人工智能容器组
                <hr/>




                <Meta
                    avatar={<Avatar shape="square" src="https://www.easyicon.net/download/png/1228393/722/" />}
                    title="10.6.6.8"
                    description="密码：123456"
                />
                <hr/>
                <Meta
                    avatar={<Avatar shape="square" src="https://www.easyicon.net/download/png/1228393/722/" />}
                    title="10.6.6.8"
                    description="密码：123456"
                />
                 <hr/>
                <Meta
                    avatar={<Avatar shape="square" src="https://www.easyicon.net/download/png/1228393/722/" />}
                    title="10.6.6.8"
                    description="密码：123456"
                />
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
}))(ContainerLists);
