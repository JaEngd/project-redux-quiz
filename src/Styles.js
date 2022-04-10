import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Flex = styled.div`
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 20px;
  width: 175px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    &:hover {
      background-color: ${(props) => props.disabled
      ? "none"
      : "#BB6DD7"};
      color: ${(props) => props.disabled
      ? "none"
      : "white"};
    }
  }
`;

export const ProgressIcons = styled.p`
  background-color: ${(props) => props.right
    ? "#52af5c"
    : props.wrong
    ? "#fc2041"
    : "grey"};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;

export const ProgressIconsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const QuestionContainer = styled(Flex)`
  background-image: url("/images/background.jpg");
  justify-content: center;
  overflow: hidden;
  height: auto;
  justify-content: space-evenly;
  width: 100%;

  @media (min-height: 400px) {
    height: 100%;
  }
`;

export const FlexQuestionDiv = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
`;

export const QuestionHeading = styled.h2`
  text-transform: uppercase;
`;

export const Question = styled.h3`
  text-align: center;
`;

export const QuestionAlternatives = styled(Div)`
  width: 500px;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const QuestionButtons = styled(Button)`
  margin: 10px;
`;

export const ActionButtons = styled(Button)`
  margin: 40px 20px 20px;

  @media (min-width: 768px) {
    margin: 80px 20px 20px;
  }
`;

export const Background = styled(Flex)`
  background-image: url("/images/track.jpg");
  overflow: hidden;
  height: auto;

  @media (min-height: 900px) {
    height: 100%;
  }
`;

export const ResultHeading = styled.h2`
  padding-top: 50px;
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
  color: #333333;
  text-shadow: 1px 1px 0px #fff, 7px 6px 0px rgb(0 0 0 / 15%);

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 768px) {
    font-size: 38px;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 50px 20px 25px;
  text-align: center;
  padding-top: 60px;
`;

export const RightAnswerWrapper = styled.section`
  background-color: #BB6DD7;
  border-radius: 10px;
  padding: 10px;
  color: white;
  margin-bottom: 20px;
  max-width: 500px;
  width: 100%;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const RightAnswer = styled.p`
  margin-bottom: 0;
`;

export const RestartButton = styled.button`
  margin: 0 0 30px;
  padding: 10px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  font-weight: 600;
  width: 175px;
  color: white;

  &:hover {
    background-color: white;
    color: black;
  }
`;

//

export const WelcomeWrapper = styled.div`
  font-family: 'Chango';
  position: absolute;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  object-fit: cover;
  text-align: center;
  background-image: url("/images/bgwelcome.png");
`;

export const WelcomeContent = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const WelcomeTitle = styled.h1`
  position: relative;
  align-items: center;
  text-align: center;
  display: flex;
  weight: 400, regular;
  font-size: 80px;
  background: linear-gradient(94.9deg, #FFE4C4 19.79%, #FECA7D 49.29%, #FF8A00 87.96%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const WelcomeBtn = styled.button`
  border-radius: 20px;
  width: 140px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: bold;
  color: white;
  border: 0 none;
  cursor: pointer;
  padding: 10px 5px;
  margin: 2px 5px;

  &:hover {
    background-color: transparent;
    border: 2px solid #fd9a89;
  }
`;