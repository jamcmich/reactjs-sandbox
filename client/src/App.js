import { useState } from 'react';
import { Header, Content, Footer, ListsKeys } from './components/Components.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
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
		<BrowserRouter>
			<Routes>
				<Route
					path='/examples/state'
					element={
						<div>
							<Header />
							<Content />
							<Footer />
						</div>
					}
				/>
				<Route
					path='/examples/lists'
					element={
						<div>
							<Header title={'Groceries'} />
							<ListsKeys
								items={items}
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
