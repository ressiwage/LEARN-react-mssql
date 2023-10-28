import Modal from './Modal.js';
import React, { useState } from 'react';

function Card(props) {
    const [isModalActive, setModalActive] = useState(false);

    function handleModalOpen (e) {
        setModalActive(true);
    };
    function handleModalClose (e)  {
        setModalActive(false);
    };


    return (
        <div class="Card col-4 pt-3 ps-1 container " >
            <div class="container p-4 rounded-3  shadow " onClick={handleModalOpen}>
                <h2>{props.user.name}</h2>
                <span class="material-symbols-outlined inline-icon">mail</span>

                <p class="d-inline"> {props.user.phone}</p>
                <br />
                <span class="material-symbols-outlined inline-icon">smartphone</span>
                <p class="d-inline"> {props.user.email}</p>
            </div>
            {isModalActive?<Modal close_func={handleModalClose} user={props.user}/>:null }
        </div>


    );
}

export default Card;
