import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from './schemas'
import { myStructure } from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'cdn-portfolio',

  projectId: '4zd5l3k5',
  dataset: 'production',

  plugins: [deskTool({
    structure: myStructure,
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
