import { Badge, BadgeProps, Box, Flex, HStack, Icon, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, ThemeComponents, ThemingProps, useBreakpointValue, useMediaQuery, useTheme } from '@chakra-ui/react'
import React from 'react'
import { FaEllipsisH } from 'react-icons/fa'

interface Tag {
    label: string;
    description: string;
    color: string;
}

export default function SingleTag({ item }: { item: Tag }) {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)', {
        ssr: true,
        fallback: false, // return false on the server, and re-evaluate on the client side
      })

    return (
        <Flex justifyContent={"space-between"} py={"4"}>
            <HStack>
                <Box maxWidth={"48"} width={"xs"}><Badge colorScheme={item.color} textTransform={"lowercase"} py="0.5" px="2" borderRadius={"lg"}>{item.label}</Badge></Box>
                {isLargerThan600 && <Text>{item.description}</Text>}
            </HStack>
            <Menu>
                <MenuButton cursor={"pointer"} as={Box}>
                    <IconButton  variant={"outline"} colorScheme='gray' icon={<Icon as={FaEllipsisH} />} aria-label='More options' />
                </MenuButton>
                <MenuList>
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Delete</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}
