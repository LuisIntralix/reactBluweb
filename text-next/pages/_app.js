import '../styles/globals.css'
import { Provider } from 'react-redux'
import generateStore from '../redux/store'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {

  const store = generateStore()


  return (<>
    <Provider store={store}>


    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/pokemon">
          <a>Pokemon</a>
        </Link>
      </li>
    </ul>

      <Component {...pageProps} />
    </Provider>
  </>)
}

export default MyApp
