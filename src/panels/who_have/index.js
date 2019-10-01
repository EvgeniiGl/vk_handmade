import React, {useContext} from 'react'
import {Context} from './../../context'
import PropTypes from 'prop-types';
import {IOS, platform} from '@vkontakte/vkui';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import './../../style.css';
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import BtnOutline from "../../core/BtnOutline";

const osName = platform();

const WhoHave = props => {
    const {state, dispatch} = useContext(Context)
    const setRelation = (e, relation) => {
        dispatch({
            type: 'setRelation',
            payload: {
                relation: relation,
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

    return <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={go} data-to="sex">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
        </PanelHeader>
        <Div className='wrapper bg-gray'>
            <Div>Кем приходится?</Div>
            <BtnOutline handleClick={(e) => setRelation(e, 'relative')} data_to="age"
                        active={state.indicators.relation === 'relative'}>
                Родственник
            </BtnOutline>
            <BtnOutline handleClick={(e) => setRelation(e, 'friend')} data_to="age"
                        active={state.indicators.relation === 'friend'}>
                Друг
            </BtnOutline>
            <BtnOutline handleClick={(e) => setRelation(e, 'colleague')} data_to="age"
                        active={state.indicators.relation === 'colleague'}>
                Колега
            </BtnOutline>
            <BtnOutline handleClick={(e) => setRelation(e, 'couple')} data_to="age"
                        active={state.indicators.relation === 'couple'}>
                Пара
            </BtnOutline>
            <BtnOutline handleClick={(e) => setRelation(e, 'other')} data_to="age"
                        active={state.indicators.relation === 'other'}>
                Другое
            </BtnOutline>
        </Div>
    </Panel>
}

WhoHave.propTypes = {
    id: PropTypes.string.isRequired,
    // dispatch: PropTypes.func.isRequired,
};

export default WhoHave;
