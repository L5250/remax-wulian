import * as React from 'react';
import { useState, useEffect } from 'react'
import { useQuery, usePageInstance, useNativeEffect } from 'remax'
import { View, Text, Image, Button, Input, Icon, Form, Label } from 'remax/wechat';
import { switchTab, navigateTo } from 'remax/wechat'
import wxrequest from '/util/wxrequest'

export default () => {

    const [data, setData] = useState([])

    const query = useQuery()
    const page = usePageInstance()

    useNativeEffect(() => {
        console.log(query);
        console.log(page)
    }, [])

    return (
        <View>
            这是详情页
        </View>
    )
}