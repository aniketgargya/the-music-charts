import { FC } from 'react';

interface IProps {
    width: number,
    height: number
}

const Pause: FC<IProps> = ({ width, height }) => (
    <svg version="1.1" width={width} height={height} viewBox="0 0 512 512">
        <g>
        </g>
        <path d="M152.443 136.417l207.114 119.573-207.114 119.593z" fill="#ffffff" />
    </svg>
);

export default Pause;