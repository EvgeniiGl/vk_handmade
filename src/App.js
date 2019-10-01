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
import {getXLS, urlXlsxGoogle} from "./services/xlsx";
import http from "./services/http";
import PropTypes from "prop-types";
import PanelItem from "./panels/panel";

const initialState = {
	activePanel: 'home',
	fetchedUser: null,
	popout: null,
	error:'',
	types:{
		how: {},
	},
	products:{},
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

	};

	//get user info
	useEffect(() => {
		dispatch({
			type: 'setPopout',
			payload: {
				popout: <ScreenSpinner size='large'/>,
			}
		})
		connect.subscribe(({detail: {type, data}}) => {
				if (type === 'VKWebAppUpdateConfig') {
					const schemeAttribute = document.createAttribute('scheme');
					console.log('schemeAttribute-- ',schemeAttribute);
				}
			}
		);
		async function fetchUser() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			dispatch({
				type: 'setUser',
				payload: {
					fetchedUser: user,
					popout: null,
				}
			})
		}
		fetchUser();
	}, []);

	//get characteristics of the products from xslx
	useEffect(() => {
		dispatch({
			type: 'setPopout',
			payload: {
				popout: <ScreenSpinner size='large'/>,
			}
		})
		async function fetchData() {
			const data = await getXLS();
			const keys = Object.keys(data.types[0]);
			let types = {};
			keys.forEach((key)=> {
				types[key] = {}
			})
			data.types.forEach((type)=>{
				keys.forEach((key)=> {
					if(type[key] !== undefined)
					types[key][type.id] = type[key]
				})
			})
			dispatch({
				type: 'setTypes',
				payload: {
					types: types,
					popout: null,
				}
			})
			dispatch({
				type: 'setProducts',
				payload: {
					products: data.products,
					popout: null,
				}
			})
			console.log('log-- ',types);
		}
		fetchData();
	}, []);

	return (
		<Context.Provider value={{
			state, dispatch
		}}>
			<div className="container">
				<View activePanel={state.activePanel} popout={state.popout}>
					<Home id='home' fetchedUser={state.fetchedUser}/>
					{/*<Whom id='sex'/>*/}
					{/*<WhoHave id='who_have'/>*/}
					{/*<Age id='age'/>*/}
					{/*<ListProducts id='list_products'/>*/}
<PanelItem id={'how'} to_id={'sex'} title={'Как подобрать подарок?'} action={'setHow'} types={state.types.how} />
{/*<PanelItem id={'sex'} to_id={'sex'} title={''} action={'setHow'} />*/}
				</View>
				<span className={'error'}>{state.error}</span>
			</div>

		</Context.Provider>
	);
}

export default App;
// panel_id: PropTypes.string.isRequired,
// 	withHeader:PropTypes.bool,
// 	back_id:PropTypes.string,
// 	to_id:PropTypes.string.isRequired,
// 	title:PropTypes.string.isRequired,
// 	action:PropTypes.string.isRequired,
// 	name:PropTypes.string.isRequired,
// 	types:PropTypes.objectOf(PropTypes.string)


// {id: {…}, how: {…}, sex: {…}, age: {…}, relation: {…}, …}
// age: {1: "от 0 до 10 лет", 2: "от 11 до 16 лет", 3: "от 17 до 20 лет", 4: "от 21 до 30 лет", 5: "от 30 и старше"}
// event: {1: "На выписку", 2: "На рождение ребенка", 3: "Юбилей", 4: "День рождения", 5: "Корпоратив", 6: "Новоселье", 7: "Годовщина", 8: "Выпускной", 9: "Мальчишник"}
// hobby: {1: "Книголюбу", 2: "Музыканту", 3: "Охотнику", 4: "Спортсмену", 5: "Автомобилисту", 6: "Кулинару", 7: "Рукодельнику", 8: "Путешественнику", 9: "Садоводу", 10: "Любителю загородного отдыха", 11: "Туристу", 12: "Айтишнику", 13: "Футбольному болельщику", 14: "Рыбаку", 15: "Энтомологу"}
// how: {1: "По увлечениям", 2: "По профессии", 3: "Родственнику", 4: "Другу \ подруге", 5: "На событие"}
// id: {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15}
// profession: {1: "Доктору", 2: "Юристу", 3: "Учителю", 4: "Шефу", 5: "Бизнесмену", 6: "Коллеге", 7: "Айтишнику", 8: "Строителю", 9: "Военному", 10: "Моряку"}
// relation: {1: "Отец", 2: "Дедушка", 3: "Брат", 4: "Племянник", 5: "Дядя", 6: "Сын", 7: "Муж", 8: "Мать", 9: "Бабушка", 10: "Сестра", 11: "Племянница", 12: "Тётя", 13: "Дочь", 14: "Жена"}
// sex: {1: "Мужчине", 2: "Женщине"}
// __proto__: Object