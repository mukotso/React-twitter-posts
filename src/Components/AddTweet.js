import {useRef, useState} from "react";

const AddPost = (props) => {

    const maximumTweetLength = 250;
    const [remainingTweetCharacters , setRemainingTweetCharacters] = useState(maximumTweetLength)
    const [tweet , setTweet] = useState('')

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

    const handleSavePost = ()=>{

        let newTweet =
            {
                id: props.tweets.length+1 ,
                name : "Anonymous User",
                username: "Anonymous",
                tweet: tweet
            }

        let allTweets = props.tweets;
        allTweets.push(newTweet)
        props.updateTweet(allTweets);
        // console.log('tweets',defaultTweets )
        setTweet('');

        alert('Tweet added successfully');

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



      </>
  )

}

export default AddPost;