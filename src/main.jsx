import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const Widget = {
	render(self) {

    // тут замена существующего элемента
    // const FormPayment_div = document.querySelector('[data-id="1253779"]');
    // const div = document.createElement('div');
    // const parent = FormPayment_div.parentElement;
    // parent.replaceChild(div, FormPayment_div);

    // тут создание нового элемента
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.setAttribute('class', 'amo_test_widget_12345');

		ReactDOM.createRoot(
			div,
		).render(
			<React.StrictMode>
				<App widget={self}/>
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