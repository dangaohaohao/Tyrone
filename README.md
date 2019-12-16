### 项目结构

```
财务管理
    财务管理 
    充值管理（下载excel表格）
    提现记录（下载excel表格）
    提现审核（下载excel表格）
    	审核操作
订单管理
	服务订单管理
		添加
		编辑
		查看详情
	预约订单管理
		添加
		查看详情
		处理
用户管理
	房东管理
		添加
		查看详情
		编辑
		禁用
房屋管理
	房屋管理
		添加
		查看详情
		编辑
		禁用
数据管理
	数据管理
```

```
主题色：#6188b0
```

### api

```
 /*
      登录接口
      参数： username  password
    */
    LOGIN_API = '/manager/api/login',
    
    

   /*
      财务统计接口
      参数： start end type(out in) today 
    */
    FINANCE_STAT_API= '/manager/api/finance/stat'
    
    data:{
           in: {
              "recharge|1000-10000": 0,
              "rent|1000-30000": 0,
              "service|1000-8000": 0,
              "behelf|1000-5000": 0
            },
            out: {
              "deposit|1000-10000": 0,
              "service|1000-8000": 0,
              "behelf|1000-5000": 0
            }

      }
    
    
    

```

