import * as React from 'react';
import { useState, useEffect } from 'react'
import { useQuery, usePageInstance, useNativeEffect } from 'remax'
import { View, Text, Image, Button, Input, Icon, Form, Label } from 'remax/wechat';
import { navigateTo } from 'remax/wechat'
import wxrequest from '/util/wxrequest'

export default () => {

    const [dataSource, setDataSource] = useState([])

    const fn = {

    
    }


    return (
        <View>
            <View>
                <Input placeholder="搜索" bindinput={fn.bindinput} bindconfirm={fn.bindconfirm} confirm-type="search" />
                <Icon type="search" style={{float:"right"}} />
            </View>

            <View >
             
            </View>

        </View>
    );
};