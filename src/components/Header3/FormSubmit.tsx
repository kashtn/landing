import "./Header3.scss";
import { Input, Button, TelInput } from "../styled";
import { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addClient } from "../../redux/actions";
import { Modal } from "antd";
import { PropsType } from "../../type";

export const FormSubmit: FC<PropsType> = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [tel, setTel] = useState<string>("");

  const nameRegExp = /^([a-zA-Z])+$/;
  const telRegExp = /^(([8])+([9])+([0-9]){9})$/;
  const handleSubmit = (e: ChangeEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (
      nameRegExp.test(name) &&
      nameRegExp.test(lastName) &&
      telRegExp.test(tel)
    ) {
      dispatch(
        addClient({
          name,
          lastName,
          tel,
        })
      );
      setName("");
      setLastName("");
      setTel("");
      Modal.success({
        content: "Success!",
        centered: true,
      });
    } else {
      Modal.error({
        content: "Please fill inputs correct!",
        centered: true,
      });
    }
  };

  return (
    <>
      <div className="formContainer">
        <h1 className="title">Form</h1>
        <form name="submitForm">
          {!nameRegExp.test(name) && name.length > 0 && (
            <p className="error">Wrong name! (only latin)</p>
          )}
          <Input
            name="firstName"
            type="text"
            placeholder="First name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
          />
          {!nameRegExp.test(lastName) && lastName.length > 0 && (
            <p className="error">Wrong last name! (only latin)</p>
          )}
          <Input
            name="lastName"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setLastName(e.target.value);
            }}
          />
          {!telRegExp.test(tel) && tel.length > 0 && (
            <p className="error">Wrong telephone number!</p>
          )}
          <TelInput
            name="tel"
            type="tel"
            placeholder="Phone number"
            value={tel}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setTel(e.target.value);
            }}
          />
          <Button
            type="submit"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              handleSubmit(e as any);
            }}
          >
            Submit
          </Button>
        </form>
      </div>
      <div className="imagesContainer">
        <div className="back">
          <div className="left">
            <img
              width="200"
              height="240"
              alt="/"
              src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png"
            />
          </div>
          <div className="right">
            <img
              width="200"
              height="240"
              alt="/"
              src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png"
            />
          </div>
        </div>
        <div className="front">
          <img
            height="200"
            width="300"
            alt="/"
            src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png"
          />
        </div>
      </div>
    </>
  );
};
