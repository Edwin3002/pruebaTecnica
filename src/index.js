import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import AppRouters from './routers/AppRouters'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
     <Provider store={store}>
          <ChakraProvider>
               <AppRouters />
          </ChakraProvider>
     </Provider>,
     document.getElementById('root')
);

