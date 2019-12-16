interface SiderItemInterface {
  id: string;
  title: string;
  path: string;
}
interface SiderConfigInterface {
  id: string;
  root: string;
  icon: string;
  children: SiderItemInterface[];
}


const SiderConfig: SiderConfigInterface[] = [
  {
    id: "finance",
    root: "财务管理",
    icon: "money-collect",
    children: [
      {
        id: "finance-stat",
        title: "财务统计",
        path: "/finance/stat"
      },
      {
        id: "finance-recharge",
        title: "充值管理",
        path: "/finance/recharge"
      },
      {
        id: "finance-record",
        title: "提现记录",
        path: "/finance/record"
      },
      {
        id: "finance-audit",
        title: "提现审核",
        path: "/finance/audit"
      }
    ]
  },
  {
    id: "order",
    root: "订单管理",
    icon: "profile",
    children: [
      {
        id: "order-service",
        title: "服务订单管理",
        path: "/order/service"
      },
      {
        id: "order-subscribe",
        title: "预约订单管理",
        path: "/order/subscribe"
      }
    ]
  },
  {
    id: "user",
    root: "用户管理",
    icon: "user",
    children: [
      {
        id: "user-landlord",
        title: "房东管理",
        path: "/user/landlord"
      }
    ]
  },
  {
    id: "house",
    root: "房屋管理",
    icon: "bank",
    children: [
      {
        id: "house-manager",
        title: "房屋管理",
        path: "/house/manager"
      }
    ]
  },
  {
    id: "data",
    root: "数据管理",
    icon: "line-chart",
    children: [
      {
        id: "data-app",
        title: "数据管理",
        path: "/data/app"
      }
    ]
  },
  {
    id: "content",
    root: "内容管理",
    icon: "switcher",
    children: [
      {
        id: "content-message",
        title: "消息推送",
        path: "/content/message"
      },
      {
        id: "content-opinion",
        title: "意见反馈",
        path: "/content/opinion"
      },
      {
        id: "content-carousel",
        title: "轮播管理",
        path: "/content/carousel"
      },
      {
        id: "content-protocol",
        title: "协议配置",
        path: "/content/protocol"
      }
    ]
  }
];

export default SiderConfig;
