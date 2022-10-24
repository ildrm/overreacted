import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'next-themes'

// the global style
const GlobalStyle = createGlobalStyle`
  :root {
    --fg: #282C35;
    --bg: #ffffff;
  }

  [data-theme="dark"] {
    --fg: #ffffff;
    --bg: #282C35;
  }

  [data-theme="dark"] article h2 {
    color: #FFA7C4
  }

  [data-theme="light"] article h2 {
    color: #D23669
  }

  main {
    margin-left: auto;
    margin-right: auto;
    max-width: 42rem;
    padding: 2.625rem 1.3125rem;
  }

  .avatar {
    width: 5rem;
    height: 5rem;
    border-radius: 99px;
    float: left;
  }

  .slug {
    padding: 1.5rem 7rem;
  }

  * {
    font-family: Montserrat,sans-serif;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
