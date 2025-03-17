export default function Button() {
	function handleClick() {
	  window.alert('You clicked me!');
	}
  
	return (
	  <button onClick={handleClick}>
		Click me
	  </button>
	);
  }
  