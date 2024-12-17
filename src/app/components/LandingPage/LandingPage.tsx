import React from 'react'
import Frame_3 from './Frame_3/Frame_3';
import Frame_7 from './Frame _7/Frame_7';
import Frame_8 from './Frame_8/Frame_8';
import Frame_4 from './Frame_4/Frame_4';
import Frame_5 from './Frame_5/Frame_5';
import Frame_6 from './Frame_6/Frame_6';
import JoinTrello from '../Project/ProjectSelector';

export const LandingPage = () => {
  return (
    <div className='flex flex-col gap-16 px-8'>
        <Frame_3 />
        <Frame_7 />
        <Frame_8 />
        <Frame_4 />
        <Frame_5 />
        <Frame_6 />
        <JoinTrello />
    </div>
  )
};
