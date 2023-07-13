import * as AppStyled from './App.styled'
import { GlobalStyle } from './styles'
import { Home, NotFound, Resume } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Menu, LeftNav, LogoContainer } from './components'
import { useDarkMode } from './hooks'
import { ROUTES } from './tools'

const App = () => {
  const darkMode = useDarkMode()

  return (
    <AppStyled.Component className="app" data-dark-mode={darkMode}>
      <GlobalStyle />
      <main className="main">
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.index} element={<Home />} />
            <Route path={ROUTES.resume} element={<Resume />} />
            <Route path={ROUTES.notFound} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
      <LogoContainer />
      <LeftNav />
      <Menu />
    </AppStyled.Component>
  )
}

export default App
