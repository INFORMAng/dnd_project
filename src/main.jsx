import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { setupStore } from './store/config/store.ts'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={setupStore}>
        <App />
    </Provider>
)
