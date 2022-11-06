import React from "react";
import '@aws-amplify/ui-react/styles.css';

import "normalize.css";
import "../styles/globals.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";


import Layout from "../modules/Layout";
import store, { persistor } from "../modules/store";

import { Amplify} from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
    </Provider>
  );
}

export default MyApp;