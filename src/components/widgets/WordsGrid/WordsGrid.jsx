import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { GridWrapper, GridPaper } from './WordsGrid.styled';

const displayName = 'WordsGrid';

const propTypes = {
  text: PropTypes.string,
};

const defaultProps = {
  text: '',
};

function WordsGrid({ text }) {
  return (
    <GridWrapper container spacing={16}>
      <Grid item xs={12} md={6}>
        <div>
          <List>
            <GridPaper>
              <ListItemText primary={text} />
            </GridPaper>
          </List>
        </div>
      </Grid>
    </GridWrapper>
  );
}

WordsGrid.displayName = displayName;
WordsGrid.propTypes = propTypes;
WordsGrid.defaultProps = defaultProps;

export default WordsGrid;
