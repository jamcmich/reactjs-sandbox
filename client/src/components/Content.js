import React from 'react';

const Content = () => {
	const handleClick = () => {
		console.log('You clicked button 1.');
	};

	const handleClick2 = (button) => {
		console.log(`You clicked ${button}.`);
	};

	const handleClick3 = (e) => {
		console.log(`You clicked ${e.target.innerText}.`);
	};

	var count = 0;
	const counter = () => {
		count += 2;
		console.log(`You've clicked me ${count} times!`);
	};

	return (
		<main className='Content'>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Necessitatibus iste placeat similique enim, dolores praesentium
				ut accusantium maiores dicta veniam ipsum laborum totam quo
				provident in voluptas quas repellat soluta?
			</p>

			<button className='Content--button' onClick={handleClick}>
				Button 1
			</button>

			<button
				className='Content--button'
				onClick={() => handleClick2('button 2')}
			>
				Button 2
			</button>

			<button
				className='Content--button'
				onClick={(e) => handleClick3(e)}
			>
				Click Me!
			</button>

			<p className='Content--double-click' onDoubleClick={counter}>
				Double Click Me!
			</p>
		</main>
	);
};

export default Content;
