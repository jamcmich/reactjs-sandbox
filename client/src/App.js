import { React, useState, useEffect } from 'react';
import {
	Header,
	StateContent,
	ListContent,
	AddItem,
	SearchItem,
	Footer,
} from './components/Components.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	const [items, setItems] = useState(
		JSON.parse(localStorage.getItem('shoppinglist')) || []
	);
	const [newItem, setNewItem] = useState('');
	const [search, setSearch] = useState('');

	useEffect(() => {
		localStorage.setItem('shoppinglist', JSON.stringify(items));
	}, [items]);

	const addItem = (description) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const createNewItem = { id, checked: false, description };
		const listItems = [...items, createNewItem];
		setItems(listItems);
	};

	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItems(listItems);
	};

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) return;
		addItem(newItem);
		setNewItem('');
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/examples/state'
					element={
						<div>
							<Header />
							<StateContent />
							<Footer />
						</div>
					}
				/>
				<Route
					path='/examples/lists'
					element={
						<div>
							<Header title={'Groceries'} />
							<AddItem
								newItem={newItem}
								setNewItem={setNewItem}
								handleSubmit={handleSubmit}
							/>
							<SearchItem search={search} setSearch={setSearch} />
							<ListContent
								items={items.filter((item) =>
									item.description
										.toLowerCase()
										.includes(search.toLowerCase())
								)}
								handleCheck={handleCheck}
								handleDelete={handleDelete}
							/>
							<Footer length={items.length} />
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
