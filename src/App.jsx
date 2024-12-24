
import React, {useRef} from 'react'

const App = () => {

    const phone = useRef(
        document.querySelector('[data-pei-code="phone"]')?.firstElementChild?.firstElementChild?.value);



    return (
        <>
            {phone.current? 'Заменить' : 'Сохранить'} телефон
        </>
    )
};

export default App;
