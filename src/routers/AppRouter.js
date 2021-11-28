import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Nav = () => (
    // <React.Fragment>
    //     <nav>
    //         <Link to="/"> Home </Link> |
    //         <Link to="/contact"> Contact </Link> |
    //         <Link to="/products"> Products </Link> |
    //     </nav>
    // </React.Fragment>


    <React.Fragment>
        <nav>
            <NavLink exact to="/" activeClassName="active" > Home </NavLink> |
            <NavLink to="/contact#email" activeClassName="active" > Contact </NavLink> |
            <NavLink exact to="/products" activeClassName="active" > Products </NavLink> |
            <NavLink to="/products/12?orderby=price" activeClassName="active" > Products  Details </NavLink> |
        </nav>
    </React.Fragment>

);

const Header = () => (
    <React.Fragment>
        <h2>Github Finder</h2>
    </React.Fragment>
);


const HomePage = () => (
    <div>Home Page</div>
);

const ContactPage = (props) => {
    console.log(props)
    return (
        <div> Contact Page </div>
    )
};

const ProductsPage = () => (
    <div> Products Page </div>
);

const NotFoundPage = () => (
    <div> 404 Page </div>
);
const ProductsDetailsPage = (props) => {
    console.log(props);
    return (
        <React.Fragment>
            <div> ProductsDetailsPage </div>
            <div> {props.match.params.id} </div>
        </React.Fragment>
    )
}

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Nav />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact" component={ContactPage} />
            <Route exact path="/products" component={ProductsPage} />
            <Route path="/products/:id" component={ProductsDetailsPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);
export default AppRouter