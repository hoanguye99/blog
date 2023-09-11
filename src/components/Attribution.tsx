import * as React from 'react'
import { Link } from '@theme-ui/components'

import SmallCentered from './SmallCentered'

type Props = {
  name: string
  url?: string
  prefix?: string
}

const Attribution = ({ name, url, prefix = '' }: Props) => (
  <>
    <SmallCentered>
      {prefix}{' '}
      {url ? (
        <Link href={url} target="_blank" rel="noreferrer noopener">
          {name}
        </Link>
      ) : (
        <>{name}</>
      )}
    </SmallCentered>
  </>
)

export default Attribution
