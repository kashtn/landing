import "./Login.scss";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal } from "antd";
import "antd/dist/antd.css";
import { Button, Input } from "../../styled";

import { setAuth } from "../../../redux/actions";

export function Login() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [login, setLogin] = useState();
  const [pass, setPass] = useState();

  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  const showModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === "admin" && pass === "123") {
      dispatch(setAuth(true));
      showModal();
    }
  };

  return (
    <>
      <div className="loginContainer">
        <div className="loginContent">
          {!auth ? (
            <>
              <p className="title">Hello, stranger</p>
              <Button onClick={showModal}>Login</Button>
            </>
          ) : (
            <>
              <p className="title">Welcome Home!</p>
            </>
          )}
          <Modal
            title="Sign In"
            visible={isModalVisible}
            footer={null}
            onCancel={handleCancel}
          >
            <form name="loginForm">
              {login !== "admin" && login?.length > 0 && (
                <p className="error">Wrong login!</p>
              )}
              <Input
                required
                name="login"
                type="text"
                placeholder="Login: admin"
                onChange={(e) => {
                  setLogin(e.target.value);
                }}
              />
              {pass !== "123" && pass?.length > 0 && (
                <p className="error">Wrong password!</p>
              )}
              <Input
                required
                name="password"
                type="password"
                placeholder="Pass: 123"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
              <Button
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Sign In
              </Button>
            </form>
          </Modal>
        </div>
      </div>
    </>
  );
}
