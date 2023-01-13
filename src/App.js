import './App.css';
import {useState} from "react"
import DisplayTweets from "./Components/DisplayTweets";
import EditTweet from "./Components/EditTweet";
import AddTweet from "./Components/AddTweet";

function App() {
    const defaultTweets=[
        {
            id: 1,
            name: "Kelvin Mukotso",
            username: "kevo",
            tweet: "In project management, critical path analysis outlines all the steps necessary to complete a task," +
                " along with their durations and relationships. The technique was developed in ."
        },
        {
            id: 2,
            name: "Diana Mseto",
            username: "Dayo",
            tweet: "Microsoft Project is one of the top solutions teams use in software development and other areas to manage projects, track progress, ."
        },
        {
            id: 3,
            name: "Diblo wakaberia",
            username: "Diblo",
            tweet: "DI - or dependency injection - is a technique that uses some of the best programming practices to leverage decoupling amongst code. Pieces of..."
        },
        {
            id: 4,
            name: "Zingri",
            username: "Zingri",
            tweet: "Operators are used in programming languages to perform operations on data and variables. The Java programming language include many types of operators, including "
        },
        {
            id: 5,
            name: "Clinto Ombasi",
            username: "Clinto",
            tweet: "3icrosoft last month delivered the new .NET 6 Preview. This comes just a few months after the release of .NET 5.0 in November"
        }
    ];

    const [tweets, setTweets] = useState(defaultTweets)
    const [editTweet,setEditTweet] = useState(false);
    const [selectedTweet, setselectedTweet ] = useState('')

    const handleDelete = (deleteIndex)=>{
        alert('confirm to delete the post');
        setTweets((tweets) =>
            tweets.filter((tweet, index) => index !== deleteIndex)
        );
        alert('Tweet deleted successfully');
    }

   const  updateTweets =(updatedTweets)=>{
        setTweets(updatedTweets);
    }


    const showEditTweet = (edit_post_index)=>{

         let tweet =   tweets.filter((tweet, index) => index === edit_post_index)
        setEditTweet(true);
        setselectedTweet(tweet[0])
    }

    const cancelEditTweet = ()=>{
        setEditTweet(false);
    }


    return (
        <div className="tweet-wrapper">
            <h3>Twitter Posts</h3>
            <div className={'content-wrapper'}>
                {editTweet
                    ? <EditTweet tweet={selectedTweet} cancelEditTweet={cancelEditTweet} />
                    :  <AddTweet updateTweet={updateTweets} tweets={tweets}/> }

                <DisplayTweets  tweets={tweets} handleDelete={handleDelete} showEditTweet={showEditTweet} />
            </div>

        </div>
    );
}

export default App;
