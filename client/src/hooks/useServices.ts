import { gql, useQuery } from '@apollo/client';

import { Service } from '@/lib/queries';

type GetServicesData = {
  services: Service[];
};

export const useServices = (locale: string) => {
  const GET_SERVICES = gql`
    query GetServices($locale: I18NLocaleCode) {
      services(locale: $locale) {
        documentId
        title
        price
        groupPrice
        cardDescription
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

  const { loading, error, data } = useQuery<GetServicesData>(GET_SERVICES, {
    variables: { locale },
  });

  return {
    loading,
    error,
    services: data?.services || [],
  };
};
