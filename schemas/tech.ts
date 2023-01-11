import { TagIcon } from "@sanity/icons"

export default {
    name: 'tech',
    type: 'document',
    title: 'Tech',
    icon: TagIcon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string',
        },
        {
            name: 'show',
            Title: 'Show',
            type: 'boolean',
        },
    ],
}
