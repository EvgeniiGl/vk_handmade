import React from 'react'
import persik from "../../../img/persik.png";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

const Product = props => {
    const {product,count, item}= props
    return (
        <div className="product">
            <div>Идея {item} из {count}:<br/> {product.name}</div>
            <div>
                <img className="img-product" src={persik} alt="Persik The Cat"/>
            </div>
            <div>
                <Button size='l' level="outline" className="btn-primary">Где купить?</Button>
                <Button size='l' level="outline" className="btn-primary">Рассказать друзьям</Button>
            </div>
        </div>
    )
}

Product.propTypes = {
    // id: PropTypes.string.isRequired,
    // go: PropTypes.func.isRequired,
};

export default Product


