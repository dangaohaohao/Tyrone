import React,{useCallback} from "react";
import UserFiltration from '../components/user-filtration'
import './style.scss'



const UserLandlord: React.FC<{}> = function UserLandlord() {
  const selectAction=useCallback((val)=>{
    console.log(val.toJS());
  },[])
  const searchAction=useCallback((val)=>{
    console.log(val);
  },[])

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
      <UserFiltration onSelectAction={selectAction} onSearchAction={searchAction}></UserFiltration>
    
      </div>
  );
};

export default UserLandlord;
