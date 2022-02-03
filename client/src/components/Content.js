import { React, useState } from 'react';

const Content = () => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		console.log('You clicked button 1.');
		setCount(count + 1);
	};

	const handleClick2 = (button) => {
		console.log(`You clicked ${button}.`);
		setCount(count + 1);
	};

	const handleClick3 = (e) => {
		console.log(`You clicked ${e.target.innerText}.`);
		setCount(count + 1);
	};

	var i = 0;
	const counter = () => {
		i += 2;
		alert(`You've clicked me ${i} times!`);
	};

	return (
		<main className='Content'>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Necessitatibus iste placeat similique enim, dolores praesentium
				ut accusantium maiores dicta veniam ipsum laborum totam quo
				provident in voluptas quas repellat soluta?
			</p>

			<button className='button' onClick={handleClick}>
				Button 1
			</button>

			<button
				className='button'
				onClick={() => handleClick2('button 2')}
			>
				Button 2
			</button>

			<button
				className='button'
				onClick={(e) => handleClick3(e)}
			>
				Click Me!
			</button>

			<p className='double-click' onDoubleClick={counter}>
				Double Click Me!
			</p>

			<h3>Buttons clicked {count} times.</h3>
		</main>
	);
};

export default Content;
