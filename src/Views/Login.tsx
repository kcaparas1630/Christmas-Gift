import { FC, useState } from "react";
import HeartLineImg from "../assets/heart-line.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  LoginSection,
  InputWrapper,
  TrimTicket,
  RightContainer,
  LeftContainer,
  H2Text,
  DashedLine,
  CircleTopper,
  H3Text,
  SubmitButton,
  HeartLine,
  Heartbeat,
  LoadingContainer,
} from "./Styled-components/Login";

const Login: FC = () => {
  const [isSubmitted, setSubmitted] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const usernameElement = document.getElementById(
      "username"
    ) as HTMLInputElement;
    const passwordElement = document.getElementById(
      "password"
    ) as HTMLInputElement;

    const usernameValue = usernameElement.value;
    const passwordValue = passwordElement.value;
    const SECRETUSERNAME = import.meta.env.VITE_USERNAME;
    const SECRETPASSWORD = import.meta.env.VITE_PASSWORD;
    if (usernameValue === SECRETUSERNAME && passwordValue === SECRETPASSWORD) {
      setSubmitted(true);
      setTimeout(() => {
        navigate("/home");
      }, 10000);
    }
  };
  return (
    <LoginSection>
      {!isSubmitted ? (
        <>
          <TrimTicket>
            <CircleTopper top="-20px" left="-20px" />
            <CircleTopper size="90px" top="-40px" left="17%" />
            <CircleTopper top="-20px" left="95%" />
            <H3Text>Love Coupon</H3Text>
          </TrimTicket>
          <FormContainer>
            <LeftContainer>
              <H2Text>Tear hear to use</H2Text>
              <DashedLine />
            </LeftContainer>
            <RightContainer>
              <InputWrapper>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="What is your name"
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="passwrd"
                  placeholder="Our usual password"
                />
              </InputWrapper>
              <SubmitButton type="submit" onClick={handleClick}>
                LOGIN
              </SubmitButton>
            </RightContainer>
          </FormContainer>
          <TrimTicket>
            <CircleTopper top="30px" left="-20px" />
            <CircleTopper size="90px" top="40px" left="17%" />
            <CircleTopper top="30px" left="95%" />
          </TrimTicket>
          <HeartLine
            src={HeartLineImg}
            alt="heart line banner image"
            top="60%"
            left="0"
          />
          <HeartLine
            src={HeartLineImg}
            alt="heart line banner image"
            top="-15%"
            left="60%"
            rotate
          />
        </>
      ) : (
        <LoadingContainer>
          <Heartbeat>
            {/** 1st Heart */}
            <div className="loadingio-spinner-heart-2by998twmg9">
              <div className="ldio-yzaezf3dcml">
                <div>
                  <div></div>
                </div>
              </div>
            </div>
            {/** 2nd Heart */}
            <div className="loadingio-spinner-heart-2by998twmg9">
              <div className="ldio-yzaezf3dcml">
                <div>
                  <div></div>
                </div>
              </div>
            </div>
            {/** 3rd Heart */}
            <div className="loadingio-spinner-heart-2by998twmg9">
              <div className="ldio-yzaezf3dcml">
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </Heartbeat>
          <p className="cursor typewriter-animation">Thank you for your patience. I'm thankful for all you do.</p>
        </LoadingContainer>
      )}
    </LoginSection>
  );
};

export default Login;
