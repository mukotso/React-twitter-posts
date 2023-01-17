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
    const editPostDetails = ()=>{
        props.handleEditPost(tweet)
    }


  return(
      <>
          <button onClick={props.cancelEditTweet} className={'new-tweet-button'} >NEW TWEET</button>
        <div className={'addPost'}>
            <textarea ref={tweetInput} onChange={handleTweetChange} className={'text-area'} name={'post'}  value={props.tweet.tweet} placeholder='Type your tweet ....' />

        </div>
          <button onClick={editPostDetails} className={'add-post-button'}>EDIT</button>
          <button onClick={props.cancelEditTweet} className={'add-post-button'} >CANCEL</button>
          <div className={'wordCount'}>
              <span>{remainingTweetCharacters}</span>
          </div>



      </>
  )

}

export default AddPost;