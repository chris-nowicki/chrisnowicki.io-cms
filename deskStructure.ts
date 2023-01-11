import { CogIcon } from "@sanity/icons";

export const myStructure = (S: any) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Settings')
                .icon(CogIcon)
                .child(
                    S.document()
                        .schemaType('settings')
                        .documentId('settings')
                ),
            ...S.documentTypeListItems().filter(
                (listItem: any) =>
                    ![
                        'settings',
                    ].includes(listItem.getId())
            ),
        ])
