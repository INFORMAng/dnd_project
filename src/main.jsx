import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { setupStore } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={setupStore}>
        <App />
    </Provider>
)
