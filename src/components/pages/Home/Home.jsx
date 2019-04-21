import React from 'react';
import { ThemesList } from '../../widgets';
import { Headline, SubHeadline } from '../../elements';

const displayName = 'Home';

function Home() {
  return (
    <div>
      <Headline>Themes</Headline>
      <SubHeadline>Created by yourself</SubHeadline>
      <ThemesList />
    </div>
  );
}

Home.displayName = displayName;

export default Home;
