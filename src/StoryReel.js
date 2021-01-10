import React from 'react';
import './StoryReel.css';
import Story from './Story'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image = "https://images.unsplash.com/photo-1587924386296-9bd6e9f8434d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8OSUzQTE2fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
                profileSrc="https://yt3.ggpht.com/yti/ANoDKi6lR4tQIz-YMs3iyVP-XxrHZ1m2AhntTB6E3U4Wbg=s88-c-k-c0x00ffffff-no-rj-mo"
                title='Ikram Ullah Baig'
            />
            <Story
                image = "https://images.unsplash.com/photo-1546767426-7e015e14c229?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8OSUzQTE2fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
                profileSrc="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2F9%253A16&psig=AOvVaw1o6jTbF2dNsNXPaTvV-GNU&ust=1610354116579000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICqrtj6kO4CFQAAAAAdAAAAABAD"
                title='Farhan Khan'
            />
            <Story
                image = "https://images.unsplash.com/photo-1576562492346-af59df6a1504?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8OSUzQTE2fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
                profileSrc="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2F9%253A16&psig=AOvVaw1oPFfwXzCYe-048yDaDxAt&ust=1610354173948000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDn6vP6kO4CFQAAAAAdAAAAABAD"
                title='Parveen Kumar'
            />
            <Story
                image = "https://wallpaperaccess.com/full/2713202.jpg"
                profileSrc="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2F916&psig=AOvVaw11LycF0LfDOicm0DLDuHgZ&ust=1610354201688000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCooYH7kO4CFQAAAAAdAAAAABAD"
                title='Amit Singh'
            />
            <Story
                image = "https://wallpaperaccess.com/full/2361894.jpg"
                profileSrc="https://yt3.ggpht.com/yti/ANoDKi6lR4tQIz-YMs3iyVP-XxrHZ1m2AhntTB6E3U4Wbg=s88-c-k-c0x00ffffff-no-rj-mo"
                title='Saleem Shah'
            />

        </div>
    );
}

export default StoryReel;
