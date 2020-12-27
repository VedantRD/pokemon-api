

import React, { Component } from 'react'

 class TablePokemon extends Component {
     
    render() {
       // let pokemons=this.props.pokemons
        return (
            <div>
                <h1> am inside the talbe comp</h1>
                <h1>{this.props.pokemons}</h1>
                
                {/* <table>
                <tbody>
          
      { (pokemons.props.length > 0) ? pokemons.props.map( (pokemon, index) => {
           return (
               <div>

            <tr key={ pokemons.props.name }>
               <td>{ pokemon.id }</td> 
              <td>{ pokemon.props.name }</td>
              <td>{ pokemon.region.slug}</td>
              <td>{ pokemon.memory }</td>
              <td>{ pokemon.vcpus }</td>
              <td>{ pokemon.disk }</td> 
            </tr>
            </div>
           )  

      })  : <tr><td colSpan="5">Loading...</td></tr> }
    
        
      </tbody>
    </table> */}

  
       
  
            </div>
             )
    }
}
    export default TablePokemon

//     <Table  bordered hover>
//     <thead >
//       <tr>
       
//         <th>ID</th>
//         <th >Name</th>
//         <th>Weight</th>
//         <th>Moves</th>
//         <th>Height</th>
//         <th>Base Experience</th>
//         <th>Types</th>

//       </tr>
//     </thead>
//     <tbody>


    


//     { ((this.state.names).length> 0) ? names.map( (pokemon, index) => {
//          return (
           
//           <tr key={ names.pokemon }>
          
//             <td><div style={{color:"red"}}>{ idList[index] }</div></td>    
//             <td><div>{ pokemon }</div></td>    
//             <td>{ weight[index]}</td>
//             <td>{ movesList[index] }</td>
//             <td>{ heightList[index] }</td>
//             <td>{ baseExperienceList[index] }</td>
//             <td>{ typesList[index] }</td>
//           </tr>
//          )  

//     })  : <tr><td colSpan="6">Loading...</td></tr> }
  
      
//     </tbody>
//   </Table>