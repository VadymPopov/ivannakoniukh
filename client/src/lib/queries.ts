import { gql, request } from "graphql-request";

type Badge = { id: string; label: string };
type Detail = { id: string; label: string };
type Outcome = { id: string; label: string };
type Image = { name: string; alternativeText: string; url: string };

export type Service = {
  documentId: string;
  title: string;
  price: number;
  groupPrice: number;
  description: string;
  slug: string;
  badges: Badge[];
  details: Detail[];
  outcomes: Outcome[];
  image: Image;
};

type GetServiceBySlugResponse = {
  services: Service[];
};

export type Event = {
  documentId: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: number;
  price: number;
  location: string;
};

type GetEventByIdResponse = {
  event: Event;
};

export const getServiceBySlug = async (
  slug: string
): Promise<Service | null> => {
  const GET_SERVICE_BY_SLUG = gql`
    query GetServiceBySlug($slug: String!) {
      services(filters: { slug: { eq: $slug } }) {
        documentId
        title
        price
        groupPrice
        description
        slug
        badges {
          documentId
          label
        }
        details {
          id
          label
        }
        outcomes {
          id
          label
        }
      }
    }
  `;

  const data = await request<GetServiceBySlugResponse>(
    process.env.NEXT_PUBLIC_GRAPHQL_URI || "http://localhost:1337/graphql",
    GET_SERVICE_BY_SLUG,
    { slug }
  );

  return data?.services[0] || null;
};

export const getEventById = async (
  documentId: string
): Promise<Event | null> => {
  const GET_EVENT_BY_ID = gql`
    query GetEventById($documentId: ID!) {
      event(documentId: $documentId) {
        title
        description
        documentId
        date
        time
        duration
        price
        location
      }
    }
  `;

  const data = await request<GetEventByIdResponse>(
    process.env.NEXT_PUBLIC_GRAPHQL_URI || "http://localhost:1337/graphql",
    GET_EVENT_BY_ID,
    { documentId: documentId }
  );

  return data?.event || null;
};
