import styled from "styled-components";

export const InputLarge = styled.div`
  width: 100%;
  height: 45px;
  position: relative;
  border-radius: 10px;
  background-color: #181A20;
  border: 2px solid  #4dd784;

  input {
    width: 100%;
    height: 45px;
    padding-left: 10px;
    border: none;
    color: #333333;
    font-size: 18px;
    padding: 0 20px;
    line-height: 1.2;
    background: transparent;
   
  }
  input:focus,
  textarea:focus {
    outline: none;
  }
  input:-internal-autofill-selected {
    outline: none;
  }
  input:-webkit-autofill {
    -webkit-animation-delay: 1s; /* Safari support - any positive time runs instantly */
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  input:-internal-autofill-previewed,
  input:-internal-autofill-selected {
    background: #fff;
    line-height: normal;
    height 30px;
    margin-top: 5px;
    -webkit-text-fill-color: black !important;
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  @-webkit-keyframes autofill {
    0%,
    100% {
      color: #666;
      background: transparent;
    }
  }

  input:focus + span {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  input:focus-visible {
    outline: none;
  }
  span {
    top: -1px;
    left: -1px;
    opacity: 0;
    display: block;
    position: absolute;
    visibility: hidden;
    border-radius: 10px;
    pointer-events: none;
    transition: all 0.4s;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    transform: scaleX(1.1) scaleY(1.3);
    border: 1px solid #4dd784;
  }
`;

export const Label = styled.div`
  top: -10px;
  left: 15px;
  position: absolute;
  text-align: center;
  padding: 0px 3px;
  background: #181a20;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
`;
