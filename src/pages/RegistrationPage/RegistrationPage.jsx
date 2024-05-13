import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { RegistrationPageWrapper } from "./RegistrationPage.styled";
import { CloseOutlined } from "@ant-design/icons";

export function RegistrationPage() {
  const { event } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleGoBack = () => {
    if (state?.back) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <RegistrationPageWrapper>
      <div className="panel">
        <p>Event registration</p>
        <button onClick={handleGoBack}>
          <CloseOutlined style={{ color: "steelblue" }} />
        </button>
      </div>
      <RegisterForm event={event} />
    </RegistrationPageWrapper>
  );
}
