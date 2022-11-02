import React from "react";
import '@aws-amplify/ui-react/styles.css';

import "normalize.css";
import "../styles/globals.css";

import { Provider } from "react-redux";


import Layout from "../modules/Layout";
import store from "../modules/store";

import { Amplify} from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </Provider>
  );
}

export default MyApp;