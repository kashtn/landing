import "./Slider.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../redux/actions";

export function Slider() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { posts } = useSelector((state) => state);
  const [showingId, setShowingId] = useState(1);
  const [showingPost, setShowingPost] = useState();

  useEffect(() => {
    let current = posts?.find((post) => post.id === showingId);
    setShowingPost(current);
  }, [posts, showingId]);

  return (
    <>
      <div className="sliderContainer">
        <div className="topContent">
          <div className="leftArrow">
            <ul>
              <li>
                <button
                  onClick={() => {
                    setShowingId((prev) => {
                      if (showingId > 1) {
                        return (prev -= 1);
                      } else return 4;
                    });
                  }}
                >
                  <i className="arrow">Left</i>
                </button>
              </li>
            </ul>
          </div>
          <div className="imgContainer">
            <img
              alt="/"
              src={showingPost && showingPost.url}
            />
          </div>
          <div className="rightArrow">
            <ul>
              <li>
                <button
                  onClick={() => {
                    setShowingId((prev) => {
                      if (showingId < 4) {
                        return (prev += 1);
                      } else return 1;
                    });
                  }}
                >
                  <i className="arrow">Right</i>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottomContent">
          {posts?.map((post) => (
            <div key={post.id} className="sliderDot">
              <button
                onClick={() => {
                  setShowingId(post.id);
                }}
              ></button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
