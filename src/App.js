import "./App.css";
import { Fragment } from "react";
import MainHeader from "./components/MainHeader";
import { Route } from "react-router-dom";
import Sun from "./pages/Sun";
import Moon from "./pages/Moon";

function App() {
    return (
        <Fragment>
            <MainHeader />
            <Route path='/sun'>
                <Sun />
            </Route>
            <Route path="/moon">
                <Moon />
            </Route>
        </Fragment>
    );
}

export default App;
