import React, { Component } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import * as ReactBootstrap from 'react-bootstrap'

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    let responseList = [];
    let baseUrl = "https://pokeapi.co/api/v2/pokemon/";
    for (let i = 1; i < 21; i++) {
      let tmpResponse = axios.get(baseUrl + i);
      responseList.push(tmpResponse);
    }
    axios
      .all(responseList)

      .then(
        axios.spread((...responses) => {
          let pokemons = []
          for (let i = 0; i < 20; i++) {
            let pokemon = {}
            pokemon.id = responses[i].data.id;
            pokemon.name = responses[i].data.name;
            pokemon.weight = responses[i].data.weight;
            pokemon.moves = responses[i].data.moves.length;
            pokemon.height = responses[i].data.height;
            pokemon.baseExperience = responses[i].data.base_experience;
            pokemon.types = responses[i].data.types.length;
            pokemons.push(pokemon)
          }
          this.setState({ pokemons });
        }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {(this.state.isLoading) ? <ReactBootstrap.Spinner animation="border" size="lg" /> : <MaterialTable options={{
          filtering: true,
          selection: true,
          exportButton: true,
          actionsColumnIndex: -1

        }}
          columns={[
            { title: "ID", field: "id", },
            { title: "Name", field: "name", },
            { title: "Weight", field: "weight", type: "numeric", },
            { title: "Moves ", field: "moves", type: "numeric", },
            { title: "Height ", field: "height", type: "numeric", },
            { title: "Base Experience", field: "baseExperience", },
            { title: "Types", field: "types", type: "numeric" },
          ]}
          data={this.state.pokemons}
          actions={[
            (rowdata) => ({
              icon: 'delete',
              tooltip: 'Delete User ',
              onClick: (evt, data) => {
                alert('You want to delete ' + data.length + ' rows')
                console.log("trash buttonclicked", data)
                let pokemons = this.state.pokemons.filter(pokemon => !data.includes(pokemon))
                this.setState({ pokemons })
              },
            }),
          ]}
          title="Pokemon Table"
        />
        }
      </div>
    );
  }
}

export default PostList;
