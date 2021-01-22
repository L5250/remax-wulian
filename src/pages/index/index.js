import * as React from 'react';
import { useState, useEffect } from 'react'
import { useQuery, usePageInstance, useNativeEffect } from 'remax'
import { View, Text, Image, Button } from 'remax/one';
import Login from '../login/login'
import styles from './index.css';


export default () => {

  const [width, setWidth] = useState(100)

  const query = useQuery();
  const instance = usePageInstance();


  useEffect(() => {
    console.log('width 更新在 React 中生效了');
  }, [width])
  useNativeEffect(() => {
    console.log('width 更新在小程序中真正生效了');
  }, [width])

  const getData = () => {
    console.log(query,instance);
  }

  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text>{' '}
          开始
        </View>
        <Button onClick={() => getData()}>111</Button>
        <Login/>
      </View>
    </View>
  );
};