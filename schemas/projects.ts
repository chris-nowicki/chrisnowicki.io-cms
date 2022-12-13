export default {
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
        {
            name: 'projectName',
            title: 'Project Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'projectName',
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input: string) =>
                    input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            validation: (Rule: any) =>
                Rule.max(119).warning(
                    "The description shouldn't be longer than 119 characters"
                ),
        },
        {
            name: 'gitHubUrl',
            title: 'GitHub URL',
            type: 'url',
        },
        {
            name: 'liveSiteUrl',
            title: 'Live Site URL',
            type: 'url',
        },
        {
            name: 'image',
            title: 'Project Image',
            type: 'image',
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'tech' }] }],
        },
        {
            name: 'projectDetails',
            title: 'Project Details',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }],
        },
    ],
}
