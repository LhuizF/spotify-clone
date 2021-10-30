import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import token from '../pages/token';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/token/" component={token} />

            {/* <Route path="*" component={Page404} /> */}
        </Switch>
    );
}
