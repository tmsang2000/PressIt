import React from 'react';
import Navigator from './navigation';
import {Provider} from 'react-redux';
import {store, persistor} from 'app/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Loading, PopUpNotification} from '@components';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Navigator />
                <PopUpNotification />
                <Loading />
            </PersistGate>
        </Provider>
    )
}