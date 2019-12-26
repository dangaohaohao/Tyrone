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
   FINANCE_STAT_API= '/manager/api/finance/stat',

   /*
      根据多个参数查找用户 
      参数： roleType / userSource / certification / status / skip / count  
    */
   GET_USER_BY_MULTIPARAMS_API= '/api/user/getUserBymultiParams',


   
   /*
      根据角色 类型 查找角色用户  
      参数： roleType, count
    */
   GET_USER_BY_ROLETYPE_API= '/api/user/findUserByRoleType',

   
  
    //.......
  }
  export default API;