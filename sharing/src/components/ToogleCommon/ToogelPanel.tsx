import { Typography, Button } from "antd";
import { TypeActivePanel } from "../../interfaces/interfaces";
import { dataToogleSignUp } from "../../constant/constant";
import { BaseButton } from "../Common/ButtonBase/ButtonBase";

const {Title} = Typography;
const {Paragraph} = Typography;

interface TooglePanelProps {
  handleChange: () => void;
}

const TooglePanel = ({ handleChange} : TooglePanelProps) => {
  
  const onChange = () => handleChange();

  return (
    <div className="toogle-container">
      <div className="toogle">
        <div className="toogle-panel toogle-right">
          <Title>{dataToogleSignUp.titleToogle}</Title>
          <Paragraph>{dataToogleSignUp.subTitleToogle}</Paragraph>
          <BaseButton onClick={onChange}>{dataToogleSignUp.buttonToogle}</BaseButton>
        </div>
      </div>
    </div>
  )
}

export default TooglePanel;