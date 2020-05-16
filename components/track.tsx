import { FC } from 'react';

interface IProps {
    imageURL: string,
    name: string,
    artists: [],
    link: string
};

const Track: FC<IProps> = ({ name, imageURL, artists, link }) => (
    <div>
        <a href={link}>
            <img src={imageURL} className="m-auto w-12/12" />
            <span className="text-white block text-center text-4xl">{name}</span>
        </a>
        <span className="text-white block text-center text-xl">{artists.map(({ name }) => name).join(", ")}</span>
    </div>
);

export default Track;