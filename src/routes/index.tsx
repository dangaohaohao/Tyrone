import React, {lazy} from 'react'
import {Redirect} from 'react-router-dom'
import {RouteConfig} from 'react-router-config'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: lazy(()=>import('../pages/common/home')),
    exact: true,
    breadcrumb: [
      {title: '首页'},
    ],
    premission:['admin','财务']
  },
  {
    path: '/finance/stat',
    component: lazy(()=>import('../pages/finance/finance-stat')),
    breadcrumb: [
      {title: '财务管理'},
      {title: '财务统计'}
    ],
    premission:['admin','财务']
  },
  {
    path: '/finance/recharge',
    component: lazy(()=>import('../pages/finance/finance-recharge')),
    breadcrumb: [
      {title: '财务管理'},
      {title: '充值管理'}
    ],
    premission:['admin','财务']
  },
  {
    path: '/finance/record',
    component: lazy(()=>import('../pages/finance/finance-record')),
    breadcrumb: [
      {title: '财务管理'},
      {title: '提现记录'}
    ],
    premission:['admin','财务']
  },
  {
    path: '/finance/audit',
    component: lazy(()=>import('../pages/finance/finance-audit')),
    breadcrumb: [
      {title: '财务管理'},
      {title: '提现审核'}
    ],
    premission:['admin','财务']
  },
  {
    path: '/order/service',
    component: lazy(()=>import('../pages/order/order-service')),
    breadcrumb: [
      {title: '订单管理'},
      {title: '服务订单管理'}
    ],
    premission:['admin','财务']
  },
  {
    path: '/order/subscribe',
    component: lazy(()=>import('../pages/order/order-subscribe')),
    breadcrumb: [
      {title: '订单管理'},
      {title: '预约订单管理'}
    ],
    premission:['admin','财务']
  },
  {
    path: '/order/service/edit/:type',//add  modify
    component: lazy(()=>import('../pages/order/order-edit')),
    breadcrumb: [
      {title: '订单管理'},
      {title: '服务订单管理', to: '/order/service'},
      {title: '编辑订单'}
    ],
    premission:['admin']
  },
  {
    path: '/order/subscribe/edit/:type',//add  modify
    component: lazy(()=>import('../pages/order/order-edit')),
    breadcrumb: [
      {title: '订单管理'},
      {title: '预约订单管理', to: '/order/subscribe'},
      {title: '编辑订单'}
    ],
    premission:['admin']
  },
  {
    path: '/user/landlord',
    component: lazy(()=>import('../pages/user/user-landlord')),
    breadcrumb: [
      {title: '用户管理'},
      {title: '房东管理'}
    ],
    premission:['admin']
  },
  {
    path: '/user/edit/:type',//add  modify
    component: lazy(()=>import('../pages/user/user-edit')),
    breadcrumb: [
      {title: '用户管理'},
      {title: '房东管理', to: '/user/landlord'},
      {title: '编辑用户'}
    ],
    premission:['admin']
  },
  {
    path: '/house/manager',
    component: lazy(()=>import('../pages/house/house-manager')),
    breadcrumb: [
      {title: '房屋管理'},
      {title: '房屋管理'}
    ],
    premission:['admin']
  },
  {
    path: '/house/edit/:type',//add  modify
    component: lazy(()=>import('../pages/house/house-edit')),
    breadcrumb: [
      {title: '房屋管理'},
      {title: '房屋管理', to: '/house/manager'},
      {title: '编辑房屋'}
    ],
    premission:['admin']
  },
  {
    path: '/data/app',
    component: lazy(()=>import('../pages/data/data-app')),
    breadcrumb: [
      {title: '数据管理'},
      {title: '数据管理'}
    ],
    premission:['admin']
  },  
  {
    path: '/content/message',
    component: lazy(()=>import('../pages/content/content-message')),
    breadcrumb: [
      {title: '内容管理'},
      {title: '消息推送'}
    ],
    premission:['admin']
  }, 
  {
    path: '/content/opinion',
    component: lazy(()=>import('../pages/content/content-opinion')),
    breadcrumb: [
      {title: '内容管理'},
      {title: '意见反馈'}
    ],
    premission:['admin']
  }, 
  {
    path: '/content/protocol',
    component: lazy(()=>import('../pages/content/content-protocol')),
    breadcrumb: [
      {title: '内容管理'},
      {title: '协议配置'}
    ],
    premission:['admin']
  }, 
  {
    path: '/content/carousel',
    component: lazy(()=>import('../pages/content/content-carousel')),
    breadcrumb: [
      {title: '内容管理'},
      {title: '轮播管理'}
    ],
    premission:['admin']
  }, 
  //错误页面
  {
    path: '/error',
    component: lazy(()=>import('../pages/common/error'))
  },
  // 没有权限的页面
  {
    path: '/forbidden',
    component: lazy(()=>import('../pages/common/forbidden'))
  },
  // 路径错误
  {
    path: '/not-match',
    component: lazy(()=>import('../pages/common/not-match'))
  },
  {
    path: '**',
    render: ()=><Redirect to="/not-match"/>
  }
]


export default routes;