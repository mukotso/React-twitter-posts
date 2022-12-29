import {useRef, useState} from "react";
import DisplayTweets from "./DisplayTweets";

const AddPost = (props) => {
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
    const maximumTweetLength = 250;
    const [remainingTweetCharacters , setRemainingTweetCharacters] = useState(maximumTweetLength)
    const [tweet , setTweet] = useState('')
    const [tweets, setTweets] = useState(defaultTweets)
    const tweetInput = useRef()

    const handleTweetChange = (event)=>{
        let tweet = event.target.value;
        let tweetCharacters =tweet.length
        let remainingTweetCharacters = maximumTweetLength - tweetCharacters

        if(tweetCharacters >= maximumTweetLength ){
            tweetInput.current.disabled = true;
        }
        setTweet(tweet);
        setRemainingTweetCharacters(remainingTweetCharacters)
    }

    // const handleResetTweet = ()=>{
    //     setTweet('');
    // }

    const handleDelete = (deleteIndex)=>{
        alert('confirm to delete the post');
        setTweets((tweets) =>
            tweets.filter((tweet, index) => index !== deleteIndex)
        );
        alert('Post deleted successfully');
    }

    const handleSavePost = ()=>{

        let newTweet =
            {
                id: tweets.length+1 ,
                name : "Anonymous User",
                username: "Anonymous",
                tweet: tweet
            }

            let allTweets = tweets;
        allTweets.push(newTweet)
        setTweets(allTweets);
        // console.log('tweets',defaultTweets )
        setTweet('');

        alert('tweet added successfully');

    }



  return(
      <>
        <div className={'addPost'}>
            <textarea ref={tweetInput} onChange={handleTweetChange} className={'text-area'} name={'post'}  value={tweet} placeholder='Type your tweet ....' />
            <button onClick={handleSavePost} className={'add-post-button'}>Add Post</button>
        </div>
          <div className={'wordCount'}>
              <span>{remainingTweetCharacters}</span>
          </div>

          <DisplayTweets tweet={tweet} tweets={tweets} handleDelete={handleDelete} />

      </>
  )

}

export default AddPost;