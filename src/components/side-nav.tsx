import { Avatar, Box, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaChevronDown, FaChevronUp, FaHome } from 'react-icons/fa'
import Button from './ui/button'
import Link from './ui/link'
import SideNavLink from './side-bar-link'
import { dashboardConfig } from '@/src/config/dashboard'

export default function SideNavigation() {
    return (
        <Flex maxWidth={["300px"]} maxH={"100vh"} height={"100vh"} flexDir={"column"} alignItems={"flex-start"} justifyContent={"space-between"} borderRight={"1px"} borderColor={"gray"}>
            <Box px={"16px"} py={"24px"} width={"full"} overflowY={"auto"} >
                {/* Side Navigation Header */}
                <HStack>
                    <Avatar
                        size='md'
                        name='Prosper Otemuyiwa'
                        src='https://senja-lh3.b-cdn.net/a/ALm5wu3wbzsBQ5txejoQuxNCMksbHpsGPYNtxInUN9kKlQ=s96-c?width=100&height=100'
                    />

                    <Menu>
                        <MenuButton as={Box}>
                            <HStack>
                                <Text fontWeight={"bold"} fontSize={"lg"}>Joseph Ajibodu</Text>
                                <Icon as={FaChevronDown} />
                            </HStack>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                </HStack>

                {/* Side Navigation Body */}
                <Flex flexDir={"column"} my={"8"}>
                    {dashboardConfig.sidebarNav.map((sideBarItem) => <SideNavLink navItem={sideBarItem} key={sideBarItem.title} />)}
                </Flex>
            </Box>

            {/* Side Navigation Footer */}
            <HStack borderTop={"1px"} borderColor={"gray"} py={"3"} px={"16px"} width={"full"} justifyContent={"space-between"}>
                <HStack>
                    <Avatar
                        size='sm'
                        name='Cremir'
                        src='https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://cremir.org&size=64'
                    />
                    <Text fontWeight={"bold"} fontSize={"lg"}>Cremir</Text>
                </HStack>
                <Menu>
                    <MenuButton as={Box}>
                        <Icon as={FaChevronUp} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Project One</MenuItem>
                        <MenuItem>Project Two</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Flex>
    )
}
