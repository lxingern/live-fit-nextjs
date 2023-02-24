import { Fragment } from "react"
import MainNavigation from "./MainNavigation"

const Layout = (props) => {
return (
    <Fragment>
        <MainNavigation />
        <main className="w-1/3 mx-auto p-4 border">{props.children}</main>
    </Fragment>
)
}

export default Layout