import React, { useState, useCallback } from "react";
import { Table, Empty } from "antd";
import useLoading from "../../utils/useLoading";
import { List } from "immutable";
import './style.scss'

// import { List } from "immutable";


interface Prop {
  status: string,
  columns: {
    [propname: string]:any ;
  }[],
  data: List<any>
}



const UserTable: React.FC<Prop> = function UserTable({ data,status,columns}) {
  console.log(data);
  const [selectedRowKeys, setSelectedRowKeys] = useState([""]);

  const onSelectChange = useCallback(selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  }, []);

 

  const rowSelection = {
    selectedRowKeys,
    onchange: { onSelectChange },
    hideDefaultSelections: true,
    selections: [
      {
        key: "all",
        text: "全选",
        onSelect: () => {
          let newSelectedRowKeys: any[] = [];
          newSelectedRowKeys = [Array(46).keys()];
          setSelectedRowKeys(newSelectedRowKeys);
          //setSelectedRowKeys((selectedRowKeys)=>selectedRowKeys.set(0,newSelectedRowKeys)), // 0...45
        }
      },
      {
        key: "odd",
        text: "选中奇数",
        onSelect: (changableRowKeys: any[]) => {
          let newSelectedRowKeys: any[] = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          //   setSelectedRowKeys((selectedRowKeys)=>selectedRowKeys.set(0,newSelectedRowKeys));
          setSelectedRowKeys(newSelectedRowKeys);
        }
      },
      {
        key: "even",
        text: "选中偶数",
        onSelect: (changableRowKeys: any[]) => {
          let newSelectedRowKeys: any[] = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          //   setSelectedRowKeys((selectedRowKeys)=>selectedRowKeys.set(0,newSelectedRowKeys));
          setSelectedRowKeys(newSelectedRowKeys);
        }
      }
    ]
  };

  const dataDOM = data && data.size ? (
    <Table
      columns={columns}
      size="middle"
      className="table"
      rowSelection={rowSelection} 
      dataSource={(data.map(item =>
        item.set("key", item.get("key"))
      ) as any).toJS()}
    />
  ):<Empty />;

  const contentDOM = useLoading(status, dataDOM, <Empty />);

  return (
    // <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    <div className="content-center table-content">{contentDOM}</div>
  );
};

export default UserTable;
