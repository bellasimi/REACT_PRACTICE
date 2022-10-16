import useForm from "hook/useForm";
import { useNavigate } from "react-router-dom";
import Input from "component/Input";
import Flex from "component/Flex";
import styled from "@emotion/styled";

const SignUp = () => {
  const navigate = useNavigate();
  const [_, errors, validate, handleSubmit] = useForm({
    initialValue: {
      nickName: "",
      id: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      console.log("회원가입 api 호출", values);
      navigate("/todoList");
    },
  });

  return (
    <Flex>
      <StyledForm onSubmit={handleSubmit}>
        <Input name="nickName" error={errors.nickName} onChange={validate} />
        <Input name="id" error={errors.id} onChange={validate} />
        <Input name="password" error={errors.password} onChange={validate} />
        <Input
          name="passwordConfirm"
          error={errors.passwordConfirm}
          onChange={validate}
        />
        <button type="submit">회원가입</button>
      </StyledForm>
    </Flex>
  );
};

export default SignUp;

const StyledForm = styled.form`
  margin-top: 20px;
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > button {
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    border: none;
    color: ${({ theme }) => theme.colors.mainWhite};
    width: 100%;
    height: 56px;
    cursor: pointer;
    border-radius: 10px;
    box-sizing: border-box;
    margin-top: 20px;
  }
`;
