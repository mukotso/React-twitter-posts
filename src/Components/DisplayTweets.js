
const DisplayTweets = (props) => {
    const today = new Date().toLocaleString();


    return (
        <>

            {
                props.tweets.map((tweet, index) => {
                    return (
                        <>
                            <div className={'header'}>
                                <h5> {tweet.name} <span>@{tweet.username}</span></h5>
                            </div>
                            <div className={'post-content'}>
                                <p>{tweet.tweet}</p>
                            </div>

                            <div className={'footer'}>
                               <div>
                                   <span><i className={'fa fa-edit'}></i></span>
                                   <span onClick={ () => props.handleDelete(index)}><i className={'fa fa-trash'}></i></span>
                               </div>

                                <div>
                                    <span><i className={'fa fa-comment'}></i></span>
                                    <span><i className={'fa fa-heart'}></i></span>
                                    <span><i className={'fa  fa-refresh'}></i></span>
                                </div>
                                <div>
                                    <span>{today}</span>
                                </div>
                            </div>
                            <hr/>
                        </>
                    )
                })
            }

        </>
    )
}

export default DisplayTweets;