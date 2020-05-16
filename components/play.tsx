import { FC } from 'react';

interface IProps {
    width: number,
    height: number
}

const Play: FC<IProps> = ({ width, height }) => (
    <svg version="1.1" width={width} height={height} viewBox="0 0 512 512">
        <g>
        </g>
        <path d="M162.642 148.337h56.034v215.317h-56.034v-215.316z" fill="#ffffff" />
        <path d="M293.356 148.337h56.002v215.317h-56.002v-215.316z" fill="#ffffff" />
    </svg>
);

export default Play;