import Login from "component/Login";
import SignUp from "component/SignUp";
import styled from "@emotion/styled";
import { useState } from "react";

function Home() {
  const [currentTab, setCurrentTab] = useState("login");
  const handleTabActive = (tab) => {
    setCurrentTab(tab);
  };
  return (
    <Container>
      <About>
        <Title>
          오늘의 일을 <br />
          시작해 볼까요?
        </Title>
        <Text>
          오늘의 일과 함께라면
          <div>TodoList를 더 쉽게 기록하고 관리할 수 있어요 </div>
        </Text>
      </About>
      <FormBox>
        <Tab>
          <TabItem
            onClick={() => handleTabActive("login")}
            select={currentTab === "login"}
          >
            로그인
          </TabItem>
          <TabItem
            onClick={() => handleTabActive("signUp")}
            select={currentTab === "signUp"}
          >
            회원가입
          </TabItem>
        </Tab>
        {currentTab === "login" ? <Login /> : <SignUp />}
      </FormBox>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  margin: 40px 80px 20px 40px;
  display: flex;
  justify-content: space-around;
`;

const About = styled.div``;

const Title = styled.h1`
  font-size: 70px;
  color: ${({ theme }) => theme.colors.mainWhite};
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.fontBlue};
  & > div {
    font-size: 32px;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.mainWhite};
  }
`;
const FormBox = styled.div`
  width: 450px;
  min-height: 600px;
  border-radius: 20px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.mainWhite};
`;

const Tab = styled.div`
  margin: 55px 15px 0 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const TabItem = styled.div`
  cursor: pointer;
  font-size: 22px;
  font-weight: 700;
  border-bottom: ${({ select }) => select && `4px solid #4991FD`};
`;
