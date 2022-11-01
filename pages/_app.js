import Layout from 'components/layout'
import { StoreContextProvider } from 'context/StoreContext'
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StoreContextProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StoreContextProvider>

  )
}

export default MyApp
