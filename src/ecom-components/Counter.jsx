import React, {Component} from "react";


class Counter extends Component {
    constructor(props) {
        super(props);
    }

    state = { 
        title: "this is the banner section",
        value: this.props.counter.value,
        image: "https://picsum.photos/",
        tags: ['tag1', 'tag2','tag3']
     }

    // All this are local implementation
    //much like implementation of toggle visibility on or off
    //this has nothing to do with feed back response
    //thus we'll be using onIncrement instead of handleIncreament

    //  handleIncrementWithContructor(){
    //     this.state.value+= 1;
    //  }

    //  handleIncrement=()=>{
    //     this.setState({value: this.state.value+ 1})
    //  }

    //  handleIncrementWithParameter=product=>{
    //     // console.log(product);
    //     this.setState({count: this.state.value+ 1})
    //  }

    render() { 
        //alternate way to not declare this.props everywhere
        const { onDelete} = this.props
        return (
            <div className="flex items-center ml-5">
                <p>{this.props.counter.value}</p>
                <p className="mx-2">props</p>
                <p>{this.props.counter.id}</p>
                <button onClick={()=>this.props.onIncreament(this.props.counter)} className="m-5 rounded-lg p-1 bg-primary w-[120px] text-white">Increament</button>
                <button onClick={()=>onDelete(this.props.counter.id)} className="m-5 rounded-lg p-1 bg-primary w-[120px] text-white">Delete</button>
            </div>
        );
    }
}

export default Counter;



//for stateless functional components
//this is how you use it wihout declaring props everwhere
export const CounterTwo = ({ counter }) => {
    return (
        <div className="flex items-center ml-5">
            <p>{counter.value}</p>
            <p className="mx-2">props</p>
            <p>{this.props.counter.id}</p>
            <button onClick={()=>this.props.onIncreament(this.props.counter)} className="m-5 rounded-lg p-1 bg-primary w-[120px] text-white">Increament</button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="m-5 rounded-lg p-1 bg-primary w-[120px] text-white">Delete</button>
        </div>
    );
}
