import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { dataSignIn, dataSignUp } from '../../constant/constant';
import {
  Data,
  FormLoginType,
  FormRegisterType,
  TypeActivePanel,
} from '../../interfaces/interfaces';
import { Typography, Form , Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import FormIcon from './FormIcon';
import { ContainerForm } from './FormContainer.styled';
import { BaseButton } from '../Common/ButtonBase/ButtonBase';

const { Title } = Typography;

type FormContainerProps = {
  state: TypeActivePanel;
};

const FormContainer = ({ state }: FormContainerProps) => {
  const [formData, setFormData] = useState<Data>(dataSignIn);
  const { handleSubmit, control } = useForm<FormLoginType | FormRegisterType>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });
  const checkSignIn = state === 'sign-in';
  let timeoutId: NodeJS.Timeout;

  function returnData(): Promise<Data> {
    return new Promise(resolve => {
      timeoutId = setTimeout(() => {
        const data = state === 'sign-in' ? dataSignIn : dataSignUp;
        resolve(data);
      }, 300);
    });
  }

  useEffect(() => {
    returnData().then(data => {
      setFormData(data);
    });

    return () => {
      clearTimeout(timeoutId);
    };
  }, [state]);

  const handleRegister = (values: FormRegisterType) => {
    console.log('values Register', values);
  };

  const handleLogin = (values: FormLoginType) => {
    console.log('values Login', values);
  };

  const handleSubmitForm = (values: FormRegisterType | FormLoginType) => {
    if (checkSignIn) {
      if ('email' in values && 'password' in values) {
        handleLogin(values);
      }
    } else {
      if ('name' in values && 'email' in values && 'password' in values) {
        handleRegister(values);
      }
    }
  };

  return (
    <ContainerForm className={`${state}`}>
      <Form onFinish={handleSubmit(handleSubmitForm)}>
        <Title level={1}>{formData.title}</Title>
        <span className='sub-title'>{formData.subTitle1}</span>
        <FormIcon />
        {formData.fieldInput.map(value => (
          <Controller
            key={value.name}
            name={value.name}
            control={control}
            rules={{ required: true }}
            render={({ field }) =>
              value.name === 'password' ? (
                <Form.Item>
                  {field && (
                    <Input.Password
                      {...field}
                      placeholder={value.label}
                      prefix={<UserOutlined className='site-form-item-icon' />}
                    />
                  )}
                </Form.Item>
              ) : (
                <Form.Item>
                  {field && <Input {...field} placeholder={value.label} />}
                </Form.Item>
              )
            }
          />
        ))}
        <a href='#'>{formData.subTitle2}</a>
        <BaseButton>{formData.contentButton}</BaseButton>
      </Form>
    </ContainerForm>
  );
};

export default FormContainer;
