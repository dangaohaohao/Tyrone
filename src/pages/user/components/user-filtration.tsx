import React, { useCallback,useState,useRef} from "react";
import { Icon, Input, Select } from "antd";
import SelectTime from '../../../components/select-time'
import {Map} from 'immutable'

const { Search } = Input;
const { Option } = Select;



const data = [
    {
      id: 'source',
      title: "用户来源",
      cont: ["管理员新增", "ios客户端", "Android客户端"]
    },
    {
      id: 'certification',
      title: "实名认证情况",
      cont: ["已认证", "未认证", "认证中", "认证失败"]
    },
    {
      id: 'bankCard',
      title: "银行卡绑定情况",
      cont: ["已绑定", "未绑定"]
    },
    {
      id: 'userState',
      title: "用户状态",
      cont: ["正常", "删除"]
    }
  ];

  interface Prop{
    onSearchAction:(dataStr:object)=>void;
    onSelectAction:(dateObj: Map<string,string>)=>void;
  }

  
const UserFiltration: React.FC<Prop> = function UserFiltration({onSearchAction,onSelectAction}) {

    const [selectObj,setSelectObj]=useState(Map({'':''}));

    const valueRef = useRef(selectObj);
    valueRef.current = selectObj;

    const searchAction=useCallback((val:string,ev)=>{
      ev.persist();
      onSearchAction({title:ev.target.id,val:val});
      },[onSearchAction,selectObj]);

      const onSelectSearch = useCallback((val:string,option)=> {
        let title=option.props.title;
        setSelectObj(selectObj.update(title,()=>val));
        onSelectAction(valueRef.current);
      }, [onSelectAction,selectObj]);
    
      const selectTimeAction=useCallback((val)=>{
        setSelectObj(selectObj.update('time',()=>val));
        onSelectAction(selectObj);
      },[onSelectAction,selectObj]);
      
    return(
        <div className="filtration">
        <Icon type="filter" className="filter-icon" />
        <Search
          placeholder="搜索房东编号"
          onSearch={searchAction}
          style={{width:150}}
          id="number"
        />
        <Search
          placeholder="搜索房东姓名"
          onSearch={searchAction}
          style={{width:150}}
          id="name"
        />

        {data.map(item => {
          return (
            <Select
              showSearch
              style={{width:150}}
              placeholder={item.title}
              onChange={onSelectSearch}
              key={item.id}
            >
              {
                item.cont.map((opt, index) => {
                  return (
                    <Option value={opt} key={index} title={item.id}>
                      {opt}
                    </Option>
                  );
                })
              }
            </Select>
          );
        })}

        <SelectTime onChange={selectTimeAction}></SelectTime>
      </div>
    );
}


export default UserFiltration;