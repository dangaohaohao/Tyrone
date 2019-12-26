import React, { useCallback, useState, useEffect } from "react";
import { Icon, Input, Select } from "antd";
import SelectTime from "../select-time";
import { Map } from "immutable";

const { Search } = Input;
const { Option } = Select;


interface Prop {
  onSearchAction: (dataStr: object) => void;
  onSelectAction: (dateObj: object) => void;
  searchData:{
    id:string,
    placeholder:string
  }[];
  selectData:{
    id:string,
    title:string,
    cont:string[]
  }[];
}

const UserFiltration: React.FC<Prop> = function UserFiltration({
  onSearchAction,
  onSelectAction,
  searchData,
  selectData
}) {
  const [selectArr, setSelectArr] = useState(Map<string>({}));
  const searchAction = useCallback(
    (val: string, ev) => {
      ev.persist();
      console.log(ev);
      onSearchAction({ title: ev.target.id, val: val });  
    },
    [onSearchAction, selectArr]
  );

  const onSelectSearch = useCallback(
    (val: string, option) => {
      let title: string = option.props.title;
      setSelectArr(selectArr.update(title,()=>val));
    },
    [selectArr]
  );

  const selectTimeAction = useCallback(
    (val: string) => {
      setSelectArr(selectArr.update('time',()=>val));
    },
    [selectArr]
  );

  useEffect(() => {
    onSelectAction(selectArr);
  }, [onSearchAction, selectArr]);

  return (
    <div className="filtration">
      <Icon type="filter" className="filter-icon" />
      {
      searchData.map(item=>{
        return(
          <Search
            placeholder={item.placeholder}
            key={item.id}
            onSearch={searchAction}
            style={{ width: 150 }}
            id={item.id}
          />
        )
      })
      }
      

      {selectData.map(item => {
        return (
          <Select
            showSearch
            style={{ width: 150 }}
            placeholder={item.title}
            onChange={onSelectSearch}
            key={item.id}
          >
            {item.cont.map((opt, index) => {
              return (
                <Option value={index} key={index} title={item.id}>
                  {opt}
                </Option>
              );
            })}
          </Select>
        );
      })}

      <SelectTime onChange={selectTimeAction}></SelectTime>
    </div>
  );
};

export default UserFiltration;
