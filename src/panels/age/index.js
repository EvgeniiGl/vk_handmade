import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {IOS, platform} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import './../../style.css';
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import BtnOutline from "../../core/BtnOutline";
import {Context} from "../../context";

const osName = platform();

const Age = props => {
    const {state, dispatch} = useContext(Context)

    const setAge = (e, age) => {
        console.log('log-- age',age);
        dispatch({
            type: 'setAge',
            payload: {
                age: age,
                activePanel: e.currentTarget.dataset.to,
            }
        })
    };
    const go = e => {
        dispatch({
            type: 'setActivePanel',
            payload: {
                activePanel: e.currentTarget.dataset.to,
            }
        })
    };
console.log('loage',state.indicators.age);
    return <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={go} data-to="who_have">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
        </PanelHeader>
        <Div className='wrapper bg-gray'>
            <Div>Сколько лет?</Div>
            <BtnOutline handleClick={(e) => setAge(e, 0)} data_to="list_products" active={state.indicators.age === 0}>
                от 0 до 10 лет
            </BtnOutline>
            <BtnOutline handleClick={(e) => setAge(e, 1)} data_to="list_products" active={state.indicators.age === 1}>
                от 11 до 16 лет
            </BtnOutline>
            <BtnOutline handleClick={(e) => setAge(e, 2)} data_to="list_products" active={state.indicators.age === 2}>
                от 17 до 20 лет
            </BtnOutline>
            <BtnOutline handleClick={(e) => setAge(e, 3)} data_to="list_products" active={state.indicators.age === 3}>
                от 21 до 30 лет
            </BtnOutline>
            <BtnOutline handleClick={(e) => setAge(e, 4)} data_to="list_products" active={state.indicators.age === 4}>
                от 30 и старше
            </BtnOutline>
        </Div>
    </Panel>
}

Age.propTypes = {
    id: PropTypes.string.isRequired,
    // go: PropTypes.func.isRequired,
};

export default Age;
