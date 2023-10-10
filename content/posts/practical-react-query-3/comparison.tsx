import * as React from 'react'
import { Table } from 'antd'
import './style.css'

export function FetchingComparison() {
  const data = [
    {
      usestate: 'Dễ sử dụng và hiểu',
      zustand: 'middle',
      redux: 'Khó sử dụng + Boiler plate code',
    },
    {
      usestate: 'Được tích hợp sẵn trong React',
      zustand: 'Phải import thư viện',
      redux: 'Phải import thư viện',
    },
    {
      usestate: 'state local',
      zustand: 'state Application',
      redux: 'state Application',
    },
    {
      usestate: 'local state',
      zustand: 'application store',
      redux: 'application store',
    },
    {
      usestate: 'Kết hợp với Context để giảm prop drillings',
      zustand: 'X prop drillings',
      redux: 'X prop drillings',
    },
  ]
  const columns = [
    {
      title: 'useState',
      dataIndex: 'usestate',
      key: 'usestate',
      width: '33%',
    },
    {
      title: 'Zustand',
      dataIndex: 'zustand',
      key: 'zustand',
      width: '33%',
    },
    {
      title: 'Redux',
      dataIndex: 'redux',
      key: 'redux',
      width: '33%',
    },
  ]
  return (
    <div className="container-special">
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  )
}
