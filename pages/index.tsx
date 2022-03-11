import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Flex } from 'theme-ui'
import { Button } from '../src/components/Button'
import { Title } from '../src/components/Title'
import { colors } from '../styles/colors'

const Home: NextPage = () => {
  const router = useRouter()

  const redirectCreateAccountPage = () => {
    router.push('/create-account')
  }

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        background: `linear-gradient(to right, ${colors.black}, ${colors['dark-gray']})`,
        alignItems: 'center',
        justifyContent: 'center',
      }}
  >
  <img src='/assets/logo.svg'/>
  <Title>PANDORA CODE</Title>
  <Button onClick={redirectCreateAccountPage}>Criar conta</Button>
  </Flex>
  )
}

export default Home
