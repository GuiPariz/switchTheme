import { useState } from 'react'
import GlobalStyled from '../styles/global'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/header'
import { usePersistedState } from '../utils/usePersistedState'

 export function Home() {
  const [theme, setTheme] = usePersistedState('theme', light)
  const toggleTheme = ()=>{
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
    <div className="Home">
      <GlobalStyled/>
      <Header toggleTheme={toggleTheme}/>
    </div>
    </ThemeProvider>
  )
}


