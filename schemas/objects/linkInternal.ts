import { LinkIcon } from '@sanity/icons'
import { defineField } from 'sanity'

export default defineField({
    title: 'Internal Link',
    name: 'linkInternal',
    type: 'object',
    icon: LinkIcon,
    fields: [
        // Title
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        // Reference
        {
            title: 'Reference',
            name: 'reference',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Show Link',
            name: 'show',
            type: 'boolean'
        },
    ],
    preview: {
        select: {
            reference: 'reference',
            referenceTitle: 'reference',
            title: 'title',
            hide: 'show'
        },
        prepare(selection) {
            const { reference, referenceTitle, title, hide } = selection

            let subtitle = []
            if (reference) {
                subtitle.push([`→ ${referenceTitle || reference?._id}`])
            }
            let linkTitle = []
            if (!hide) {
                linkTitle.push([`${title} (hidden)`])
            } else {
                linkTitle.push([`${title}`])
            }
            return {
                subtitle: subtitle.join(' '),
                title: linkTitle.join(' '),
            }
        },
    },
})
