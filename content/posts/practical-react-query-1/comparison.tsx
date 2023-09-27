import * as React from 'react'
import { Table } from 'antd'
import './style.css'

export function FetchingComparison() {
  const data = [
    {
      initial: 'New cache entry',
      background: 'Key already in the cache',
    },
    {
      initial: 'Hard loading state',
      background:
        'No loading state. Can use `isFetching` to know if there is any background refetch',
    },
  ]
  const columns = [
    {
      title: 'Initial Fetch',
      dataIndex: 'initial',
      key: 'initial',
      width: '50%',
    },
    {
      title: 'Background Refetch',
      dataIndex: 'background',
      key: 'background',
      width: '50%',
    },
  ]
  return (
    <div className="container-special">
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  )
}
