import { Switch, Route } from "react-router";
import Confraternization from "../pages/confraternization";
import Graduation from "../pages/graduation";
import Home from "../pages/home";
import Wedding from "../pages/wedding";

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <Home></Home>
            </Route>
            <Route path='/confraternization' exact>
                <Confraternization></Confraternization>
            </Route>
            <Route path='/graduation' exact>
                <Graduation></Graduation>
            </Route>
            <Route path='/wedding' exact>
                <Wedding></Wedding>
            </Route>
        </Switch>
    )
}

export default Routes;