import React, {useEffect, useReducer} from 'react'
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import reducer from './reducer'
import connect from '@vkontakte/vk-connect';


import Home from './panels/home';
import Whom from './panels/whom/';
import WhoHave from "./panels/who_have";

import {Context} from './context'
import Age from "./panels/age";
import ListProducts from "./panels/list_products";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";

const initialState = {
	activePanel: 'home',
	fetchedUser: null,
	popout: null,
	indicators: {
		sex: null,
		relation: null,
		age: null
	}
}

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// const go =  e => {
	// 	 dispatch({
	// 		type: 'setActivePanel',
	// 		payload: {
	// 			activePanel:e.currentTarget.dataset.to,
	// 		}
	// 	})
	// };
	//
	const setUser = user => {
		dispatch({
			type: 'setUser',
			payload: {
				fetchedUser: user,
				popout: null,
			}
		})
	};

	//get user info
	useEffect(() => {
		dispatch({
			type: 'setPopout',
			payload: <ScreenSpinner size='large'/>
		})
		connect.subscribe(({detail: {type, data}}) => {
				if (type === 'VKWebAppUpdateConfig') {
					const schemeAttribute = document.createAttribute('scheme');
					console.log('schemeAttribute-- ',schemeAttribute);
				}
			}
		);
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
		}
		fetchData();
	}, []);

console.log('user-- ',state.fetchedUser);
	return (
		<Context.Provider value={{
			state, dispatch
		}}>
			<div className="container">
				<View activePanel={state.activePanel} popout={state.popout}>
					<Home id='home' fetchedUser={state.fetchedUser}/>
					<Whom id='whom'/>
					<WhoHave id='who_have'/>
					<Age id='age'/>
					<ListProducts id='list_products'/>
				</View>
			</div>

		</Context.Provider>
	);
}

export default App;

