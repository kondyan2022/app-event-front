import { ParticipantCardWrapper } from "./ParticipantCard.styled";

export function ParticipantCard({ fullname, email }) {
  return (
    <ParticipantCardWrapper>
      <p>Full name</p>
      <span>{fullname}</span>
      <p>E-mail</p>
      <a href={`mailto:${email}`}>{email}</a>
    </ParticipantCardWrapper>
  );
}
