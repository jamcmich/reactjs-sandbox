import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
	const inputRef = useRef();

	return (
		<div className='AddItem'>
			<form className='form-additem' onSubmit={handleSubmit}>
				<label htmlFor='addItem'>Add Item</label>
				<input
					autoFocus
					ref={inputRef}
					id='addItem'
					type='text'
					placeholder='Item name...'
					required
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
				/>

				<button
					type='submit'
					aria-label='Add Item'
					onClick={() => inputRef.current.focus()}
				>
					<AiOutlinePlus className='icon-plus' />
				</button>
			</form>
		</div>
	);
};

export default AddItem;
