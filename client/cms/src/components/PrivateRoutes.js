import React from 'react'
import { Route, Redirect, Router } from "react-router-dom"

const PrivateRoutes = ({ component: Component, ...rest }) => {
    return (
        <div>
            <Route
                {...rest}
                render={() => {
                    if (localStorage.access_token) {
                        return <Component />
                    } else {
                        return <Redirect to="login" />
                    }
                }}
            />
        </div>
    )
}

export default PrivateRoutes
