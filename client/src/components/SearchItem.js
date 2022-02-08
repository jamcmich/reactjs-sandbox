import React from 'react';

const SearchItem = ({ search, setSearch }) => {
	return (
		<div className='SearchItem'>
			<form className='form-search' onSubmit={(e) => e.preventDefault}>
				<label htmlFor='search'>Search</label>
				<input
					id='search'
					type='text'
					role='searchbox'
					placeholder='Search items'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default SearchItem;
