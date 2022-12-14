export const myStructure = (S: any) =>
    S.list()
        .title('Data')
        .items([
            S.listItem()
                .title('Settings')
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
