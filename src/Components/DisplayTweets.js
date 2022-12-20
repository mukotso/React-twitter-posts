const DisplayTweets = () => {
    return (
        <>
            <hr/>
            <div className={'header'}>
                <h5> Kelvin Mukotso <span>@kelvin</span></h5>
            </div>
            <div className={'post-content'}>
                <p>30 Days Of React challenge has been started on 1 October and still ongoing.
                    It will end the 30 October 2020. It was a real challenge for everyone.
                    Students learned quite a lot of concepts. I hope this will help lots of students.</p>
            </div>

            <div className={'footer'}>
                <button>EDIT</button>
                <button>DELETE</button>
            </div>
        </>
    )
}

export default DisplayTweets;