import useForm from "hook/useForm";
import Input from "component/Input";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Flex from "component/Flex";
import useLocalStorage from "hook/useLocalStorage";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage("TodoUser", {});
  const [token, setToken] = useLocalStorage("TodoToken", {});
  const [_, errors, validate, handleSubmit] = useForm({
    initialValue: {
      id: "",
      password: "",
    },
    onSubmit: async (values) => {
      const data = await fetch("/login", {
        method: "POST",
        body: JSON.stringify(values),
      })
        .then((result) => result.json())
        .catch((error) => console.error(error));
      if (data) {
        const { accessToken, user } = data;
        setUser(user);
        setToken(accessToken);
      }
      navigate("/todoList");
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
