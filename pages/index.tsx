import { GetServerSideProps } from 'next';
import { Track } from '../components';
import { useEffect, MutableRefObject, useState } from 'react';
import { useRef, useContext, FC } from 'react';
import { SpotifyTokenContext } from '../contexts/';
import axios from 'axios';

const Index: FC<{}> = () => {
    const spotifyToken: MutableRefObject<string> = useRef('');
    const [data, setData] = useState(undefined);

    const signIn = () => {
        window.location.replace(`https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=token`);
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
            <h1 className="font-light uppercase text-center text-2xl xs:text-4xl md:text-5xl lg:text-6xl my-4 md:my-8" style={{
                backgroundImage: "linear-gradient(to left, #00fc43, #007337)",
                backgroundSize: "100%",
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent"
            }}>these are today's hits</h1>
            <div className="grid mx-auto grid-cols-1 w-3/5 max-w-sm row-gap-4 lg:max-w-none lg:w-4/5 lg:grid-cols-3 lg:col-gap-16 lg:row-gap-8">
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