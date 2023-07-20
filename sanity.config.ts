import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'

export default defineConfig({
  name: 'default',
  title: 'I18nPluginTC',

  projectId: 'yw4mdbre',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'fr', title: 'French'}
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['string'],
    })
  ],

  schema: {
    types: schemaTypes,
  },
})
