import './App.css';
import AddPost from "./Components/AddPost";


function App() {
    return (
        <div className="tweet-wrapper">
            <h3>Twitter Posts</h3>
            <div className={'content-wrapper'}>
                <AddPost/>
            </div>

        </div>
    );
}

export default App;
