import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
// import { useParticipant } from "../../hooks/useParticipant";
import { ParticipantCard } from "../../components/ParticipantCard/ParticipantCard";
import { EventParticipantWrapper } from "./EventParticipants.styled";
import { CloseOutlined } from "@ant-design/icons";

import { useEffect, useMemo, useRef, useState } from "react";
import { FindPanel } from "../../components/FindPanel/FindPanel";
import { MyModal } from "../../components/Modal/Modal";
import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";

export function EventParticipantsPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const ref = useRef();
  const { participant: data, event: eventData } = useLoaderData();
  const [filter, setFilter] = useState({ field: "", direction: "fullname" });

  const filteredList = useMemo(
    () => (filter.field ? data.filter((elem) => elem[filter.direction].includes(filter.field)) : data),
    [data, filter]
  );

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
      <EventParticipantWrapper>
        <div>
          <FindPanel onChange={setFilter} />
        </div>
        <div className="panel">
          <p>{`"${eventData.title}" participants `}</p>
          <button onClick={handleGoBack}>
            <CloseOutlined style={{ color: "steelblue" }} />
          </button>
        </div>
        <ul ref={ref}>
          {filteredList?.map(({ _id, fullname, email }) => (
            <li key={_id}>
              <ParticipantCard fullname={fullname} email={email}></ParticipantCard>
            </li>
          ))}
        </ul>
      </EventParticipantWrapper>
    </MyModal>
  );
}
