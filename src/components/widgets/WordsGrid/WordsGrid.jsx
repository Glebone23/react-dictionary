import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const displayName = 'WordsGrid';

function WordsGrid({ text }) {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} md={6}>
        <div>
          <List>
            <ListItem>
              <ListItemText primary={text} />
            </ListItem>
          </List>
        </div>
      </Grid>
    </Grid>
  );
}

WordsGrid.displayName = displayName;

export default WordsGrid;
