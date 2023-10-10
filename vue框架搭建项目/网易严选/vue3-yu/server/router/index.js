const express = require('express');
// 引入轮播图数据
const bannerData=require('../data/banner.json')
const hotData=require('../data/hot.json') //人气推荐
const productData =require('../data/product.json') //产品区块

const router = express.Router();


// 测试接口
router.get('/test', (req, res) => {
    res.send('测试成功');
})

/**
 * 首页轮播图
 */
router.get('/home/banner',(req,res)=>{
    res.send(bannerData)
})

/**
 * 首页-人气推荐
 */
 router.get('/home/hot',(req,res)=>{
    res.send(hotData)
})


/**
 * 首页-产品区块
 */
 router.get('/home/product',(req,res)=>{
    res.send(productData)
})

module.exports = router;