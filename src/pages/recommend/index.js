import * as React from 'react';
import { useState, useEffect } from 'react'
import { useQuery, usePageInstance, useNativeEffect } from 'remax'
import { View, Text, Image, Button } from 'remax/one';
import { switchTab } from 'remax/wechat'

export default () => {

    const gotoLogin = () => {
        switchTab({
            url: "/pages/login/index", events: { name: "home" }, success: () => {
                console.log("success")
            }
        })
    }

    return (
        <View>
            <Button onClick={gotoLogin}>去登录</Button>
        </View>
    );
};