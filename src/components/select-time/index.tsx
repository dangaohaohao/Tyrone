import React ,{useState,useCallback}from "react";
import { DatePicker } from "antd";
import moment from "moment";

const disabledDate = (current: moment.Moment | null) => {
  if (!current) {
    return false;
  } else {
    return current > moment().endOf("day");
  }
};


interface Prop {
    onChange: (dateString: string)=>void
  }

const SelectTime: React.FC<Prop> = function SelectTime({onChange}) {

  const changeDateAction = useCallback((momentDateArr:any,dateString: string) => {
    onChange(dateString);
  },[]);


  return (
    <div className="select-time">
      <div>
        <DatePicker 
        placeholder="请选择日期" 
        onChange={changeDateAction} 
        showToday={true}
        disabledDate={disabledDate} />
      </div>
    </div>
  );
};

export default SelectTime;

/*


使用方式：
      <SelectTime onChange={(SelectedTime)=>{
        console.log(SelectedTime);   // 2019-12-02 
      }} />
*/