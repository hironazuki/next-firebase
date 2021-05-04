module.exports = {
  client: {
    service: {
      name: 'my-graphql-app',
      localSchemaFile: './schema.graphql',
    },
    includes: ['./src/infra/graphql/**/*.graphql'],
  },
};
