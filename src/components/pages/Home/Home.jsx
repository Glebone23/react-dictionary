import React from 'react';
import { ThemesList } from 'components/widgets';
import { Headline, SubHeadline } from 'components/elements';

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
