import React from 'react'
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import PropTypes from 'prop-types';
import search from './../../../img/search.svg'

import Div from "@vkontakte/vkui/dist/components/Div/Div";

const LastItem = props => {
    const { again, redirectSiberiaHandmade}= props
    return (
        <div className="product">
<img src={search} className={'img-search'} /* width={150} height={200} *//>
            <div width={100} height={100}>
                <Button size='l' level="outline" className="btn-white" onClick={again}>Попробовать еще раз!</Button>< br /> 
                <Button size='l' level="outline" className="btn-white" onClick={redirectSiberiaHandmade}>Подберите мне подарок!</Button>
            </div>
        </div>
    )
}

LastItem.propTypes = {
    again: PropTypes.func.isRequired,
    redirectSiberiaHandmade: PropTypes.func.isRequired
};

export default LastItem


