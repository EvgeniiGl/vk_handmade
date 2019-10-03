import React, {useContext, useEffect, useState} from 'react'
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
import filterProducts from "../../services/filter_products";
import http, {handmade_id} from "../../services/http";

const osName = platform();

const uriImg = 'photos.getById';

const ListProducts = props => {
    const [slideIndex, setSlide] = useState(0);
    const {state, dispatch} = useContext(Context)

    const go = e => {
        dispatch({
            type: 'setActivePanel',
            payload: {
                activePanel: props.back_id,
            }
        })
    };

    //filter products
    useEffect(() => {
        dispatch({
            type: 'setPopout',
            payload: {
                popout: true,
            }
        })

        async function filter() {
            const filteredProducts = await filterProducts.filter(state.products, state.indicators);
            const photos = filteredProducts.map((product) => {
                return product.img.split(',').map((img_id) => {
                    return `-${handmade_id}_${img_id.trim()}`
                }).join(',')
            }).join(',')
            console.log('photos-- ', photos);
            const imgs = await http.jsonp(uriImg, {photos: photos})
            await console.log('imgs-- ', imgs);
            await dispatch({
                type: 'getFilteredProducts',
                payload: {
                    filteredProducts: filteredProducts,
                }
            })
        }

        filter();
    }, []);


    const countProducts = state.filteredProducts.length;
    const products = state.filteredProducts.map((product, i) => <Product key={i} item={++i} product={product}
                                                                         count={countProducts}/>)

    return <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={go} data-to="age">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        />
        <div>
            <Div className="title">Мы кое-что нашли</Div>
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
                <CellButton className={"slider-btn"} onClick={() => setSlide(slideIndex + 1)}
                            before={<Icon24BrowserForward/>}/>
            </Div>

        </div>
    </Panel>

};

ListProducts.propTypes = {
    id: PropTypes.string.isRequired,
    back_id: PropTypes.string.isRequired,
    // go: PropTypes.func.isRequired,
};

export default ListProducts;
