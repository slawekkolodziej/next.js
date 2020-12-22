import { FooProvider } from '../FooContext'

export default function MyApp({ Component, pageProps }) {
  return (
    <FooProvider value={42}>
      <Component {...pageProps} />
    </FooProvider>
  )
}
