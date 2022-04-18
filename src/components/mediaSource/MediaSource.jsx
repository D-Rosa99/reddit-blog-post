import mediaStyle from "./mediaSource.module.css";

const MediaSource = (props) => {
  const { contentType, src } = props;

  const { contentStyleCSS } = mediaStyle;

  switch (contentType) {
    case "hosted:video":
      return (
        <video className={contentStyleCSS} controls>
          <source src={src.reddit_video.fallback_url} type="video/mp4" />
        </video>
      );

    case "link":
      return <a href={src}>{src}</a>;

    case "image":
      return <img className={contentStyleCSS} alt={`${src}`} src={src} />;

    default:
      return "unsupported content";
  }
};

export default MediaSource;
