import React from 'react'
import { Route, Redirect, Router } from "react-router-dom"

function PublicRoute({ component: Component, ...rest }) {
    let token = true
    return (
        <div>
            <Route
                {...rest}
                render={() => {
                    if (!token) {
                        return <Component />
                    } else {
                        return <Redirect to="/" />
                    }
                }}
            />
        </div>
    )
}

export default PublicRoute
