import { mutationFunction, queryFunction } from "..";
import { paramsToObject } from "../../utils";

export async function eventLoader({ request }) {
  const url = new URL(request.url);
  const params = paramsToObject(url.searchParams);
  const data = await queryFunction("events", params);
  return { data };
}

export async function participantsLoader({ params }) {
  const data = await queryFunction(`participants/${params.event}`);

  return data;
}

export async function addEventParticipantAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const result = await mutationFunction(`participants/${params.event}`, data);
  return result;
}
