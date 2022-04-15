import React, {useEffect, useState} from 'react';
import Post from '../components/post';
import { httpRequest } from '../utils/request';

const Home = () => {
    const [posts, setPosts] = useState([]);

    const REDDIT_ALL_POST_URL = 'https://www.reddit.com/r/all.json';

    useEffect(() => {
        httpRequest('get', REDDIT_ALL_POST_URL).then(({data: {data}})=> setPosts(data.children));
    }, []);

    return (
        <div>
            {posts.length && posts.map((post, index) => <Post index={index} key={index} title={post.data.title} content={post.data.url} karmaPoints={post.data.ups} />)}
        </div>
    );
}

export default Home;
