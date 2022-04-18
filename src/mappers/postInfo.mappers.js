import { votesFormat } from "../utils/general";

export const postMapper = (data) =>
  data.children.map((post) => ({
    title: post.data.title,
    contentType: post.data.post_hint,
    content: post.data.post_hint === "hosted:video" ? post.data?.media : post.data.url,
    votePoints: votesFormat(post.data.ups),
    redditUser: post.data.subreddit_name_prefixed,
    authorUserName: post.data.author,
    totalComments: post.data.num_comments,
    postDetail: post.data.permalink,
  }));

//BsShiftFill arrow fill