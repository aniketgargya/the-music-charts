import { FC, useEffect } from 'react';
import { useAudio } from '../hooks';

interface IProps {
    imageURL: string,
    name: string,
    artists: [],
    link: string,
    preview_url?: string
    tiktokSong: boolean
};

const Track: FC<IProps> = ({ name, imageURL, artists, link, preview_url, tiktokSong }) => {
    let playing, toggle;
    if (preview_url) [playing, toggle] = useAudio(preview_url);
    return (
        <div>
            <img src={imageURL} className={`m-auto w-12/12 ${preview_url && "cursor-pointer"}`} onClick={preview_url && (() => {
                toggle();
            })} />
            <a href={link}>
                <span className="text-white block text-center text-4xl">{tiktokSong && <img src="/tiktok.png" className="rounded-full w-8 inline-block mr-4" />}{name}</span>
            </a>
            <span className="text-white block text-center text-xl">{artists.map(({ name }) => name).join(", ")}</span>
        </div>
    )
};

export default Track;