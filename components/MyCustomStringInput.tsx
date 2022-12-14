import { useCallback } from 'react'
import { Stack, Text, TextInput } from '@sanity/ui'
import { set, unset } from 'sanity'

export const MyCustomStringInput = (props: any) => {
    const { elementProps, onChange, value = '' } = props

    const handleChange = useCallback(
        (event: any) => {
            const nextValue = event.currentTarget.value
            onChange(nextValue ? set(nextValue) : unset())
        },
        [onChange]
    )

    return (
        <Stack space={2}>
            <TextInput
                {...elementProps}
                onChange={handleChange}
                value={value}
            />
            <Text>Characters: {value.length}</Text>
        </Stack>
    )
}