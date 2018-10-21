import { compose, setDisplayName } from 'recompose';
import ToLearn from './ToLearn';

export const enhance = compose(
  setDisplayName('ToLearnContainer'),
);

export default enhance(ToLearn);
