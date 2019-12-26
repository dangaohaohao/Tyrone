import React from 'react'
import './style.scss'

const HouseManager: React.FC<{}> = function HouseManager(){

  return (
    <div id="house-landlord">
      {/* 头部 begin */}
      <header>
          <h1 className="title">房屋概述</h1>
          <div className="count">
            <div>
              <span>今日新增</span>
              <i>12</i>
            </div>
            <div>
              <span>今日新增</span>
              <i>232</i>
            </div>
            <div>
              <span>今日新增</span>
              <i>2342</i>
            </div>
          </div>
      </header>
      {/* 头部 end */}
    </div>
  )
}

export default HouseManager;