import React from 'react';
import ThemesList from 'components/widgets';

const displayName = 'Home';

function Home() {
  return (
    <div>
      <h2 style={{ marginBottom: 0 }}>Themes</h2>
      <h3 style={{ marginTop: 0 }}>Created by yourself</h3>
      <ThemesList />
    </div>
  );
}

Home.displayName = displayName;

export default Home;
