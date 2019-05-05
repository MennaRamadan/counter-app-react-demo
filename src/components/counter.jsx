import React, { Component } from 'react'; 

class Counter extends Component {

    // constructor (){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // state = {  
    //     value : this.props.counter.value,
    //     id: this.props.id,
    //     // tags: ['tag1','tag2', 'tag3']
    // }

    render() { 
        return (<div className="row">
                    <div className="col-1">
                     <span  className={this.getBadgeClasses()}>{this.formateCount()}</span> 
                    </div>
                    <div className="col">
                        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">+</button>
                        <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm"
                        disabled={this.props.counter.value === 0 ? "disbaled" : ""}>-</button>
                        <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>X</button>
                        {/* {this.renderTags()} */}
                    </div>
                </div>);
    }
    renderTags(){
        // if(this.state.tags.length ===0) return <p>There are no tags!</p>;
        return <ul>{ this.props.counter.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formateCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }


}
  
export default Counter;