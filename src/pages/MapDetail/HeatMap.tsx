import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from "@/pages/MapDetail/HeatMap.less";
import { Input } from 'antd';
const { Search } = Input;

class HeatMapApp extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // 百度地图API功能
    // 创建Map实例
    const map = new BMap.Map("heatMapDiv");
    // 初始化地图，设置中心点坐标和地图级别
    const point = new BMap.Point(120.489943, 36.126694);
    map.centerAndZoom(point, 15);
    // 允许滚轮缩放
    map.enableScrollWheelZoom();

    const points =[
      {"lng":120.479943,"lat":36.126691,"count":50},
      {"lng":120.489943,"lat":36.126692,"count":51},
      {"lng":120.489943,"lat":36.126693,"count":15},
      {"lng":120.499743,"lat":36.116694,"count":40},
      {"lng":120.489943,"lat":36.126694,"count":100},
      {"lng":120.489843,"lat":36.126695,"count":57},
      {"lng":120.489943,"lat":36.125698,"count":70},
    ];
    const heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":80});
    map.addOverlay(heatmapOverlay);
    heatmapOverlay.setDataSet({data:points,max:100});
    // 显示
    heatmapOverlay.show();
    // 关闭
    //heatmapOverlay.hide();
  }

  render() {
    return <div style={{width: '100%', height: 400}}>

      <div id="heatMapDiv" style={{width: '100%', height: 800}}></div>

      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={value => console.log(value)}
        className={styles.upMapDiv}
      />

    </div>
  }
}



export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <div >
      <HeatMapApp></HeatMapApp>
    </div>
  </PageHeaderWrapper>
);
