import useCounter from '../hooks/use-counter';

import Card from './Card';
// some changes were made
const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
