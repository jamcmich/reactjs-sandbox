import { Header, Content, Footer, ListsKeys } from './components/Components.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/examples/usestate'
					element={
						<div>
							<Header title={'Header'}/>
							<Content />
							<Footer />
						</div>
					}
				/>
				<Route
					path='/examples/lists-keys'
					element={
						<div>
							<Header title={'Groceries'}/>
							<ListsKeys />
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
