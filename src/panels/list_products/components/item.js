import React from 'react'
import persik from "../../../img/persik.png";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import PropTypes from 'prop-types';

const Product = props => {
    const {product,count, item, give,buy}= props
    return (
        <div className="product">
            {/*<div>Идея {item} из {count}:<br/> {product.name}</div>*/}
            <div className={'img-wrap'}>
                <img className="img-product" src={product.img_url || persik} alt="Persik The Cat"/>
            </div>
            {/*<div>*/}
            {/*    <Button size='l' level="outline" className="btn-white" data-product={product.id} data-name={product.name} onClick={e=>buy(e)}>Где купить?</Button>*/}
            {/*    <Button size='l' level="outline" className="btn-white" onClick={e=>give(e, product)}>Хочу себе!</Button>*/}
            {/*</div>*/}
        </div>
    )
}

Product.propTypes = {
    product:PropTypes.shape({
        name: PropTypes.string.isRequired,
        // img_url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }),
    count:PropTypes.number.isRequired,
    item: PropTypes.number.isRequired,
    // buy : PropTypes.func.isRequired,
    // give: PropTypes.func.isRequired
};

export default Product


