import { FC, useEffect } from 'react';
import { useAudio } from '../hooks';
import { Play, Pause } from '.';

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
            <img src={imageURL} className={`m-auto w-12/12 mb-4 ${preview_url && "cursor-pointer"}`} />

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'max-content 1fr max-content',
                gridColumnGap: '0.5rem',
                alignItems: 'center'
            }}>
                {<img src="/tiktok.png" className={`rounded-full w-8 inline-block ${tiktokSong || "opacity-0"}`} />}
                <a href={link}>
                    <span className="text-white block text-center text-xl xs:text-3xl">{name}</span>
                </a>
                {(<span className={`text-white ${preview_url || "opacity-0"}`} onClick={preview_url && (() => {
                    toggle();
                })}>
                    {playing ? <Play width={40} height={40} /> : <Pause width={40} height={40} />}
                </span>)}
            </div>
            <span className="text-white block text-center text-md xs:text-xls">{artists.map(({ name }) => name).join(", ")}</span>
        </div >
    )
};

export default Track;