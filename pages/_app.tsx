import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@components/Layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          pauseOnHover={false}
          closeOnClick
        />
      </Layout>
    </QueryClientProvider>
  )
}

export default MyApp
