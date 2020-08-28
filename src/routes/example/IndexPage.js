import React, {useEffect} from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';

import { Tag } from 'antd-mobile';

const Example = (props) => {

  useEffect(() => {
    props.dispatch({
      type: "getRandomImg"
    });
  })

  return (
    <div className={styles.container}>
      <img src={props.example.randomImg} alt='logo' />
      <p className={styles.title}>
        coded with ❤ by rj
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
}))(Example)
