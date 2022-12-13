export default {
  title: 'Site Settings',
  name: 'siteSettings',
  type: 'document',
  fields: [
    {
      title: 'Site Settings',
      name: 'siteSettingsName',
      type: 'string',
      hidden: true,
  },
    {
      title: 'Profile Picture',
      name: 'profilePicture',
      type: 'image',
    },
    {
      title: 'Show Projects',
      name: 'showProjects',
      type: 'boolean'
    }
  ],
}