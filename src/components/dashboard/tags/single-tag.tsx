import { Badge, BadgeProps, Box, Flex, HStack, Icon, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, ThemeComponents, ThemingProps, useTheme } from '@chakra-ui/react'
import React from 'react'
import { FaEllipsisH } from 'react-icons/fa'

interface Tag {
    label: string;
    description: string;
    color: string;
}

export default function SingleTag({ item }: { item: Tag }) {
    return (
        <Flex justifyContent={"space-between"} py={"4"}>
            <HStack>
                <Box maxWidth={"xs"} width={"xs"}><Badge colorScheme={item.color} textTransform={"lowercase"} py="0.5" px="2" borderRadius={"lg"}>{item.label}</Badge></Box>
                <Text>{item.description}</Text>
            </HStack>
            <Menu>
                <MenuButton as={Box}>
                    <IconButton variant={"outline"} colorScheme='gray' icon={<Icon as={FaEllipsisH} />} aria-label='More options' />
                </MenuButton>
                <MenuList>
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Delete</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}
