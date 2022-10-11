import useForm from "hook/useForm";
import Input from "component/Input";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Flex from "component/Flex";
import useLocalStorage from "hook/useLocalStorage";
import { postLogin } from "service";
import useAxios from "hook/useAxios";

const Login = () => {
  const navigate = useNavigate();
  const [, setUser] = useLocalStorage("TodoUser", {});
  const [, setToken] = useLocalStorage("TodoToken", {});
  const { isLoading, request } = useAxios({
    apiFn: postLogin,
    onSuccess: ({ accessToken, user }) => {
      setToken(accessToken);
      setUser(user);
      navigate("/todoList");
    },
  });

  const [, errors, validate, handleSubmit] = useForm({
    initialValue: {
      id: "",
      password: "",
    },
    onSubmit: async (values) => {
      !isLoading && (await request(values));
    },
  });
  
  return (
    <Flex>
      <StyledForm onSubmit={handleSubmit}>
        <Input name="id" error={errors.id} onChange={validate} />
        <Input name="password" error={errors.password} onChange={validate} />
        <button type="submit">로그인</button>
      </StyledForm>
    </Flex>
  );
};

export default Login;

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
