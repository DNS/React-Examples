// custom component

import { useState } from 'react';

export default function Default() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
	<>
	  1: <Component1 arg1="Hello" arg2="World" arg3="ok">Value 1</Component1><br />
	  2: <Component1 arg1="Welcome to" arg2="America" arg3="other">Value 2</Component1><br />

	</>
  );
}

function Component1({arg1, arg2, arg3}) {
	var r = false;
	if (arg3.toLowerCase() === 'ok') r = true;

	return (
	<>
		{arg1} {arg2} <br />
		{r ? (
			<>Ok! <br /></>
		) : (
			<>Not Ok! <br /></>
		) }
		
		
	</>
	
  );

}

/*


*/