import ReactDOM from 'react-dom'
import App from './components/AppComponent.jsx'
import './styles.css'
import { LangProvider } from './context/LanContext.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <LangProvider>
    <App />
  </LangProvider>
)