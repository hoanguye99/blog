import * as React from 'react'
import Giscus from '@giscus/react'
import { StaticImage } from 'gatsby-plugin-image'
import { useColorMode } from 'theme-ui'
import { Link, Flex } from '@theme-ui/components'

import HighlightBox from './HighlightBox'
import MonoLisa from './MonoLisa'

const id = 'inject-comments'

const Comments = () => {
  const [colorMode] = useColorMode()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? (
    <Giscus
      id={id}
      repo="hoanguye99/blog"
      repoId="R_kgDOKMS_Rw"
      category="Announcements"
      categoryId="DIC_kwDOKMS_R84CY6oL"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode === 'dark' ? 'dark' : 'light'}
      lang="en"
      loading="lazy"
    />
  ) : null
}

const WithAds = () => {
  return (
    <Flex sx={{ flexDirection: 'column', gap: 3 }}>
      <HighlightBox>
        <MonoLisa />
      </HighlightBox>
      <Link
        href="https://bytes.dev/?r=dom"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          placeholder="blurred"
          src="../../static/images/bytes.jpg"
          alt="Bytes - the JavaScript Newsletter that doesn't suck"
        />
      </Link>
      <Comments />
    </Flex>
  )
}

export default WithAds
