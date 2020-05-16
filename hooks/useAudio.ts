import { useState, useEffect } from 'react';

const useAudio = (url: string): [boolean, () => void] => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = (): void => { setPlaying(!playing) };

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    const returnData: [boolean, () => void] = [playing, toggle];
    return returnData;
};

export default useAudio;