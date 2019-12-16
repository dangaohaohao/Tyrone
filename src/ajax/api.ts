// 管理接口
enum API{
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

  
    //.......
  }
  export default API;