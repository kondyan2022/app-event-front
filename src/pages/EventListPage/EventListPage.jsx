import { Outlet, useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import { EventCard } from "../../components/EventCard/EventCard";

import { SortPanel } from "../../components/SortPanel/SortPanel";
import { paramsToObject } from "../../utils";
import { EventListWrapper } from "./EventListPage.styled";
import { Pagination } from "antd";

export function EventListPage() {
  const {
    data: { data, itemCount, limit, page },
  } = useLoaderData();

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // let currentPage = parseInt(searchParams.get("page"));
  // if (isNaN(currentPage)) {
  //   currentPage = 1;
  // }

  console.log({ itemCount, limit, page });

  const handleView = (id) => {
    navigate(`event/${id}`, { state: { back: true } });
  };

  const handleRegister = (id) => {
    navigate(`registration/${id}`, { state: { back: true } });
  };

  const handleChangePage = (page) => {
    setSearchParams((prev) => {
      const params = paramsToObject(prev);
      params.page = page;
      return params;
    });
  };

  return (
    <EventListWrapper>
      <div>
        <SortPanel onChange={setSearchParams} {...paramsToObject(searchParams)} />
      </div>
      <ul className="list">
        {data?.map(({ id, _id, title, description, organizer, event_date: time }) => (
          <li key={id}>
            <EventCard
              id={id}
              _id={_id}
              title={title}
              description={description}
              time={time}
              organizer={organizer}
              onRegister={handleRegister}
              onView={handleView}
            ></EventCard>
          </li>
        ))}
      </ul>
      <Pagination
        rootClassName="pag"
        onChange={handleChangePage}
        current={page}
        pageSize={limit}
        total={itemCount}
        showSizeChanger={false}
      />

      <Outlet />
    </EventListWrapper>
  );
}
