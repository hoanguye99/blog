import * as React from 'react'
import { Table } from 'antd'
import './style.css'

function StaleWhileRevalidate() {
  const data = [
    {
      header: 'Definition',
      stale: '≠ FRESH',
      while: 'Show user stale data while refetching. Cache data.',
      revalidate: 'Fetch API again to get latest data',
    },
    {
      header: 'Possible values',
      stale: 'staleTime: 10, 5, oo, 0',
      while:
        'Stale Time = FRESH => No Revalidate / \n Stale Time = 0 => Need a Revalidation',
      revalidate: 'when stale, no revalidate, every 10s, ...',
    },
    {
      header: 'Defaults',
      stale: 'staleTime: 0',
      revalidate:
        'refetchOnMount, refetchOnWindowFocus, refetchOnReconnect',
    },
  ]
  const columns = [
    {
      title: ' ',
      dataIndex: 'header',
      key: 'header',
      width: '10%',
    },
    {
      title: 'stale',
      dataIndex: 'stale',
      key: 'stale',
      width: '30%',
    },
    {
      title: 'while',
      dataIndex: 'while',
      key: 'while',
      width: '30%',
    },
    {
      title: 'revalidate',
      dataIndex: 'revalidate',
      key: 'revalidate',
      width: '30%',
    },
  ]
  return (
    <div className="container-special">
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  )
}

export default StaleWhileRevalidate
