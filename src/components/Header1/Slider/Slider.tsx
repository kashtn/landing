import "./Slider.scss";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../redux/actions";
import { AppState } from "../../../redux/store";
import { PostType, PropsType, StateType } from "../../../type";

export const Slider: FC<PropsType> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { posts } = useSelector<AppState, StateType>((state) => state);
  const [showingId, setShowingId] = useState<number>(1);
  const [showingPost, setShowingPost] = useState<PostType>();

  useEffect((): void => {
    if (posts) {
      let current: PostType | undefined = posts.find(
        (post) => post.id === showingId
      );
      setShowingPost(current);
    }
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
            <img alt="/" src={showingPost && showingPost.url} />
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
};
