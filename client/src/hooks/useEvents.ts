import { Event } from "@/lib/queries";
import { gql, useQuery } from "@apollo/client";

type GetEventsData = {
  events: Event[];
};

export const useEvents = () => {
  const GET_EVENTS = gql`
    query GetEvents {
      events {
        documentId
        title
        description
        location
        date
        time
        duration
        price
      }
    }
  `;

  const { loading, error, data } = useQuery<GetEventsData>(GET_EVENTS);

  return {
    loading,
    error,
    events: data?.events || [],
  };
};
