import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {IOS, platform, Button} from '@vkontakte/vkui';
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
                data: {[props.id]: null},
                activePanel: e.currentTarget.dataset.to,
            }
        })
    };
    //(props.id == 'event') && props.types.filter((val) => val !== 'Kорпоратив')
    const eventDis = ['На Свадьбу','Девишник','Свадьба']

    // const ageDis = (state.indicators.age === 'От 0 до 5 лет' ||
    //                 state.indicators.age === 'От 6 до 10 лет'
    // );

    const ageDis = !!['От 0 до 5 лет', 'От 6 до 10 лет'].find(age => age === state.indicators.age)
    //console.log(ageDis);
                   
    const types = (props.id == 'event') ? props.types.filter((val) => {
       return ageDis ? !eventDis.find((event)=> event === val) : val

    }) : props.types   

    console.log(types);
    const buttons = Object.values(types).map((val) => <BtnOutline key={val}
                                                                        handleClick={(e) => setIndicators(e, {[props.id]: val})}
                                                                        data_to={props.to_id}
                                                                        active={state.indicators[props.id] === val}>
        {val}
    </BtnOutline>)
    
    const refCallback = element => {
        if (element) {
            const root = document.getElementById('root')
            const isOverflow = element.getBoundingClientRect().bottom + 20 > root.scrollHeight
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

    //console.log(state.indicators[props.id]);// приходит при отрисовки продуктов
    console.log(state.indicators);// вся доступная инфа 
    console.log(props); // выбраные страницы 
    return <div className={'wrapper'} id={props.id}>
        {/*<PanelHeader className={'header'} left={*/}
        {/*    <HeaderButton onClick={go} data-to={props.back_id}>*/}
        {/*        {osName === IOS ?ChevronBack/> : <Icon24Back/>}*/}
        {/*    </HeaderButton>}*/}
        {/*>*/}
        {/*    <Div>{props.title}</Div>*/}
        {/*</PanelHeader>*/}
        <div className={'panel'}>
            <Div className={'header'}>
                <button className={'btn-back'} onClick={go} data-to={props.back_id}>
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </button>
                <Div className={'header-title'}>{props.title}</Div>
            </Div>

            <Div className='content'>
                <div className={'btn-wrap'} ref={refCallback}>
                    <div className= {'styleButtons'}>{buttons}</div> 
                    {/* <div style= {{overflowY:'scroll', flexDirection:'column', display:'flex', height: '70vh'}}>{buttons} </div> */}

                    {/* {buttons} */}
                </div>
            </Div>
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
