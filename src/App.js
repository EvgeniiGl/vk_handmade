import React, { useReducer} from 'react'
// import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
// import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import reducer from './reducer'

import Home from './panels/home';
import Whom from './panels/whom/';
import WhoHave from "./panels/who_have";

import {Context} from './context'
import Age from "./panels/age";
import ListProducts from "./panels/list_products";

const initialState= {
	activePanel: 'home',
	fetchedUser: null,
	popout: null,
	indicators:{
		sex:null,
		relation:null,
		age:null
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
	// const setSex = e => {
	// 	dispatch({
	// 		type: 'setSex',
	// 		payload: {
	// 			sex:e.currentTarget.dataset.sex,
	// 			activePanel:e.currentTarget.dataset.to,
	// 		}
	// 	})
	// };

	return (
		<Context.Provider value={{
			state, dispatch
		}}>
		<div className="container">
			<View activePanel={state.activePanel} popout={state.popout}>
				<Home id='home' fetchedUser={state.fetchedUser} />
				<Whom id='whom' />
				<WhoHave id='who_have'  />
				<Age id='age' />
				<ListProducts id='list_products' />
			</View>
		</div>

		</Context.Provider>
	);
}

export default App;

