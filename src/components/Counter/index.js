import { Component } from "react";
import "./index.css";
class Counter extends Component {
    state = {count:0};
    onIncrement = ()=>{
        this.setState((prevState) =>({count:prevState.count+1}));
    }
    onDecrement = () => {
        this.setState((prevState) =>({count:prevState.count-1}));
    }
    onReset = () => {
        this.setState({count:0})
    }
    render() {
        const {count} = this.state
        return (
            <section className="counter-container">
                <article className="counter-card">
                    <p className="counter-value">Count:{count}</p>
                </article>
                <div className="buttons-container">
                    <button className="counter-btn" onClick={this.onIncrement} >+</button>
                    <button className="counter-btn decrease" onClick={this.onDecrement} disabled={count<= 0}>-</button>
                    <button className="counter-btn reset" onClick={this.onReset}>Reset</button>
                </div>
            </section>
        )
    }
    
}

export default Counter;