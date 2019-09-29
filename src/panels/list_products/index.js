import React, {useContext, useState} from 'react'
import PropTypes from 'prop-types';
import {IOS, platform} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import './../../style.css';
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Gallery from "@vkontakte/vkui/dist/components/Gallery/Gallery";
import CellButton from "@vkontakte/vkui/dist/components/CellButton/CellButton";
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';
import {Context} from "../../context";
import Product from "./components/item";

const osName = platform();

const ListProducts = props => {
    const [slideIndex, setSlide] = useState(0);
    const {state, dispatch} = useContext(Context)

    const go = e => {
        dispatch({
            type: 'setActivePanel',
            payload: {
                activePanel: e.currentTarget.dataset.to,
            }
        })
    };

    const products = [...Array(10).keys()].map((i) => <Product key={i}/>)

    return <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={go} data-to="age">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        />
        <div>
            <Div className="title" >Мы кое-что нашли</Div>
            <Div className={'slider-wrap'}>
                <CellButton className={"slider-btn"} onClick={() => setSlide(slideIndex === 0 ? 0 : slideIndex - 1)}
                            before={<Icon24BrowserBack/>}/>
                <Div className={"slider-gallery"}>
                    <Gallery
                        className={"gallery"}
                        slideWidth="98%"
                        align="center"
                        // style={{height: 150}}
                        slideIndex={slideIndex}
                        onChange={slideIndex => setSlide(slideIndex)}
                    >
                        {products}
                    </Gallery>
                </Div>
                <CellButton className={"slider-btn"} onClick={() => setSlide(slideIndex === 2 ? 0 : slideIndex + 1)}
                            before={<Icon24BrowserForward/>}/>
            </Div>

        </div>
    </Panel>

};

ListProducts.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default ListProducts;
