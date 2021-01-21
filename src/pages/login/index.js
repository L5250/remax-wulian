import * as React from 'react';
import { useState, useEffect } from 'react'
import { useQuery, usePageInstance, useNativeEffect } from 'remax'
import {View, Text, Form, Input, Label, Button, Image } from 'remax/wechat';
import styles from './login.less'
import wxrequest from '../../../public/util/wxrequest';

export default () => {

    const fn = {
        onSubmit: (e) => {
            console.log(e);
            console.log(e.target.value);
            wxrequest('GET', '/user/login', e.target.value).then(res => {
                //请求成功
                console.log(res);
            })
        },
    }

    return (
        <View className={styles.login}>
            <Form onSubmit={fn.onSubmit} className={styles.form}>
                <View className={styles.form_item}>
                    <Label className={styles.form_item_input}>账号：<Input name="name" /></Label>
                </View>
                <View className={styles.form_item}>
                    <Label className={styles.form_item_input}>密码：<Input name="password" /></Label>
                </View>
                <Button style={{ textAlign: "center" }} type={"primary"} form-type="submit">登录</Button>
                {/* <Button style={{ textAlign: "center" }} type={"primary"} formType="reset" size="mini">重置</Button> */}
            </Form>
        </View>
    )
}
