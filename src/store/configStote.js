import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    return {
        ...createStore(
            rootReducer,
            composeEnhancers(applyMiddleware(sagaMiddleware))
        ),
        runSaga: sagaMiddleware.run(rootSaga)
    }
}

export default ConfigStore;