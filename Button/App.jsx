import { useState } from 'react';
import Button from './Button';

const App = () => {

  const [isDisabled,setIsDisabled] = useState(false)
  const handleClick = () => {
    alert('Button clicked!');
    setIsDisabled(true)
  };

  return (
    <div>
      <Button label="Click Me" onClick={handleClick} disabled={isDisabled}/>
    </div>
  );
};

export default App;
