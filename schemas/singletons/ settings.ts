import { defineType, defineField } from 'sanity'

const TITLE = 'Settings'

export default defineType({
    name: 'settings',
    title: TITLE,
    type: 'document',
    groups: [
        {
            default: true,
            name: 'navigation',
            title: 'Navigation',
        },
        {
            name: 'profilePicture',
            title: 'Profile Picture',
        },
        {
            name: 'featuredProjects',
            title: 'Featured Projects',
        },
    ],
    fields: [
        //Menu
        defineField({
            name: 'navigation',
            title: 'Navigation',
            type: 'object',
            group: 'navigation',
            options: {
                collapsed: false,
                collapsible: true,
            },
            fields: [
                // Links
                defineField({
                    name: 'links',
                    title: 'Links',
                    type: 'array',
                    of: [
                        {
                            type: 'linkInternal',
                        },
                        {
                            type: 'linkExternal',
                        },
                    ],
                }),
                defineField({
                    name: 'showResume',
                    title: 'Show Resume',
                    type: 'boolean',
                }),
            ],
        }),
        defineField({
            name: 'profilePicture',
            title: 'Profile Picture',
            type: 'image',
            group: 'profilePicture',
            options: {
                collapsed: false,
                collapsible: true,
            },
        }),
        defineField({
            name: 'featuredProjects',
            title: 'Featured Projects',
            type: 'object',
            group: 'featuredProjects',
            options: {
                collapsed: false,
                collapsible: true,
            },
            fields: [
                // Links
                defineField({
                    name: 'featured',
                    title: 'Projects',
                    type: 'array',
                    of: [
                        {
                            type: 'reference',
                            to: [
                                {
                                    type: 'projects',
                                },
                            ],
                            options: {
                                disableNew: true,
                            },
                        },
                    ],
                    validation: (Rule: any) =>
                        Rule.max(4).warning('Only 4 Featured Projects Allowed'),
                }),
                defineField({
                    name: 'showProjects',
                    title: 'Show Projects',
                    type: 'boolean',
                }),
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: TITLE,
            }
        },
    },
})
