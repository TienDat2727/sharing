import FormContainer from "../../components/FormCommon/FormContainer"
import TooglePanel from "../../components/ToogleCommon/ToogelPanel"
import { TypeActivePanel } from "../../interfaces/interfaces"
import { Container, Body } from "./Auth.styled"

const AuthPage = () => {
  const stateValue: TypeActivePanel = "sign-in";
  const handleChange = () => {
    console.log("Đã click");
  }
  return (
    <Body>
      <Container >
        <div className="active">
        <FormContainer state="sign-in" />
        <TooglePanel handleChange={handleChange} />
        </div>
      </Container>
    </Body>
    )
}

export default AuthPage;