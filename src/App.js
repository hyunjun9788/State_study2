import React, {useState} from 'react';
import './App.css'
function App() {
    const [inputs, setInputs] = useState(false);
    const [buttonText, setButtonText] = useState('입력하기')

    const buttonClickHandler = () => {
        setInputs(!inputs)
        setButtonText(inputs ? '입력하기' : '입력 취소하기')
};
return (

    <div className='main'>
        <button onClick={buttonClickHandler}>{buttonText}</button>
        {inputs ? <input className='first' type='text' placeholder='이름을 입력해주세요.'/> : null}
        {inputs ? <input className='second' type='text' placeholder='나이를 입력해주세요.'/> : null}
    </div>

)
}

export default App;
