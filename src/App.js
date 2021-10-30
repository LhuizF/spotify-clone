import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';
import GlobalStyle from './style/GlobalStyles';
import { store, persistor } from './store';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Routes />
                    <GlobalStyle />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
