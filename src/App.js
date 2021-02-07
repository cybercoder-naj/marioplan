import React, {Component} from "react/cjs/react.production.min";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/layout/NavBar";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
