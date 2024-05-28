import { Outlet, useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import { EventCard } from "../../components/EventCard/EventCard";

import { SortPanel } from "../../components/SortPanel/SortPanel";
import { paramsToObject } from "../../utils";
import { EventListWrapper } from "./EventListPage.styled";

import { useEffect, useRef, useState } from "react";

export function EventListPage() {
  const {
    data: { data: loadedData, itemCount, limit, page },
  } = useLoaderData();
  const [data, setData] = useState(loadedData);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const ref = useRef();
  const firstRender = useRef(true);
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    if (firstRender.current) {
      console.log(searchParams.get("page"));
      if (searchParams.get("page")) {
        setSearchParams((prev) => {
          const params = paramsToObject(prev);
          delete params.page;
          return params;
        });
      }
      firstRender.current = false;
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    setCurrentPage((prev) => (prev < page ? page : prev));
  }, [page]);

  useEffect(() => {
    if (!loadedData) {
      return;
    }
    setData((prev) => {
      console.log(prev);
      const ids = prev?.map(({ _id }) => _id) || [];
      return [...prev, ...loadedData.filter((elem) => !ids.includes(elem._id))];
    });
  }, [currentPage, loadedData]);

  const handleView = (id) => {
    navigate({ pathname: `events/${id}`, search: searchParams.toString() }, { state: { back: true } });
  };

  const handleRegister = (id) => {
    navigate(
      {
        pathname: `registration/${id}`,
        search: searchParams.toString(),
      },
      { state: { back: true } }
    );
  };

  const handleNextPageLoad = () => {
    if (currentPage > itemCount / limit) {
      return;
    }

    setSearchParams((prev) => {
      const params = paramsToObject(prev);
      params.page = page + 1;
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
      <button ref={ref} onClick={handleNextPageLoad}>
        load down
      </button>
      {/* <Pagination
        rootClassName="pag"
        onChange={handleChangePage}
        current={page}
        pageSize={limit}
        total={itemCount}
        showSizeChanger={false}
      /> */}
      <Outlet />
    </EventListWrapper>
  );
}
