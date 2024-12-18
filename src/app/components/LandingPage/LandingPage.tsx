import React from 'react'
import TrelloLink from './TrelloLink/TrelloLink';
import FigmaLink from './FigmaLink/FigmaLink';
import NotionLink from './NotionLink/NotionLink';
import SelectProject from './SelectProject/SelectProject';
import GithubRepo from './GithubRepo/GithubRepo';
import Header from './Header/Header';

export const LandingPage = () => {
  return (
        <div className='flex flex-col gap-16 px-8'>
            <Header />
            <SelectProject />
            <GithubRepo />
            <TrelloLink />
            <FigmaLink />
            <NotionLink />
        </div>
    )
};
