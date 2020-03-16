import React, {useContext} from 'react'
import {Context} from './../../context'
import PropTypes from 'prop-types';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import BtnOutline from "../../core/BtnOutline";
//import arrow from './../../img/arrow.svg'
import  '../../../node_modules/animate.css/animate.css';

const Home = (props) => {

    const {dispatch} = useContext(Context);

    const go = e => {

        dispatch({
            type: 'setActivePanel',
            payload: {
                activePanel: e.currentTarget.dataset.to,
            }
        })
    };

   return <div id={props.id} className='wrapper '>
       <div className={'home'}>
        {/*{fetchedUser &&*/}
        {/*<Group title="User Data Fetched with VK Connect">*/}
        {/*    <Cell*/}
        {/*        before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}*/}
        {/*        description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}*/}
        {/*    >*/}
        {/*        {`${fetchedUser.first_name} ${fetchedUser.last_name}`}*/}
        {/*    </Cell>*/}
        {/*</Group>}*/}


        <Div className='title'>
            Не знаешь,<br/>что подарить?
        </Div>
        <Div className='text'>
            Воспользуйся нашим сервисом<br/>и получи идеи для подарка!
        </Div>
       {/* <img src={arrow} className={'arrow'}/>  // убрал стрелку */} 
        <Div className='homeBtn'>
        <BtnOutline data_to="how" handleClick={go}>
            Найти подарок!
        </BtnOutline>
        </Div>
    </div>
    </div>
}

Home.propTypes = {
    id: PropTypes.string.isRequired,
    // go: PropTypes.func.isRequired,
    // fetchedUser: PropTypes.shape({
    //     photo_200: PropTypes.string,
    //     first_name: PropTypes.string,
    //     last_name: PropTypes.string,
    //     city: PropTypes.shape({
    //         title: PropTypes.string,
    //     }),
    // }),
};

export default Home;
