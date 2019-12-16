import React,{memo} from "react";
import { Spin, Empty } from "antd";
import './style.scss'


const StatusPanel: React.FC<{
  status: string;
  render?: any;
}> = memo(function StatusPanel({ status, render }) {
  switch (status) {
    case "loading":
      return (
        <div className="panel-container loading">
          <Spin size="large" tip="loading" />
        </div>
      );
    case "success":
      return (
      <div className="panel-container success">
         {render()}
      </div>
      );
    case "fail":
      return (
        <div className="panel-container fail">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="请求错误!" />
        </div>
      );
    default:
      return null;
  }
});

export default StatusPanel;

/*
使用：

 <StatusPanel status={status} render={()=>{
        return <div> 成功展示的结构 </div>
      }} />


*/