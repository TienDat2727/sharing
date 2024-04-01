import { Data, DataToogle } from "../interfaces/interfaces";

export const dataSignIn: Data = {
    title: "Sign In",
    subTitle1: "or use your email password",
    fieldInput: [
      {email: "Email"},
      {password: "Password"}
    ],
    subTitle2: "Forget Your Password",
    contentButton:  "Sign In",
}

export const dataSignUp: Data = {
  title: "Create Account",
  subTitle1: "or use your email for register action",
  fieldInput: [
    {name:  "Name"},
    {email: "Email"},
    {password: "Password"}
  ],
  subTitle2: undefined,
  contentButton:  "Create Register",
}

export const dataToogleSignIn: DataToogle = {
  titleToogle: "Hello, Friend!",
  subTitleToogle: "Enter your Personal details to use all of site feature",
  buttonToogle: "Sign In"
}

export const dataToogleSignUp: DataToogle = {
  titleToogle: "Welcome Back!",
  subTitleToogle: "Enter your Personal details to use all of site feature",
  buttonToogle: "Sign Up"
}