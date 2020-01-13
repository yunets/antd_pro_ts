import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Map, Marker, Heatmap, Markers } from 'react-amap';
import echarts from 'echarts';
import Background from '../../assets/img/background.png';

const sectionStyle = {
  width: '100%',
  height: '400px',
  // makesure here is String确保这里是一个字符串，以下是es6写法
  backgroundImage: `url(${Background})`,
};

class MapApp extends React.Component {
  constructor() {
    super();
    // Good Practice
    debugger;
    this.mapCenter = { longitude: 120, latitude: 30 };
  }

  render() {
    return (
      <div style={{ width: 600, height: 400 }}>
        <Map
          zoom={5}
          center={this.mapCenter}
          plugins={['ToolBar', 'OverView', 'MapType', 'OverView', 'Scale', 'Heatmap']}
        />
      </div>
    );
  }
}

class MapApp1 extends React.Component {
  constructor() {
    super();

    this.allmap = null;
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

    this.allmap = echarts.init(document.getElementById('allmap'));

    this.allmap.setOption(option);
  }

  render() {
    return (
      <div style={{ width: '100%', height: 1300 }}>
        <div id="allmap" style={{ width: 500, height: 400 }}>
          11
        </div>
      </div>
    );
  }
}

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <div style={sectionStyle}>
      <MapApp1></MapApp1>
      <MapApp></MapApp>
    </div>
  </PageHeaderWrapper>
);
