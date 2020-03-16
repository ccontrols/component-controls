import ArrowButton from '../../components/button-default-arrow-func';
import { Button } from '../../components/button-named-arrow-func';

export default {
  title: 'Story',
};

export const story = () => 'hello';

story.story = {
  component: ArrowButton,
  subcomponents: { 'My Button Tab': Button },
};
