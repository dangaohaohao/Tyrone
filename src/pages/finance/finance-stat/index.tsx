import React ,{useEffect,useRef} from 'react'
import Check from "./children/check"
import "./style.scss"


// 构造饼状图
// const getcheart =()=>{
//   const option = {
//     tooltip: {
//         trigger: 'item',
//         formatter: "{a} <br/>{b}: {c} ({d}%)"
//     },
//     series: [
//         {
//             name:'访问来源',
//             type:'pie',
//             radius: ['50%', '70%'],
//             avoidLabelOverlap: false,
//             label: {
//                 normal: {
//                     show: false,
//                     position: 'center'
//                 },
//                 emphasis: {
//                     show: true,
//                     textStyle: {
//                         fontSize: '30',
//                         fontWeight: 'bold'
//                     }
//                 }
//             },
//             labelLine: {
//                 normal: {
//                     show: false
//                 }
//             },
//             data:[
//                 {value:20, name:'直接访问'},
//                 {value:1200, name:'邮件营销'},

//             ]
//         }
//     ]
// };
//  return option
// }
// //构造进出账饼状图


const FinanceStat: React.FC<{}> = function FinanceStat(){

  // const chartRef = useRef<HTMLDivElement | null>(null);

  // useEffect(()=>{
  //   // 引入 ECharts 主模块
  //   var echarts = require('echarts/lib/echarts');
  //   // 引入柱状图
  //   require('echarts/lib/chart/pie');
  //   // 引入提示框和标题组件
  //   require('echarts/lib/component/tooltip');
  //   require("echarts/lib/component/legendScroll");
  //   require("echarts/lib/component/legend");
  //   require('echarts/lib/component/title');
  
  //   // 基于准备好的dom，初始化echarts实例 创建ref
  //   var myChart = echarts.init(chartRef.current);
  //   myChart.setOption(
  //       getcheart()
  //   );
  // },[chartRef])

  return (
    <>
      <div>
        <h2>平台今日流水概述</h2>
        {/* 第一张表部分 */}
        <div className="main-fa-list">
          <div className="main">
            <Check/>
            <div className="main-down">进出账情况</div>
          </div>
          <div className="main-right">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FinanceStat;


