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
	const API_URL = 'http://localhost:3500/items';

	const [items, setItems] = useState([]);
	const [newItem, setNewItem] = useState('');
	const [search, setSearch] = useState('');
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(API_URL);
				if (!response.ok) throw Error("Did not receive expected data.");
				const listItems = await response.json();
				setItems(listItems);
				setFetchError(null);
			} catch (err) {
				setFetchError(err.message);
			} finally {
				setIsLoading(false);
			}
		}

		// to simulate API response time
		setTimeout(() => {
			(async () => await fetchItems())();
		}, 2000);
	}, []);

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
							<main>
								{isLoading && <p style={{ color: "red", display: "flex", alignItems: "center", justifyContent: "center" }}>Loading items...</p>}
								{fetchError && <p style={{ color: "red", display: "flex", alignItems: "center", justifyContent: "center" }}>{`Error: ${fetchError}`}</p>}
								{!fetchError && !isLoading &&
									<ListContent
										items={items.filter((item) =>
											item.description
												.toLowerCase()
												.includes(search.toLowerCase())
										)}
										handleCheck={handleCheck}
										handleDelete={handleDelete}
									/>
								}
							</main>
							<Footer length={items.length} />
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
