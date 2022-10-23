import React, { useState, useEffect } from "react";
import '../Article/Article.scss'
function Article() {
  const [scroll, setScroll] = useState(false);
  const transitionScroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionScroll);

    return () => {
      window.removeEventListener("scroll", transitionScroll);
    };
  }, []);
  return (
    <div className={`Article ${scroll && "background"}`}>
      <div className="container">
        <div className="desc">
          <h1>
            Paris Fashion Week, New York Fashion Week, London Fashion Week and
            Milan Fashion Week are the most known Fashion Weeks around the
            world, attracting buyers, the media, celebrities, top models and
            designers who proudly present their latest collections.
          </h1>
        </div>
        <div className="contact">
         
<h1>Studio:<br/>Simon Audrain
  Studio Manager
  simondu06730@hotmail.fr
  064845645
</h1>
        </div>
        
      </div>
    </div>
  );
}

export default Article;
