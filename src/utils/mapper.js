export const postMapper = (data) =>
  data.children.map((post) => ({
    title: post.data.title,
    contentType: post.data.post_hint,
    content: post.data.url,
    karmaPoints: post.data.ups,
    redditUser: post.data.subreddit_name_prefixed,
    authorUserName: post.data.author,
    totalComments: post.data.num_comments,
  }));

//BsShiftFill arrow fill
