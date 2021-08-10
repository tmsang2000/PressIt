import React, {useEffect} from 'react';
import Navigator from './navigation';
import {Provider} from 'react-redux';
import {store, persistor} from 'app/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Loading, PopUpNotification} from '@components';
import { LogBox } from 'react-native';

export default function App() {
    useEffect(() => {
        LogBox.ignoreLogs(['Setting a timer']);
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

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