import React from "react";
import Tweet from "./Tweet";


const Tweets = (props) => {
    const tweets = [
        { name: 'delightfullynerdy', tweet: 'react, please bring wine' },
        { name: 'judith', tweet: 'I am chic factorie' },
        {name: 'booked', tweet: 'I like books'},
      ]
    return (
        <section>
            {tweets.map((tweet) => (
                <Tweet name={tweet.name} tweet={tweet.tweet} />
            ))}
        </section>
    );
}


export default Tweets;