import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import MessageEs from '../assets/lang/es-co.json'
import MessageEn from '../assets/lang/en-us.json'

const langContext = React.createContext()

const LangProvider = ({ children }) => {
  const [locale, setLocale] = useState('es-co')
  const [message, setMessage] = useState(MessageEs)

  const leng = (len) => {
    if (len === 'es-co') {
      setLocale('es-co')
      setMessage(MessageEs)
    } else {
      setLocale('en-us')
      setMessage(MessageEn)
    }
  }

  return (
    <langContext.Provider value={{setLeng : leng}}>
      <IntlProvider messages={message} locale={locale}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  )
}

export { langContext, LangProvider }