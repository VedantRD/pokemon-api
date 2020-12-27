//import { UserTable, LoadButton } from './components';
//import './App.css';
import PostList from './components/PostList'
//import GetDemo from './components/GetDemo'
import './components/style.css'
import Homepage from './components/Homepage';
import { Table } from 'react-bootstrap';
// import Demo from './components/Demo';
//import SearchPage from './components/SearchBar';

function App() {
  return (
    <div className="App">
      {/* <SearchPage/> */}
      <Homepage />
      {/* <Demo/> */}
      <PostList />

      <Table />

      {/* <GetDemo/> */}
    </div>
  );
}

export default App;
