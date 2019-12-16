import React from 'react'
import SelectTime from '../../../components/select-time'


const FinanceStat: React.FC<{}> = function FinanceStat(){

  return (
    <div>
      <h1>财务统计界面</h1>
      <SelectTime onChange={(SelectedTime)=>{
        console.log(SelectedTime);   // 2019-12-02 
      }} />
    </div>
  )
}

export default FinanceStat;