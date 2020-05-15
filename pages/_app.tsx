import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import '../styles/main.css';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Jost&display=swap" rel="stylesheet" />
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}

export default MyApp;