import { QueryClient, QueryClientProvider } from 'react-query'

type Props = {
  children: React.ReactNode
}

const queryClient = new QueryClient()

const wrapper = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export default wrapper
