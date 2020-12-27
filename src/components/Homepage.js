import React, { Component } from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import NavBar from './NavBar'
//import axios from 'axios'

class Homepage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoading:true,
            pokemons:[]
             
        }
    }
    
    // componentDidMount{
    //    try{
    //         const data= await axios
    //         .get('https://jsonplaceholder.typicode.com/posts')
    //         .then(response =>{
                
    //             console.log(response)
    //             this.setState({
    //                 pokemons:this.response.data
    //             })
    //         } )
           
    //    }
    // }
    //    catch(e)  {
    //        console.log(e)
    //    }    
   
    render() {

       // let {pokemons}={this.state}
        return (
           
            <div id="wrapper">
                <NavBar/>
                {/* <div>{response.data}</div> */}
                {/* {this.state.isLoading ? <div className="loading"> {<ReactBootstrap.Spinner animation="border" size="lg" />}</div>: "conditon failed"} */}

                
            </div>
        )
    }
}

export default Homepage
