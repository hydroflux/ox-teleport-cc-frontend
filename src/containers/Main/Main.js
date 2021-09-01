import { Route } from "react-router-dom"

import CityContainer from "./CityContainer/CityContainer"
import CityList from "./CityList/CityList"

export default function Main({ cities }) {
    return (
        <main>
            <Route exact path="/" render={ routerProps => {
                return <CityList cities={cities} {...routerProps} />
            }} />
            <Route exact path="/search" render={ routerProps => {
                return <CityList cities={cities} {...routerProps} />
            }} />
            <Route exact path="/show" render={ routerProps => {
                return <CityContainer {...routerProps} />
            }} />
        </main>
    )
}
