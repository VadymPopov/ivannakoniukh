import { gql, useQuery } from '@apollo/client';

import { Event } from '@/lib/queries';

type GetEventsData = {
  events: Event[];
};

export const useEvents = (locale: string) => {
  const GET_EVENTS = gql`
    query GetEvents($locale: I18NLocaleCode) {
      events(locale: $locale) {
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

  const { loading, error, data } = useQuery<GetEventsData>(GET_EVENTS, {
    variables: { locale },
  });

  return {
    loading,
    error,
    events: data?.events || [],
  };
};
