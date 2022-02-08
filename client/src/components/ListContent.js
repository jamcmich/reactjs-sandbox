import React from 'react';
import ItemList from './ItemList';

const ListContent = ({ items, handleCheck, handleDelete }) => {
	return (
		<main className='ListContent'>
			{items.length ? (
				<ItemList
					items={items}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
			) : (
				<p style={{ marginTop: '2rem' }}>Your list is empty.</p>
			)}
		</main>
	);
};

export default ListContent;
