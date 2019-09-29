import React from 'react'
import persik from "../../../img/persik.png";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

const Product = props => {
    return (
        <div className="product">
            <div>
                <img className="img-product" src={persik} alt="Persik The Cat"/>
            </div>
            <div>Название товара</div>
            <div>
                <div>4600 р.</div>
                <Button size='l' level="outline" className="btn-white">Купить
                    сейчас!</Button>
            </div>
        </div>
    )
}

Product.propTypes = {
    // id: PropTypes.string.isRequired,
    // go: PropTypes.func.isRequired,
};

export default Product


