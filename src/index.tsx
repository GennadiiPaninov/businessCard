import { I18nextProvider } from 'react-i18next'

import App from '@/App'
import { GlobalStyles } from '@/styles'
import ReactDOM from 'react-dom/client'

import i18n from './i18n'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
    <GlobalStyles />
  </>
)
