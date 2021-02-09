import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {reduxFirestore, getFirestore} from "redux-firestore";
import {getFirebase, createFirebaseInstance, ReactReduxFirebaseProvider} from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(
            {
                getFirebase,
                getFirestore
            })
        ),
        reduxFirestore(firebase, fbConfig),
    )
);

const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirebaseInstance
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App/>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);
reportWebVitals();
