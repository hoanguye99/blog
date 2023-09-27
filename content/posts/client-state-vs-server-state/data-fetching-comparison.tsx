import * as React from 'react'
import { Table } from 'antd'
import './style.css'

function DataFetchingComparison() {
  const data = [
    {
      problem: 'Bad DX',
      description:
        'Redux async action means writing a new slice for every request.',
    },
    {
      problem: 'Encapsulation',
      description:
        'We want a way to encapsulate data fetching into components, just like what React did to UI component. Each component is responsible for fetching its own data, so we can easily move the component anywhere in the tree.',
    },
    {
      problem: 'Questionable UX',
      description:
        'Showing a loading spinner every time a dialog opens until we have the data is questionable. We need a data cache.',
    },
    {
      problem: 'Only displaying data snapshots',
      description:
        'How do we get the latest data for our users? We need a solution to manage server data.',
    },
  ]
  const columns = [
    {
      title: 'Problem',
      dataIndex: 'problem',
      key: 'problem',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ]
  return (
    <div className="container-special">
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  )
}

export default DataFetchingComparison
