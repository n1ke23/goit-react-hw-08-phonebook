import React, {
	Suspense, useEffect
} from "react"
import { useDispatch } from 'react-redux';
// import TodoList from "./TodoList/TodoList"
import { BrowserRouter, Switch } from 'react-router-dom';
import routesApp from "../routes/routesApp";
import authOperations from './../redux/Auth/authOperations'
import AppBar from "./AppBar/AppBar";
import Container from "./Container/Container";
import PrivateRoute from "./PrivateRouter/PrivateRouter";
import PublicRoute from "./PublicRoute/PublicRoute";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authOperations.getCurrentUser());
	}, [dispatch]);


	return (
		<>
			<BrowserRouter>
				<Container>
					<AppBar />
					<Suspense fallback={<h1>Loading...</h1>}>
						<Switch>
							{routesApp.map(route =>
								route.private ? (
									<PrivateRoute key={route.label} {...route} />
								) : (
										<PublicRoute key={route.label} {...route} />
									)
							)}
						</Switch>
					</Suspense>
				</Container>
			</BrowserRouter>
			{/* <TodoList /> */}
		</>
	)
}

export default App
