import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            
            <Post 
                profilePic="https://avatars0.githubusercontent.com/u/64208875?s=460&u=b22767d2aa896efda827644314f45d251e812e15&v=4"
                message="Hello World"
                timestamp="It 2 oclock"
                username='IkramUllahBaig'
                image='https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-Online-Code-Editors.png'
            />
            <Post 
                profilePic="https://avatars0.githubusercontent.com/u/64208875?s=460&u=b22767d2aa896efda827644314f45d251e812e15&v=4"
                message="Baby Steps"
                timestamp="7 hrs"
                username='IkramUllahBaig'
                image='https://kimaverycoachingcom.b-cdn.net/wp-content/uploads/BabySteps.jpg'
            />
            <Post />
            
        </div>
    );
}

export default Feed;
