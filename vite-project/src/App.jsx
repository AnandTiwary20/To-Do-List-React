import './App.css';


function App(){
    let saveTodoList = (event)=>{


        let toname=event.target.toName.value;
        alert(toname);
        event.preventDefault();

    }
    return (
        <div className = "App">
            <h1>ToDO List </h1>
            <form onSubmit = {saveTodoList}>
                <input type="text"  name = 'toName' placeholder="Enter a task"  />
                <button type="submit"> Save</button>
            </form>
            
        </div>

)}

export default App;