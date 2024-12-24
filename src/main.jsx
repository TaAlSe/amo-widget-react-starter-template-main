import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

function getMobileNumber(text) {
    const regex = /(?:\+7|7|8)+[0-9]{10}/;
    const result = text.match(regex);
    return result ? result[0] : "";
}

// Определение виджета
const Widget = {
    // Метод для рендеринга виджета
    render(self) {
        // Поиск элементов формы оплаты
        const FormPayment_div = document.querySelectorAll('.feed-note.feed-note-external.feed-note-incoming');

        // Перебор найденных элементов
        FormPayment_div.forEach(e => {
            const number = getMobileNumber(e?.children[1]?.children[1]?.firstElementChild?.innerHTML);
            if (number) {
                console.log(number);
                // Создание нового элемента
                const div = document.createElement('div');
                div.setAttribute('class', 'feed-note__talk-outgoing-wrapper ');
                e.appendChild(div);

                // Рендеринг приложения React в новом элементе
                ReactDOM.createRoot(
                    div,
                ).render(
                    <React.StrictMode>
                        <App widget={self} />
                    </React.StrictMode>,
                );
            }

        });

        // Возврат true для успешного рендеринга
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