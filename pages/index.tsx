import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button } from '../src/components/Button'
import { Container } from '../src/components/Container'
import { Title } from '../src/components/Title'

const Home: NextPage = () => {
  const router = useRouter()

  const redirectCreateAccountPage = () => {
    router.push('/create-account')
  }

  return (
    <Container
  >
  <img src='/assets/logo.svg'/>
  <Title>PANDORA CODE</Title>
  <Button onClick={redirectCreateAccountPage}>Criar conta</Button>
  </Container>
  )
}

export default Home
