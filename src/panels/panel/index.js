import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {IOS, platform} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import './../../style.css';
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
                data: {[props.id]: null},
                activePanel: e.currentTarget.dataset.to,
            }
        })
    };

    const buttons = Object.values(props.types).map((val) => <BtnOutline key={val}
                                                                        handleClick={(e) => setIndicators(e, {[props.id]: val})}
                                                                        data_to={props.to_id}
                                                                        active={state.indicators[props.id] === val}>
        {val}
    </BtnOutline>)
    const refCallback = element => {
        if (element) {
            const root = document.getElementById('root')
            const isOverflow = element.getBoundingClientRect().height > root.scrollHeight
            if (state.isOverflow !== isOverflow && state.panelOverflow !== state.activePanel) {
                dispatch({
                    type: 'setOverflow',
                    payload: {
                        isOverflow: isOverflow,
                        panelOverflow: state.activePanel
                    }
                })
            }
        }
    };

    return <div className={'wrapper'} id={props.id}>
        {/*<PanelHeader className={'header'} left={*/}
        {/*    <HeaderButton onClick={go} data-to={props.back_id}>*/}
        {/*        {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}*/}
        {/*    </HeaderButton>}*/}
        {/*>*/}
        {/*    <Div>{props.title}</Div>*/}
        {/*</PanelHeader>*/}
        <div className={'panel'}>
            <div className={'header'}>
                <button className={'btn-back'} onClick={go} data-to={props.back_id}>
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </button>
                <div className={'header-title'}>{props.title}</div>
            </div>

            <div className='content'>
                <div className={'btn-wrap'} ref={refCallback}>

                    {buttons}
                </div>
            </div>
        </div>
    </div>
}

PanelItem.propTypes = {
    id: PropTypes.string.isRequired,
    withHeader: PropTypes.bool,
    back_id: PropTypes.string,
    to_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired
};

export default PanelItem;
