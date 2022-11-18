import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const About = () => {
  return (
    <Container>
      <Typography component="h1" sx={{ mt: '90px', fontSize: '3rem' }}>
        About Me
      </Typography>
      <main>
        <section>
          <Typography component="p">
            Hi there, I’m Ash, a passionate frontend developer with a love of coding as well as
            UI/UX design.
          </Typography>
          <Typography component="p">
            Aside from some freelances work, I’m currently seeking a full-time role. Do contact me
            if you’d like to talk: ashkherad@gmail.com.
          </Typography>
          <Typography component="p">
            To get this code, just visit my github: https://github.com/SimileDude/CryptoHub
          </Typography>
        </section>
      </main>
    </Container>
  )
}

export default About
