import * as React from 'react'
import { Link, Text, Box, Flex } from '@theme-ui/components'

type Props = {
  id: string
}

const mapping = [
  {
    id: 'client-state-vs-server-state',
    title: '#1: Client State vs. Server State',
  },
  {
    id: 'practical-react-query-1-tips-and-tricks',
    title: '#2: Practical React Query 1 - tips and tricks',
  },
  {
    id: 'practical-react-query-2-custom-hooks-and-query-key-factory',
    title:
      '#3: Practical React Query 2 - custom hooks and query key factory',
  },
  {
    id: 'practical-react-query-3-client-state-zustand',
    title: '#4: Practical React Query 3 - Client State Zustand',
  },
]

export const RqToc = ({ id }: Props) => {
  return (
    <Flex
      as="ul"
      sx={{
        flexDirection: 'column',
        'list-style-type': 'none',
        gap: 0.7,
        paddingTop: 2,
        paddingBottom: 4,
      }}
    >
      {mapping.map((item) => {
        if (item.id === id) {
          return (
            <Box as="li" key={item.id}>
              <Text>
                <b>{item.title}</b>
              </Text>
            </Box>
          )
        }
        return (
          <Box as="li" key={item.id}>
            <Text>
              <Link href={`./${item.id}`}>{item.title}</Link>
            </Text>
          </Box>
        )
      })}
    </Flex>
  )
}
