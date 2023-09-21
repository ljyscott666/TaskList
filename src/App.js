

import './App.css'
import Footer from './components/Footer';
import Header from "./components/Header";
import TaskList from "./components/TaskList";


function App() {

 

    return(
        <div className="App">
            <Header></Header>
        <TaskList article='rose history'></TaskList>
        <Footer></Footer>
        </div>
    )
}
export default App 