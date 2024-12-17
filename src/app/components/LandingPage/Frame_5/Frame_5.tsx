'use client'

import React, { useState } from 'react';
import CopyToClip from '../../../../../public/assets/Copy-Clip.svg';
import ExternalLink from '../../../../../public/assets/External-Link.svg';
import Image from 'next/image';
import Link from 'next/link';

const Frame_5 = () => {
    const [figmaLink] = useState("https://figma.com/invite/b/NiM6bRy4/ATTI2ce57e4e2588ac7b0f94270cfds2sd");

    // Copy the link to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(figmaLink);
        alert("Link copied Successfully!");
    };

  return (
        <div className='flex flex-col gap-8'>
            <span className="text-xl leading-8 font-semibold">3. Join Figma</span>
            <form action="">
                <div className="flex items-center gap-3">
                    <input type="text" value={figmaLink} className="border w-1/2 text-[#1F2937] rounded-md p-2 text-base leading-6 font-normal shadow-sm"  />
                    {/* Copy Button */}
                    <button onClick={copyToClipboard} aria-label="Copy Link to Clipboard" className="border-2 border-[#374151] p-2 rounded-3xl shadow-sm">
                        <Image src={CopyToClip} alt='Copy to Clip Icon' className='' />
                    </button>
                     {/* External Link Button */}
                    <Link href={figmaLink} target="_blank" rel="noopener noreferrer" aria-label="Open Link in New Tab" className="border-2 border-[#374151] p-2 rounded-3xl shadow-sm">
                        <Image src={ExternalLink} alt='External Link Icon' className='' />
                    </Link>
                    
                    
                </div>
            </form>
        </div>
    )
};

export default Frame_5;
