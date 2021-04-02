
import { Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';
import TodoFeature from './features/todo';
import AlbumFeature from './features/Album';
import NotFound from './components/NotFound';
import {useEffect} from 'react'
import productApi from './api/productApi'
import CounterFeature from './features/Counter';
import './App.css'

function App() {
    useEffect(()=>{
        const fetchProducts = async ()=>{
            const params = {
                _limit: 10
            }
            const productsList = await productApi.getAll(params);
            console.log(productsList)
        }
        fetchProducts()
    }, [])
    const color = "goldenrod"
  return (
    <div className="App">
        Header
        <p><NavLink to="/todos" activeClassName="acctive-menu">Todo</NavLink></p>
        <p><NavLink to="/album">album</NavLink></p>
        <Switch>
            <Redirect from="/home" to="/" exact/>
            <Route path="/" component={CounterFeature} />
            <Route path="/todos" component={TodoFeature}/>
            <Route path="/album" component={AlbumFeature}/>
            <Route component={NotFound}/>
        </Switch>
        Footer
    </div>
  );
}

export default App;
