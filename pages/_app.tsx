import App from 'next/app';
import Head from 'next/head';

import { SpotifyTokenContext } from '../contexts/';
import '../styles/main.css';

class MyApp extends App {

    setSpotifyToken = (spotifyToken: string): void => {
        this.setState({ spotifyToken });
    };

    state = {
        spotifyToken: undefined,
        setSpotifyToken: this.setSpotifyToken
    };


    render() {
        const { Component, pageProps } = this.props;
        return (
            <SpotifyTokenContext.Provider value={this.state}>
                <>
                    <Head>

                    </Head>
                    <Component {...pageProps} />
                </>
            </SpotifyTokenContext.Provider>
        );
    }
}

export default MyApp;