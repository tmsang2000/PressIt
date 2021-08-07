import React from 'react';
import Navigator from './navigation';
import {Provider} from 'react-redux';
import {store, persistor} from 'app/store';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Navigator />
            </PersistGate>
        </Provider>
    )
}