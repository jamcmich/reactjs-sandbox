import React from 'react';
import ItemList from './ItemList';

const ListContent = ({ items, handleCheck, handleDelete }) => {
	return (
		<div className='ListContent'>
			{items.length ? (
				<ItemList
					items={items}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
			) : (
				<p style={{ marginTop: '2rem' }}>Your list is empty.</p>
			)}
		</div>
	);
};

export default ListContent;
