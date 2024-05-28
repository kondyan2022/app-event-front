import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { RegistrationPageWrapper } from "./RegistrationPage.styled";
import { CloseOutlined } from "@ant-design/icons";
import { MyModal } from "../../components/Modal/Modal";
import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import { useEffect, useRef } from "react";

export function RegistrationPage() {
  const { event } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const ref = useRef();

  const handleGoBack = () => {
    if (state?.back) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    disableBodyScroll(ref.current);
    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <MyModal>
      <RegistrationPageWrapper ref={ref}>
        <div className="panel">
          <p>Event registration</p>
          <button onClick={handleGoBack}>
            <CloseOutlined style={{ color: "steelblue" }} />
          </button>
        </div>
        <RegisterForm event={event} />
      </RegistrationPageWrapper>
    </MyModal>
  );
}
