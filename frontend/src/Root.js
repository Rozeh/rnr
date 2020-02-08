import React from 'react'
import App from 'components/App'
import { Provider } from 'react-redux'
import store from 'store/configure'

import { BrowserRouter as Router } from "react-router-dom"

const Root=()=>{

    return(

        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    )
}

export default Root;