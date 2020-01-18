import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import echarts from 'echarts';
import Background from '../../assets/img/background2.png';

import chartContainer from '../../assets/img/chartContainer.png';

import styles from './EchartScreen.less';

class MapApp1 extends React.Component {
  chartContainerStyle = {
    backgroundImage: `url(${chartContainer})`,
  };

  constructor() {
    super();
  }

  componentDidMount() {
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        textStyle: {
          //图例文字的样式
          color: 'white',
          fontSize: 12,
        },
        left: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center',
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold',
              },
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' },
          ],
        },
      ],
    };

    debugger;
    //this.allmap = echarts.init(document.getElementById('chartId'))
    this.allmap = echarts.init(this.refs.chartId);

    this.allmap.setOption(option);
  }

  render() {
    return (
      <div style={{ width: 360, height: 250, marginTop: 20, float: 'left', marginLeft: 20 }}>
        <div style={this.chartContainerStyle} className={styles.chartContainer} ref="bbb">
          <div className={styles.title}>餐厅销售额分析</div>
          <div className={styles.container}>
            <div className={styles.chart} id="chartId" ref="chartId"></div>
          </div>
        </div>
      </div>
    );
  }
}

const sectionStyle = {
  float: 'left',
  width: '100%',
  height: '900px',
  // makesure here is String确保这里是一个字符串，以下是es6写法
  backgroundImage: `url(${Background})`,
};



export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <div style={sectionStyle}>
	<div className={styles.headerStyle}>
      <MapApp1></MapApp1>
      <MapApp1></MapApp1>
      <MapApp1></MapApp1>
	  <MapApp1></MapApp1>
      <MapApp1></MapApp1>
      <MapApp1></MapApp1>
    </div>
	</div>
  </PageHeaderWrapper>
);
