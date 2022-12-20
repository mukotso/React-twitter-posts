import './App.css';
import AddPost from "./Components/AddPost";
import DisplayTweets from "./Components/DisplayTweets";


function App() {
    return (
        <div className="tweet-wrapper">
            <h3>Twitter Posts</h3>
            <div className={'content-wrapper'}>
                <AddPost/>
                <DisplayTweets/>
            </div>

        </div>
    );
}

export default App;
