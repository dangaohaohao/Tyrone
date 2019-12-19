import React,{useCallback,useEffect} from "react";
import UserFiltration from '../../../components/user-filtration'
import UserTable from '../../../components/user-table'
import './style.scss'
import {requestGetUserMultiParams,requestGetUserRoleType} from '../../../store/models/user'

import {useDispatch, useSelector} from 'react-redux'


const initOpt={
  'userSource':'',
  'certification':'',
  'bank':'',
  'status':'',
  'time':''
}


const searchData=[
  {
    id: "number",
    placeholder: "搜索房东编号"
  },
  {
    id: "name",
    placeholder: "搜索房东姓名"
  }
]


const selectData = [
  {
    id: "userSource",
    title: "用户来源",
    cont: ["管理员新增", "ios客户端", "Android客户端"]
  },
  {
    id: "certification",
    title: "实名认证情况",
    cont: ["已认证", "未认证", "认证中", "认证失败"]
  },
  {
    id: "bank",
    title: "银行卡绑定情况",
    cont: ["已绑定", "未绑定"]
  },
  {
    id: "status",
    title: "用户状态",
    cont: ["正常", "删除"]
  }
];

const cols = [
  {align:'center',title: '房东编号', dataIndex: 'roleId'},
  {align:'center',title: '房东姓名', dataIndex: 'userName'},
  {align:'center',title: '手机号', dataIndex: 'tel'},
  {align:'center',title: '邮箱', dataIndex: 'email'},
  {align:'center',title: '账面余额', dataIndex: 'bookBalance'},
  // {align:'center',title: '房屋数量', dataIndex: 'houseNum'},
  {align:'center',title: '实名认证情况', dataIndex: 'certification'},
  // {align:'center',title: '银行卡绑定情况', dataIndex: 'houseNum'},
  // {align:'center',title: '默认交易银行卡号', dataIndex: 'houseNum'},
  {align:'center',title: '房东来源', dataIndex: 'userSource'},
  // {align:'center',title: '注册时间', dataIndex: 'houseNum'},
  {align:'center',title: '最近登录时间', dataIndex: 'nearDate'},
  {align:'center',title: '房东状态', dataIndex: 'status'},
  {
    align:'center',title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 150,
    render: () => <div><a>查看</a><a>禁用</a></div>
  },
];
const UserLandlord: React.FC<{}> = function UserLandlord() {
  const dispatch = useDispatch();
  const multidata = useSelector(state=>(state as any).getIn(['user', 'landlord', 'multidata']));

  const searchAction=useCallback((val)=>{
    console.log(val);
  },[]);


  const selectAction=useCallback((val)=>{
    let opt=val.toJS(true);
    dispatch(requestGetUserMultiParams({'roleType':'2','skip':'0','count':'10',...initOpt,...opt}));
  },[]);

  

    // 第一次请求所有数据
    useEffect(()=>{
      dispatch(requestGetUserRoleType({'roleType':'2','skip':'0','count':'100'}));
      console.log(11);
    }, [dispatch]);



  return (
    <div id="user-landlord">
      <header>
        <h1>房东概述</h1>
        <div className="count">
          <div>
            <span>今日新增</span>
            <i>90</i>
          </div>
          <div>
            <span>总用户量</span>
            <i>90334</i>
          </div>
        </div>
      </header>
      <UserFiltration onSelectAction={selectAction} onSearchAction={searchAction} selectData={selectData} searchData={searchData}></UserFiltration>


      <UserTable data={multidata.get('data')} status={multidata.get('status')} columns={cols}></UserTable>

      </div>
  );
};

export default UserLandlord;





