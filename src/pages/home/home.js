import * as React from 'react';
import { useState, useEffect } from 'react'
import { useQuery, usePageInstance, useNativeEffect } from 'remax'
import { View, Text, Image, Button, Input, Icon, Form, Label } from 'remax/wechat';
import { switchTab, navigateTo } from 'remax/wechat'
import wxrequest from '/util/wxrequest'
import styles from './home.less'

export default () => {

    const [dataSource, setDataSource] = useState([])

    const fn = {

        bindinput: (e) => {
            console.log(e);
        },
        bindconfirm: (e) => {
            console.log(e);
            wxrequest("GET", '/goods/getGoodsByType', '').then(res => {
                setDataSource({ dataSource: res.data.data.list || [] })
            })
        },
        bindfocus: () => {
            navigateTo({ url: "../search/search" })
        },


        //按类型获取数据
        getData: () => {

        },

        goDetail: (item) => {
            navigateTo({ url: `../detail/detail?id=${item.id}` })
        }
    }

    useEffect(() => {

    })
    useNativeEffect(() => {
        wxrequest("GET", '/goods/getGoodsByType', '').then(res => {
            console.log(res.data.data.list);
            setDataSource(res.data.data.list || [])
        })
    }, [])

    console.log(dataSource);
    return (
        <View className={styles.home}>
            <View className={styles.search}>
                <Input
                    placeholder="搜索"
                    bindinput={fn.bindinput}
                    bindconfirm={fn.bindconfirm}
                    bindfocus={fn.bindfocus}
                    confirm-type="search"
                />
                {/* <Icon type="search" style={{ float: "right" }} /> */}
            </View>

            <View className={styles.product_body}>
                {
                    dataSource.map((item, index) => {
                        return (
                            <View
                                key={item.id}
                                className={styles.product_preview}
                                onTap={()=>fn.goDetail(item)}
                            >
                                <View className={styles.product_item}>
                                    <View className={styles.product_item_img} >

                                    </View>

                                    <View className={styles.product_item_msg} >
                                        <View className={styles.product_name} >
                                            <Text>
                                                {index === 0 ? <Text style={{ margin: "0 10px", color: "#f40" }}>年货节</Text> : null}
                                                {item.name}这是第{index + 1}个商品名字，尽量多到超出两行，超出部分省略
                                            </Text>
                                        </View>
                                        <View className={styles.product_price}  >
                                            <Text className="moneyFont">{item.price}</Text>
                                        </View>
                                        <View className="smallFont" >
                                            <Text>{item.price}条评论</Text>
                                            <Text>{item.price}%好评</Text>
                                            <Text style={{ float: "right" }}>...</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </View>

        </View>
    );
};