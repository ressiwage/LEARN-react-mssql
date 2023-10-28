import React, { useState, useEffect, useRef } from 'react';

function useOutsideAlerter(ref, close_func) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                close_func();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

function Modal(props) {

    const wrapperRef = useRef(null);
    const close = (e)=>{props.close_func();};
    useOutsideAlerter(wrapperRef, props.close_func);
    return <div >
        <div class="position-fixed d-block top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
        <div ref={wrapperRef} class="my-modal position-fixed d-block top-50 start-50  bg-white translate-middle p-4 rounded-3  shadow">
            <div class="container">
                <div class="row justify-content-around mt-2">
                    <h1 class="col-11">{props.user.name}</h1>
                    <span onClick={close} class="col-1 material-symbols-outlined ms-auto close-button text-dark">
                        close
                    </span>
                </div>
            </div>


            <br />
            <div class="container">
                <div class="row justify-content-around mt-2">
                    <div class="col-6">Телефон:</div>
                    <div class="col-6"><p class="text-secondary">{props.user.phone}</p></div>
                </div>
                <div class="row justify-content-around mt-2">
                    <div class="col-6">Почта:</div>
                    <div class="col-6"><p class="text-secondary">{props.user.email}</p></div>
                </div>
                <div class="row justify-content-around mt-2">
                    <div class="col-6">Дата приема:</div>
                    <div class="col-6"><p class="text-secondary">{props.user.hire_date}</p></div>
                </div>
                <div class="row justify-content-around mt-2">
                    <div class="col-6">Должность:</div>
                    <div class="col-6"><p class="text-secondary">{props.user.position_name}</p></div>
                </div>
                <div class="row justify-content-around mt-2">
                    <div class="col-6">Подразделение:</div>
                    <div class="col-6"><p class="text-secondary">{props.user.department}</p></div>
                </div>
            </div>
            <br />
            <h4>Дополнительная информация:</h4>
            <p class="text-secondary">Разработчики используют текст в качестве заполнителя макета страницы. Разработчики используют текст в качестве заполнителя макета страницы.</p>
        </div>

    </div>


}

export default Modal;
