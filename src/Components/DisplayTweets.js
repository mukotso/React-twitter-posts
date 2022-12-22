import {useState} from "react";

const DisplayTweets = () => {
    const [tweets, setTweet] = useState([
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
    ])
    return (
        <>
            <hr/>

            {
                tweets.map((tweet) => {
                    return (
                        <>
                            <div className={'header'}>
                                <h5> {tweet.name} <span>@{tweet.username}</span></h5>
                            </div>
                            <div className={'post-content'}>
                                <p>{tweet.tweet}</p>
                            </div>

                            <div className={'footer'}>
                                <button>EDIT</button>
                                <button>DELETE</button>
                            </div>
                        </>
                    )
                })
            }

        </>
    )
}

export default DisplayTweets;