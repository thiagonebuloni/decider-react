import React, { Component } from 'react';

const list = [
                'Yes', 'No', 'Maybe', 'Not sure... try again', 'Ask a friend',
                'Call the police!', 'Is your mother around?',
                'You probably shouldn\'t ask that', 'Go ask Yoda!',
                'I\'m getting tired of this =\'(', 'I wish someone would treat me like the human being I really am...'
            ];

const MyContext = React.createContext();
class MyProvider extends Component {

    state = {
        screen:0,
        question:'',
        result:''
    }

    handleGoTo = (value) => {
        this.setState({screen:value})
    }

    handleQuestion = (value) => {
        this.setState({question:value})
    }

    getRandomValue = () => {
        return list[Math.floor(Math.random()* list.length)];
    }

    handleResult = () => {
        let rand = this.getRandomValue();

        if(this.state.result !== '') {
            while(rand ===this.state.result) {
                rand = this.getRandomValue();
            }
        }
        this.setState({result:rand});
    }

    handleReset = () => {
        this.setState({
            screen:0,
            question:'',
            result:''
        })
    }


    render(){
        return(
            <>
                <MyContext.Provider value={{
                    state: this.state,
                    goTo: this.handleGoTo,
                    question: this.handleQuestion,
                    result: this.handleResult,
                    reset: this.handleReset
                }}
                >
                    {this.props.children}
                </MyContext.Provider>
            </>
        )
    }

}

export {
    MyProvider,
    MyContext
}