import { useEffect, useState } from "react";
import { dataSignIn, dataSignUp } from "../../constant/constant";
import { Data, TypeActivePanel } from "../../interfaces/interfaces";
import { Typography, Form, Button, Input } from "antd";
import { UserOutlined } from '@ant-design/icons';
import FormIcon from "./FormIcon";
import { ContainerForm } from "./FormContainer.styled";
import { BaseButton } from "../Common/ButtonBase/ButtonBase";

const { Title } = Typography;

type FormContainerProps = {
  state: TypeActivePanel
}

const FormContainer = ({state} : FormContainerProps) => {
  const [formData, setFormData] = useState<Data>(returnData());

  function returnData(): Data {
    return state === "sign-in" ? dataSignIn : dataSignUp;
  }

  useEffect(() => {
    setFormData(returnData());
  }, [state]);

  return (
    <ContainerForm className={`${state}`}>
      <Form action="">
        <Title level={1}>{formData.title}</Title>
        <span className="sub-title">{formData.subTitle1}</span>
        <FormIcon/>
        {formData.fieldInput.map((value) => (
          <Form.Item key={value.name} >
            {value.name === "password" ? (
              <Input.Password placeholder={value.label}  prefix={<UserOutlined className="site-form-item-icon" />} />
            ): (
              <Input placeholder={value.label} />
            )}
          </Form.Item>
        ))}
        <a href="#">{formData.subTitle2}</a>
        <BaseButton>{formData.contentButton}</BaseButton>
      </Form>
    </ContainerForm>
  );
};

export default FormContainer;