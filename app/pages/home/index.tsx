import { ThemeProvider } from 'styled-components'
import { Button, themes } from 'ui'

const Home = () => (
  <ThemeProvider theme={themes.light}>
    <Button>Home</Button>
  </ThemeProvider>
)

export default Home
