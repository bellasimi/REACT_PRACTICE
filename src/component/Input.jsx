import { MESSAGES_INPUT, PLACEHOLDERS_INPUT } from "utils/constants";
import styled from "@emotion/styled";

const Input = ({ name, error, onChange, height }) => {
  const message =
    name === "passwordConfirm"
      ? error !== "" && MESSAGES_INPUT[name]
      : MESSAGES_INPUT[name];
  const isPassword = name === "password" || name === "passwordConfirm";
  const isValid = error === "";
  return (
    <>
      <StyledInput
        name={name}
        type={isPassword ? "password" : "text"}
        onChange={onChange}
        height={height}
        placeholder={PLACEHOLDERS_INPUT[name]}
        isValid={isValid}
      />
      <InputMessage isValid={isValid}>{message}</InputMessage>
    </>
  );
};

export default Input;

const StyledInput = styled.input`
  height: ${({ height }) => (height ? height : "56px")};
  box-sizing: border-box;
  width: 100%;
  border-radius: 10px;
  border: 1px solid
    ${({ theme, isValid }) =>
      isValid ? theme.colors.borderBasic : theme.colors.error};
  outline: none;
  margin-top: 10px;
  padding: 16px 16px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.mainBlack};
  }
`;

const InputMessage = styled.div`
  font-size: 12px;
  margin-left: 5px;
  color: ${({ theme, isValid }) =>
    isValid ? theme.colors.fontLight : theme.colors.error};
`;
