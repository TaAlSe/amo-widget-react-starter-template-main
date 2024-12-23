import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const Widget = {
    render(self) {

        //const FormPayment_div = document.getElementsByClassName('feed-note feed-note-external feed-note-incoming');

        // тут замена существующего элемента
        const FormPayment_div = document.querySelector('[data-id="fba5f6a1-9e07-4c62-81ef-868864bd03be"]').firstChild.firstChild;
        // const div = document.createElement('div');
        // const parent = FormPayment_div.parentElement;
        // parent.replaceChild(div, FormPayment_div);

        FormPayment_div
        // тут создание нового элемента
        const div = document.createElement('div');
        div.setAttribute('class', 'feed-note__talk-outgoing-wrapper ');
        FormPayment_div.appendChild(div);

        ReactDOM.createRoot(
            div,
        ).render(
            <React.StrictMode>
                <App widget={self} />
            </React.StrictMode>,
        );
       



        return true;
    },
    init() {

        return true;
    },
    bind_actions() {
        return true;
    },
    settings() {
        return true;
    },
    onSave() {
        return true;
    },
    destroy() {
        return true;
    },
};



export default Widget;