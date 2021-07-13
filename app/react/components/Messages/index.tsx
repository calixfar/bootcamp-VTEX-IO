import React, { useState } from 'react';
import styles from './styles.css';

const messagesDefault = [
    {
        id: '1',
        text: 'Mensaje #1'
    },
    {
        id: '2',
        text: 'Mensaje #2'
    },
    {
        id: '3',
        text: 'Mensaje #3'
    },
    {
        id: '4',
        text: 'Mensaje #4'
    }
]

interface AppProps {
    messages?: message[],
    contentBlockClass?: string
}
interface message {
    id: string,
    text: string
}

const App = ({ messages = messagesDefault, contentBlockClass }: AppProps) => {

    const [ selectedIndex, setSelectedIndex ] = useState(0);

    const renderedMessages = messages.map(({ id, text }: message, index: number) => (
        <div key={id} className={`ph2 mr2 ${styles.containerMessage} ${index === selectedIndex ? styles.selectedMessage : ''}`}>
            <p className="tc">ID: {id}</p>
            <p className={`tc ${styles.textContent}`}>Contenido: {text}</p>
        </div>
    ));
    
    const onClickBack = () => {
        setSelectedIndex(selectedIndex - 1);
    }
    const onClickNext = () => {
        let newValue = selectedIndex + 1;
        if( newValue === messages.length ) newValue = 0;
        setSelectedIndex(newValue);
    }

    return (
        <div className={`${contentBlockClass ? styles[contentBlockClass] : ''}`}>
            <div className="flex"> 
                { renderedMessages }
            </div>
            <div className="flex mt2 justify-center">
                <button
                    onClick={onClickBack}
                >
                    Anterior
                </button>
                <button
                    onClick={onClickNext}
                >
                    Siguiente
                </button>
            </div>
        </div>
    )
}

export default App;