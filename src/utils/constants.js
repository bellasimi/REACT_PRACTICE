export const MESSAGES_INPUT = {
  nickName: "1-5자로 공백없이 입력해주세요",
  id: "이메일 형식으로 입력해주세요",
  password: "1-8자로 공백없이 입력해주세요",
  passwordConfirm: "비밀번호와 일치하도록 입력해주세요",
};

export const PLACEHOLDERS_INPUT = {
  nickName: "닉네임",
  id: "아이디",
  password: "비밀번호",
  passwordConfirm: "비밀번호 확인",
};

export const REGEX_ID =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
export const REGEX_PASSWORD = /^\S{1,8}$/;
export const REGEX_NICKNAME = /^\S{1,5}$/;

export const LENGTH_PASSWORD = 8;
export const LENGTH_NICKNAME = 5;
