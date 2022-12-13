export default {
    title: 'Featured Projects',
    name: 'featuredProjects',
    type: 'document',
    fields: [
        {
            name: 'projects',
            title: 'Featured Projects',
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
                Rule.max(4).warning(
                    "Only 4 Featured Projects Allowed"
                ),
        },
    ],
}
