import * as React from 'react';
import { useState, useEffect } from 'react'
import { useQuery, usePageInstance, useNativeEffect } from 'remax'
import { View, Text, Image, Button,Input } from 'remax/wechat';
import { switchTab } from 'remax/wechat'

export default () => {

    const gotoLogin = () => {
        switchTab({
            url: "/pages/login/index", events: { name: "home" }, success: () => {
                console.log("success")
            }
        })
    }

    const fn ={
        bindinput:(e)=>{
            console.log(e);
        },
        bindconfirm:(e)=>{
            console.log(e);
        }
    }

    return (
        <View>
            <Button onClick={gotoLogin}>去登录</Button>

            <Input placeholder="搜索" bindinput={fn.bindinput} bindconfirm={fn.bindconfirm} />
        </View>
    );
};