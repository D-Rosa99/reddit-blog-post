import React from "react";
import Button from "@mui/material/Button";

import headerStyle from "./header.module.css";

const Header = (props) => {
  const { totalKarma } = props;

  const { headerBoxCSS, karmaCSS } = headerStyle;

  return (
    <div className={headerBoxCSS}>
      {totalKarma ? (
        <h4 className={karmaCSS}>Total Karma {totalKarma}</h4>
      ) : (
        <Button variant="contained">
          <a href={process.env.REACT_APP_REDDIT_AUTHORIZATION_URL}>LogIn</a>
        </Button>
      )}
    </div>
  );
};

export default Header;
