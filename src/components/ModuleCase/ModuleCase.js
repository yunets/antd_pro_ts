import React, { Fragment } from 'react';

import styles from './ModuleCase.less';

export default class ModuleCase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  handleMouseEnter = () => {
    this.setState({
      hover: true,
    });
  };

  handleMouseLeave = () => {
    this.setState({
      hover: false,
    });
  };

  render() {
    const { hover } = this.state;
    const cardTop1 = hover ? { top: '-100%' } : { top: '0%' };
    const cardTop = hover ? { top: '0%', opacity: 1 } : { top: '100%', opacity: 1 };
    return (
      <Fragment>
        <div
          className={styles.moduleCaseItem}
          onMouseEnter={this.handleMouseEnter.bind(this)}
          onMouseLeave={this.handleMouseLeave.bind(this)}
        >
          <div className={styles.moduleCaseInfo} style={cardTop1}>
            <img
              src="https://aip.bdstatic.com/portal-pc-node/dist/1591263471100/images/industry/healthcare/hardware/1.png"
              className={styles.moduleCaseImg}
              alt=""
            />
            <div className={styles.moduleCaseDes}>
              <div className={styles.moduleCaseDesTitle}>南昌大学第一附属医院</div>{' '}
              <div className={styles.moduleCaseDesContent}>
                灵医智惠CDSS辅助医院顺利通过电子病历评级、互联互通评级，提升医疗安全、提高临床应用效果
              </div>
            </div>
          </div>
          <div className={styles.moduleCaseMore} style={cardTop}>
            <div className={styles.moduleCaseMoreTitle}>南昌大学第一附属医院</div>{' '}
            <div className={styles.moduleCaseMoreContent}>
              灵医智惠CDSS在医院内部署了辅助诊断、治疗方案推荐、医嘱质控、规则维护平台、护理决策支持系统等功能，辅助医院顺利通过电子病历评级、互联互通评级，进一步提升医疗安全，提升临床应用效果
            </div>{' '}
            <span className={styles.moduleCaseMoreSpan} />
          </div>
        </div>
      </Fragment>
    );
  }
}
