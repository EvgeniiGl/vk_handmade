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

const PanelItem = props => {
    const {state, dispatch} = useContext(Context)

    const setIndicators = (e, data) => {
        dispatch({
            type: 'setIndicators',
            payload: {
                data: data,
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

    const buttons = Object.keys(props.types).map((key) => <BtnOutline key={key} handleClick={(e) => setIndicators(e, {[props.id]:key})}
                                                                      data_to={props.to_id}
                                                                      active={state.indicators[props.id] === key}>
        {props.types[key]}
    </BtnOutline>)
    return <Panel id={props.id}>
        {props.withHeader && <PanelHeader left={
            <HeaderButton onClick={go} data-to={props.back_id}>
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
        </PanelHeader>}
        <Div className='wrapper bg-gray'>
            <Div>{props.title}</Div>
            {buttons}
        </Div>
    </Panel>
}

PanelItem.propTypes = {
    id: PropTypes.string.isRequired,
    withHeader: PropTypes.bool,
    back_id: PropTypes.string,
    to_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    types: PropTypes.objectOf(PropTypes.string)
};

export default PanelItem;
