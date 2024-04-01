export interface FieldInput {
  name: string;
  label: string;
}

export interface Data {
  title: string;
  subTitle1: string;
  fieldInput: FieldInput[];
  subTitle2: string | undefined;
  contentButton: string;
}

export interface DataToogle {
  titleToogle: string;
  subTitleToogle: string;
  buttonToogle: string;
}

export interface FormLoginType {
  email: string;
  password: string;
}

export interface FormRegisterType {
  name: string;
  email: string;
  password: string;
}

export type TypeActivePanel = 'sign-in' | 'sign-up';
