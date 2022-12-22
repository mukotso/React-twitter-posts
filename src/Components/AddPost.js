import {useRef, useState} from "react";

const AddPost = () => {
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

  return(
      <>
        <div className={'addPost'}>
            <textarea ref={tweetInput} onChange={handleTweetChange} className={'text-area'} name={'post'}  value={tweet} placeholder='Type your tweet ....' />
            <button className={'add-post-button'}>Add Post</button>
        </div>
          <div className={'wordCount'}>
              <span>{remainingTweetCharacters}</span>
          </div>
      </>
  )

}

export default AddPost;