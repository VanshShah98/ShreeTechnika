import FeatureCard from './Card';

import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { InfiniteSlider } from './swiper';
// made responsive
export default function Slide2() {
    return (
        <>
            <section id="Our Services">
                <div className='bg-[#0F0F0F] flex flex-col pr-8 lg:pr-0'>
                    <div className=' flex flex-col lg:h-fit lg:pl-16 pt-52 md:pl-56 md:flex-row mt-10 pt-8 pl-12'>
                        <InfiniteSlider />
                    </div>
                </div>
            </section>
        </>
    );
}
