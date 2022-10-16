import styled from "@emotion/styled";

const Flex = ({ children }) => {
  return <FlexContainer>{children}</FlexContainer>;
};

const FlexContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export default Flex;
