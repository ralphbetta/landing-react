import React, {Component} from 'react'
import Counter from './Counter';

class SecondBanner extends Component {

    constructor(props) {
        super(props);
       // this.handleIncrement =  this.handleIncrementWithContructor.bind(this);
       }

    state = { 
        counters: [
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0},     
        ]

     }

     handleDelete=counterID=>{
      console.log("delete requested", counterID);
        const counters = this.state.counters.filter(c=>c.id !==counterID);
        this.setState({counters})
     }


     handleIncreament = counter =>{
        console.log(counter)
       const  counters = [...this.state.counters];
       const index = counters.indexOf(counter);
       counters[index] = { ...counter }
       counters[index].value++;
       this.setState({ counters });
     }

     handleReset=()=>{
        const counters =  this.state.counters.map(counter =>{
            counter.value = 0;
            return counter;
        });

        this.setState({ counters });
     }

    

    conditionalDisplay(){
        if(this.state.tags == 0){
         return <p className="">No items</p>
        }else{
            return(
              this.state.tags.map(tag=>
                <p key={tag} className="ml-5">{tag}</p>
                )
            );   
        }
    }

    render() { 
        return (<div className=''>
        <p className="ml-5"> This is the Banner page</p>
        <button onClick={this.handleReset} className="m-5 rounded-lg p-1 bg-green-600 w-[120px] text-white">Reset</button>


        {
         //Without children
         this.state.counters.map(counter=> <Counter 
            key={counter.id} 
            onDelete={this.handleDelete} 
            onIncreament={this.handleIncreament}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
         
             />)

         // With children like alert box
        //   this.state.counters.map(counter=> <Counter key={counter.id} value={counter.value} selected={true} >
        //     {/* <p className='ml-2'>Counter #{counter.id}</p> */}
        //   </Counter>)

        }

        </div>  );
    }


}
 
export default SecondBanner;