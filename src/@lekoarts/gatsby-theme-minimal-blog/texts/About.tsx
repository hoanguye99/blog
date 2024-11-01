import * as React from 'react'
import { Text, Link, Box } from 'theme-ui'

const About = () => (
  <Box sx={{ display: ['block', 'block', 'flex'] }}>
    <img
      src="https://avatars.githubusercontent.com/u/33215296?v=4"
      alt="hoanguye99"
      style={{
        marginRight: '0.875rem',
        marginTop: '0.5rem',
        width: '8rem',
        height: '8rem',
        borderRadius: '50%',
      }}
    />
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p style={{ marginBottom: 0, marginTop: 0 }}>
        <Text sx={{ fontWeight: 'bold' }}>
          Hi 👋, my name is Hoang, a web developer.
        </Text>
      </p>
      <p style={{ marginBottom: 0 }}>
        <Text>
          I love writing React code in TypeScript with TailwindCSS
          because it’s convenient and reduces boilerplate.
        </Text>
      </p>

      <p style={{ marginBottom: 0 }}>
        <Text>
          Tanstack Query is also an efficient and easy-to-use tool for
          data fetching in React. That’s why I wrote this blog to
          explain the fundamentals of Tanstack Query.
        </Text>
      </p>
    </div>
  </Box>
)

export default About
