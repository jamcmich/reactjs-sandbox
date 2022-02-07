import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleCheck, handleDelete }) => {
	return (
		<li className='list-item' key={item.id}>
			<input
				type='checkbox'
				onChange={() => handleCheck(item.id)}
				checked={item.checked}
			/>
			<label
				style={item.checked ? { textDecoration: 'line-through' } : null}
				onDoubleClick={() => handleCheck(item.id)}
			>
				{item.description}
			</label>
			<FaTrashAlt
				onClick={() => handleDelete(item.id)}
				className='icon-trash'
				role='button'
				tabIndex='0'
				aria-label={`Delete ${item.item}`}
			/>
		</li>
	);
};

export default LineItem;
