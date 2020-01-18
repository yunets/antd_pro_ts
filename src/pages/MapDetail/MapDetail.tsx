import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import {Map, Marker, Heatmap, Markers, InfoWindow} from 'react-amap';



const randomPosition = () => ({
  longitude: 120 + 1 * 20,
  latitude: 30 + Math.random() * 20
});


class MapApp extends React.Component {
  constructor() {
    super();
    var _this = this;
    this.state = {
      curVisibleWindow: null,
      count: 1,
      positionA: {
        longitude: 120,
        latitude: 30
      },
      positionB: {
        longitude: 130,
        latitude: 30
      },
      positionC: {
        longitude: 120,
        latitude: 20
      },
      positionD: {
        longitude: 130,
        latitude: 20
      },
    }

    // 随机生成 10 个标记点的原始数据
    this.mapCenter = {longitude: 130, latitude: 40};
    this.markers = Array(10).fill(true).map(function(e, i){
      var position = randomPosition();
      return {
        position,
        // 这个属性就可以用来确定点击的是哪个坐标点
        myIndex: i
      }
    });
    this.markersEvents = {
      click(e, marker){
        // 通过高德原生提供的 getExtData 方法获取原始数据
        const extData = marker.getExtData();
        const index = extData.myIndex;
        alert(`点击的是第${index}号坐标点`);
        console.log(extData === _this.markers[index]);
      }
    }
    const markerStyle = {
      width: '300px',
      padding: '5px',
      border: '1px solid #ddd',
      background: 'red',
    };
    this.renderMarkerFn = (extData) => (
      <div style={markerStyle}>{`宿舍楼${extData.myIndex}`}</div>
    );
  }


  const
  render() {
    return <div style={{width: '100%', height: 400}}>
      <Map plugins={['ToolBar']} center={this.mapCenter} zoom={4}>
        <Markers
          render={this.renderMarkerFn}
          markers={this.markers}
          events={this.markersEvents}

        />

        <InfoWindow
          position={this.state.positionA}
          visible={true}
        >

          <div style={{backgroundColor:'red'}}>dddddddddddddddddddddddd</div>
        </InfoWindow>
      </Map>
    </div>
  }
}



export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <div >
      <MapApp></MapApp>
    </div>
  </PageHeaderWrapper>
);
