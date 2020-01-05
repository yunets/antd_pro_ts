import React from 'react';

import { Card } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import CourseList1 from './CourseList1';

const { Meta } = Card;


export default (): React.ReactNode => (
  <PageHeaderWrapper>


   <CourseList1/>


  </PageHeaderWrapper>
);
