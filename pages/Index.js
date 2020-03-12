import React from 'react';
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter,changeName} from '../redux/actions/counterActions';

class App extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    changeNameTalha = ()=>{
        const  {dispatch} = this.props
        console.log(dispatch)
        // dispatch(changeName())
        console.log('it is testing')
    }

    render() {
        return (
            <div>
                <button onClick={this.props.incrementCounter}>Increment</button>
                <button onClick={this.props.decrementCounter}>Decrement</button>
                <button onClick={this.props.changeName}>Change Name</button>
                <button onClick={this.changeNameTalha}>Test</button>
                <h1>{this.props.counter}</h1>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter.value,
    name:state.counter.name
});

const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
    changeName:changeName
};

export default connect(mapStateToProps, mapDispatchToProps)(App);