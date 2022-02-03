import { React, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const ListsKeys = () => {
	const [items, setItems] = useState([
		{
			id: 1,
			checked: true,
			description: 'Cashews',
		},
		{
			id: 2,
			checked: false,
			description: 'Potato Chips',
		},
		{
			id: 3,
			checked: false,
			description: 'Almond Milk',
		},
	]);

	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItems(listItems);
		localStorage.setItem('shoppinglist', JSON.stringify(listItems));
	};

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);
		localStorage.setItem('shoppinglist', JSON.stringify(listItems));
	};

	return (
		<main className='ListsKeys'>
			{items.length ? (
				<ul>
					{items.map((item) => (
						<li className='list-item' key={item.id}>
							<input
								type='checkbox'
								onChange={() => handleCheck(item.id)}
								checked={item.checked}
							/>
							<label
								style={
									item.checked
										? { textDecoration: 'line-through' }
										: null
								}
								onDoubleClick={() => handleCheck(item.id)}
							>
								{item.description}
							</label>
							<FaTrashAlt
								onClick={() => handleDelete(item.id)}
								className='icon-trash'
								role='button'
								tabIndex='0'
							/>
						</li>
					))}
				</ul>
			) : (
				<p style={{ marginTop: '2rem' }}>Your list is empty.</p>
			)}
		</main>
	);
};

export default ListsKeys;
