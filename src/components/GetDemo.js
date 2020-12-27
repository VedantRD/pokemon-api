import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              pokemons:[]
         }
     }
     //to get a GET reqest write a code in componentDidMount
     componentDidMount(){
         axios.get('https://pokeapi.co/api/v2/pokemon')                               //accept api in point at argument
        .then(response =>{
            console.log(response)
            this.setState({pokemons:response.data})
        })
        .catch(error=>{console.log(error)})
        }
    render() {
        const {pokemons}=this.state
        return (
            <div>
                http
                {
                    pokemons.length ? 
                    pokemons.map(post =>   <div key ={post.id}>{post.title} </div> ) :
                    null
                }
            </div>
        )
    }
}

export default PostList
