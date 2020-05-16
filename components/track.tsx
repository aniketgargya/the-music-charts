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
            <img src={imageURL} className={`m-auto w-12/12 mb-4 ${preview_url && "cursor-pointer"}`} />

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'max-content 1fr max-content',
                gridColumnGap: '0.5rem'
            }}>
                {<img src="/tiktok.png" className={`rounded-full w-8 inline-block mt-2 ${tiktokSong || "opacity-0"}`} />}
                <a href={link}>
                    <span className="text-white block text-center text-xl xs:text-3xl">{name}</span>
                </a>
                {(<span className={`text-white mt-3 ${preview_url || "opacity-0"}`} onClick={preview_url && (() => {
                    toggle();
                })}>
                    {playing ? (
                        <svg version="1.1" width="40" height="40" viewBox="0 0 512 512">
                            <g>
                            </g>
                            <path d="M162.642 148.337h56.034v215.317h-56.034v-215.316z" fill="#ffffff" />
                            <path d="M293.356 148.337h56.002v215.317h-56.002v-215.316z" fill="#ffffff" />
                        </svg>
                    ) : (
                            <svg version="1.1" width="40" height="40" viewBox="0 0 512 512">
                                <g>
                                </g>
                                <path d="M152.443 136.417l207.114 119.573-207.114 119.593z" fill="#ffffff" />
                            </svg>

                        )}
                </span>)}
            </div>
            <span className="text-white block text-center text-md xs:text-xls">{artists.map(({ name }) => name).join(", ")}</span>
        </div >
    )
};

export default Track;