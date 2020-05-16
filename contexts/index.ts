import { createContext } from 'react';

interface SpotifyTokenContextInterface {
    spotifyToken?: string,
    setSpotifyToken: (spotifyToken: string) => void
};
const SpotifyTokenContext = createContext<SpotifyTokenContextInterface>({
    spotifyToken: undefined,
    setSpotifyToken: () => { }
});

export { SpotifyTokenContext };