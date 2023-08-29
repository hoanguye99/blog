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
        <Text sx={{ fontWeight: 'bold' }}>Hi 👋, my name is Hoang</Text>
      </p>
      <p style={{ marginBottom: 0 }}>
        <Text>
          I'm a Web Developer with a passion for ReactJs. I ❤️
          TypeScript, TailwindCSS and Tanstack Query.
        </Text>
      </p>

      <p style={{ marginBottom: 0 }}>
        <Text>
          Welcome to my personal blog 📚, where I write about all things
          React, TypeScript and of course react-query.
        </Text>
      </p>
    </div>
  </Box>
)

export default About
