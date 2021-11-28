import React  from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Alert from './Alert'
import NotFound from './NotFound'
import About from './About'
import UserDetails from './UserDetails'
import Githubstate from '../context/github/githubState'
import Alertstate from '../context/alert/alertState'

const App = () => {

    return (
        <Githubstate>
            <Alertstate>
                <BrowserRouter>
                    <Navbar />
                    <Alert />
                    <Switch>
                        <Route exact path="/" component={Home}/>

                        <Route path="/about" component={About} />
                        <Route path="/user/:login" component={UserDetails} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Alertstate>
        </Githubstate>
    )

}

export default App