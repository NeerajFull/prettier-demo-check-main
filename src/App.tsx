import { useState } from 'react';
import './App.css';

const App = () => {
    return (
        <div>
            <InputComponent />
        </div>
    );

    function InputComponent() {
        const [input, setInput] = useState('');

        return <input type='text' value={input} onChange={setValue} />;
        function setValue(e: any) {
            console.log('I am just a demo function ');

            setInput(e.target.value);
        }
    }
};

function Childcompnent() {
    return (
        <div>
            <span>I am inside child component</span>
        </div>
    );
}
export default App;
