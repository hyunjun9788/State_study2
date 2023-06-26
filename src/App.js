import React, {useState} from 'react';
import './App.css'
import Button from "./components/Button";
import Input from "./components/Input";
import './components/Button.css'
import './components/Input.css'
function App() {
    const [inputs, setInputs] = useState(false);
    const [buttonText, setButtonText] = useState('입력하기')

    const buttonClickHandler = () => {
        setInputs(!inputs)
        setButtonText(inputs ? '입력하기' : '입력 취소하기')

};

return (

    <div className='main'>
        <Button buttonText={buttonText} onClick = {buttonClickHandler}/>
        {inputs ? <Input className='first' type='text' placeholder='이름을 입력해주세요.'/> : null}
        {inputs ? <Input className='second' type='text' placeholder='나이를 입력해주세요.'/> : null}
    </div>

)
}

export default App;
