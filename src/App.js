import './App.css';
import TodosContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import FilterOptions from './components/pure/FilterOptions';
// import Loginusereducer from './components/LoginUseReducer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <TodosContainer/>
        <TodoFormContainer/>
        <FilterOptions/>
        {/* <Loginusereducer></Loginusereducer> */}
      </header>
    </div>
  );
}

export default App;
