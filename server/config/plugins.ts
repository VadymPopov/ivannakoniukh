export default () => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        service: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
});
