import "./Nav.scss";
import { Link } from "react-router-dom";
import { FC } from "react";
import { PropsType } from "../../type";

export const Navigation: FC<PropsType> = () => {
  return (
    <>
      <div className="navContainer">
        <div className="logoContainer">
          <h3>Logo</h3>
        </div>
        <div className="linksContainer">
          <div className="link">
            <p>
              <Link className="linkBtn" to="/">
                Link1
              </Link>
            </p>
          </div>
          <div className="link">
            <p>
              <Link className="linkBtn" to="/">
                Link2
              </Link>
            </p>
          </div>
          <div className="link">
            <p>
              <Link className="linkBtn" to="/">
                Link3
              </Link>
            </p>
          </div>
          <div className="link">
            <p>
              <Link className="linkBtn" to="/">
                Link4
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
