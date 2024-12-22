import styled from "@emotion/styled";
import StyledLoginInterface from "../../Interface/CircleCoordinates";

const LoginSection = styled.section`
  label: LoginSection;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const FormContainer = styled.div`
  display: flex;
  background-color: #b95066;
  color: #f7f1f1;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 50%;
  height: 30%;
`;

/* Left Container */
const LeftContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  transform: rotate(270deg);
`;

const H2Text = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.8rem;
  text-align: center;
`;
const DashedLine = styled.hr`
  border: 2px dashed #f7f1f1;
  width: 90%;
`;

/* Right Container */
const RightContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  label {
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
  }
  input {
    border: 0;
    border-radius: 4%;
    height: 30px;
    width: 96%;
    padding-left: 12px;

    -webkit-box-shadow: 10px 10px 5px 0px rgba(125, 119, 125, 1);
    -moz-box-shadow: 10px 10px 5px 0px rgba(125, 119, 125, 1);
    box-shadow: 10px 10px 5px 0px rgba(125, 119, 125, 1);

  }
`;

const TrimTicket = styled.div`
  background-color: #e9808b;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 5%;
  padding: 24px;
  margin: -10px 0 -10px 0;
  z-index: 0;
  position: relative;
`;

const CircleTopper = styled.div<StyledLoginInterface>`
    width: ${(props) => props.size ? props.size : '70px'};
    height: ${(props) => props.size ? props.size : '70px'};
    border-radius: 100%;
    background-color: #f9cad7;
    position: absolute;
    top: ${(props) => props.top ? props.top : '0'};
    left: ${(props) => props.left ? props.left : '0'};
    z-index: 1;
`;

const H3Text = styled.h3`
    font-family: "Yellowtail", sans-serif;
    font-size: 2.5rem; 
    color: #f7f1f1;
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  background-color: #84655c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.5s;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  &:hover {
    background-color: #6d6875;
    scale: 1.05;
  }
`;

const HeartLine = styled.img<StyledLoginInterface>`
    width: 40%;
    height: 40%;
    position: absolute;
    left: ${(props) => props.left ? props.left : '0' };
    top: ${(props) => props.top ? props.top : '0' };
    transform: ${(props) => props.rotate && 'rotateY(180deg)'};
`;

export {
  LoginSection,
  FormContainer,
  InputWrapper,
  TrimTicket,
  LeftContainer,
  RightContainer,
  H2Text,
  DashedLine,
  CircleTopper,
  H3Text,
  SubmitButton,
  HeartLine,
};
