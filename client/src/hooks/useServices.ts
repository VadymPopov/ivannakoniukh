import { Service } from "@/lib/queries";
import { gql, useQuery } from "@apollo/client";

type GetServicesData = {
  services: Service[];
};

export const useServices = () => {
  const GET_SERVICES = gql`
    query GetServices {
      services {
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
        image {
          name
          alternativeText
          url
        }
      }
    }
  `;

  const { loading, error, data } = useQuery<GetServicesData>(GET_SERVICES);

  return {
    loading,
    error,
    services: data?.services || [],
  };
};
