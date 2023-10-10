/**
 * 导出所有的接口请求函数
 */
import base from './base'
import req from './req'
/**
 * 获取分类列表
 * @returns 
 */
export const getCategoryList=()=>req.get(base.categoryUrl);


/**
 * 获取首页轮播图
 * @returns 
 */
export const getBanner=()=>req.get(base.banerUrl);

/**
 * 首页主体--新鲜好物
 * @returns 
 */
export const getNew=()=>req.get(base.findNew);

/**
 * 首页主体--人气推荐
 * @returns 
 */
 export const getHot=()=>req.get(base.findhot);


 /**
 * 首页主体--产品区块
 * @returns 
 */
  export const getProducts=()=>req.get(base.product);