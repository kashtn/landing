import { FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { PropsType, StateType } from "../../type";
import "./Card.scss";

export const Card: FC<PropsType> = () => {
  const { posts } = useSelector<AppState, StateType>((state) => state);

  return (
    <>
      <div className="headerContainer">
        <h1>Header</h1>
      </div>
      <div className="cardsContainer">
        {posts?.map((post) => (
          <div key={post.id} className="cardContainer">
            <div className="imgContainer">
              <img alt="/" src={post.url} />
            </div>
            <div className="contentContainer">
              <h6 className="title">Title</h6>
              <p>
                The replaced content is scaled to maintain its aspect ratio
                while fitting within the element’s content box. The entire
                object is made to fill the box, while preserving its aspect
                ratio, so the object will be "letterboxed" if its aspect ratio
                does not match the aspect ratio of the box.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
