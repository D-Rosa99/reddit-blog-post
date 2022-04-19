# reddit-blog-post

This is a client web app that use reddits API in order to show reddit's blog post, in the app users can see the lates post from reddit, they can login into their account, post comments and use the votes action (like and dislike).

users can see the lastes post without login, but Only users that are login into the app can votes and post comments.

## Main Technologies

- React
- React Router
- React Icons
- Material-UI
- Axios

## How to run the app

1- You need to create a Reddit dev web applications if you want to login in the app, you can do it by following the [reddit docummentation](https://github.com/reddit-archive/reddit/wiki/OAuth2)

**Note:** `you don't need it if you just want to read posts, in that case skip to the third step`

2- After you create the reddit application you have to set the CLIENT_SECRET and CLIENT_ID in the .env file with the ids supplied by reddit, add the CLIENT_ID to the REDDIT_AUTHORIZATION_URL as well

3- Run `npm install` in your Terminal

4- Then Run `npm start`

5- Head over to `http://localhost:3000/` (React redirects you there automatically)

6- You should see the lates post and be able to LogIn to vote and comment
