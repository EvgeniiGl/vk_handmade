import React, {useState, useEffect, useReducer} from 'react'
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import reducer from './reducer'

import Home from './panels/home';
import Whom from './panels/whom/';

export const Context = React.createContext();
const initialState= {
	activePanel: 'persik',
	fetchedUser: null,
	popout: null,
}

const App = () => {
	// const [activePanel, setActivePanel] = useState('persik');
	// const [fetchedUser, setUser] = useState(null);
	const [state, dispatch] = useReducer(reducer,initialState)
	// const [popout, setPopout] = useState(
	// 	null
	// 	// <ScreenSpinner size='large' />
	// 	);

	// useEffect(() => {
	// 	setState({ isLoading: false });
	//
	// }, []);
	//get user info
	// useEffect(() => {
	// 	dispatch({
	// 		type: 'setPopout',
	// 		payload: <ScreenSpinner size='large' />
	// 	})
	// 	connect.subscribe(({ detail: { type, data }}) => {
	// 		if (type === 'VKWebAppUpdateConfig') {
	// 			const schemeAttribute = document.createAttribute('scheme');
	// 			schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
	// 			document.body.attributes.setNamedItem(schemeAttribute);
	// 		}
	// 	});
	// 	async function fetchData() {
	// 		const user = await connect.sendPromise('VKWebAppGetUserInfo');
	// 		dispatch({
	// 			type: 'setUser',
	// 			payload: user
	// 		})
	// 	}
	// 	fetchData();
	// }, []);

	const go = async e => {
		console.log('go - ',e.currentTarget.dataset.to);
		await dispatch({
			type: 'setActivePanel',
			payload: e.currentTarget.dataset.to
		})
	};
console.log('log-- ',state.activePanel);
	return (
		<Context.Provider value={[state, dispatch]}>
			{state.activePanel}
		<View activePanel={state.activePanel} popout={state.popout}>
			<Home id='home' fetchedUser={state.fetchedUser} go={go} />
			<Whom id='persik' go={go} />
		</View>
		</Context.Provider>
	);
}

export default App;

