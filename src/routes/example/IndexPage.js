import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';

import { Tag } from 'antd-mobile';

function Example({example}) {
  return (
    <div className={styles.container}>
      <img src={example.randomImg} alt='logo' />
      <p className={styles.title}>
        dva-h5 via rj
      </p>
      <div className={styles.tagContainer}>
        <Tag>dva</Tag>
        <Tag>antd-mobile</Tag>
        <Tag>less</Tag>
        <Tag>postcss-px-to-viewport</Tag>
      </div>
    </div>
  );
}

Example.propTypes = {
};

export default connect(({ example }) => ({
  example,
}))(Example);
