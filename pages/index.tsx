import { GetServerSideProps } from 'next';
import dotenv from 'dotenv';
import { Track } from '../components';
import { useEffect, MutableRefObject, useState } from 'react';
import { useRef, useContext, FC } from 'react';
import { SpotifyTokenContext } from '../contexts/';
import axios from 'axios';

interface IProps {
    clientId: string,
    redirectURI: string
};

const Index: FC<IProps> = ({ clientId, redirectURI }) => {
    // const { spotifyToken, setSpotifyToken } = useContext(SpotifyTokenContext);
    const spotifyToken: MutableRefObject<string> = useRef('');
    const [data, setData] = useState(undefined);

    const signIn = () => {
        window.location.replace(`https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=token`);
    };

    const fetchData = async () => {
        try {
            const response = await axios.all([
                axios({
                    method: "GET",
                    url: "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF?limit=1000",
                    headers: {
                        "Authorization": `Bearer ${spotifyToken.current}`
                    }
                }),
                axios({
                    method: "GET",
                    url: "https://api.spotify.com/v1/playlists/65LdqYCLcsV0lJoxpeQ6fW?limit=1000",
                    headers: {
                        "Authorization": `Bearer ${spotifyToken.current}`
                    }
                })
            ]);

            console.log(response);
            setData(response);
        } catch {
            signIn();
        }
    };


    useEffect(() => {
        const hash: any = {};
        window.location.hash
            .substr(1)
            .split('&')
            .forEach(hashParameter => {
                const [key, value] = hashParameter.split("=");
                hash[key] = value;
            });
        if (!hash.access_token)
            signIn();
        else
            spotifyToken.current = hash.access_token;
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1 className="text-6xl text-green-700 font-light uppercase text-center mb-10">these are today's hits</h1>
            <div className="grid grid-cols-3 gap-24 mx-40">
                {
                    data &&
                    data[0].data.tracks.items.map(({ track: { id, name, artists, preview_url, album: { images }, external_urls: { spotify: link } } }) => {
                        const tiktokSong: boolean = data[1].data.tracks.items.some(({ track: { name: tiktokName } }) => name == tiktokName);
                        return <Track key={id} name={name} imageURL={images[0].url} artists={artists} link={link} preview_url={preview_url} tiktokSong={tiktokSong} />;
                    })
                }
            </div>
        </>
    );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async context => {
    dotenv.config();
    const { CLIENT_ID, REDIRECT_URI } = process.env;

    return { props: { clientId: CLIENT_ID, redirectURI: REDIRECT_URI } };
};