import './App.css';
import Pagination from '@material-ui/lab/Pagination';
import { useGlobalContext } from './context';
import Page from './Page';

function App() {
  const {pages, fetchData} = useGlobalContext()

  //controlling paging and fetching data
  const handleClick = (e, value) =>{
    fetchData(value)
  }

  return (
    <div className="App">

      <Page/>

      <Pagination className="pagination" count={pages} variant="outlined" shape="rounded" onChange={handleClick} />

    </div>
  );
}

export default App;
