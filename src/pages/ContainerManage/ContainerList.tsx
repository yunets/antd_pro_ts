import React from 'react';

import { Card } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ContainerLists from './ContainerLists';

const { Meta } = Card;


export default (): React.ReactNode => (
  <PageHeaderWrapper>


   <ContainerLists/>


  </PageHeaderWrapper>
);
