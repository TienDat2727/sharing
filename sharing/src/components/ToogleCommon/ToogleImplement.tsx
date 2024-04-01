import { Typography } from "antd";
import { DataToogle, TypeActivePanel } from "../../interfaces/interfaces"
import { dataToogleSignIn, dataToogleSignUp } from "../../constant/constant";
import { BaseButton } from "../Common/ButtonBase/ButtonBase";
import { useEffect, useState } from "react";
const {Title, Paragraph} = Typography;

interface ToogleImplementProps {
  state: TypeActivePanel;
  handleClick: () => void;
}

const ToogleImplement = ({state, handleClick} : ToogleImplementProps  ) => {
  const [formData, setFormData] = useState<DataToogle>(returnData());

  function returnData(): DataToogle {
    return state === "sign-in" ? dataToogleSignUp : dataToogleSignIn;
  }

  useEffect(() => {
    setFormData(returnData());
  }, [state]);
  return (
  <div className="toogle-panel toogle-right">
    <Title>{dataToogleSignUp.titleToogle}</Title>
    <Paragraph>{dataToogleSignUp.subTitleToogle}</Paragraph>
    <BaseButton onClick={handleClick}>{dataToogleSignUp.buttonToogle}</BaseButton>
  </div>
  )
}