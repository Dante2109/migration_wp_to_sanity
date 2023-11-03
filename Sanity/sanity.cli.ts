import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ripwd1f6',
    dataset: 'production'
  },
  graphql: [
    {
      tag: "default",
      playground: true,
      generation: "gen3",
      nonNullDocumentFields: false,
    }
  ]
})
