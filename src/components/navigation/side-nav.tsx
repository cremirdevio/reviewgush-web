import { Avatar, Box, Drawer, DrawerContent, DrawerOverlay, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList, Text, VStack, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FaChevronDown, FaChevronUp, FaHome } from 'react-icons/fa'
import SideNavLink from './side-bar-link'
import { dashboardConfig } from '@/src/config/dashboard'
import SideNavigationContent from './side-nav-content'
import { NavigationContext } from '@/src/contexts/navigation-context'

export default function SideNavigation() {
    const [isLargerThanMobile] = useMediaQuery("(min-width: 800px)")
    const { sideBarIsOpen, toggleSideBar } = useContext(NavigationContext);

    if (isLargerThanMobile) return (
        <>
            <SideNavigationContent />
        </>
    )

    return <Drawer 
        isOpen={sideBarIsOpen}
        placement='left'
        onClose={toggleSideBar}
        >
            <DrawerOverlay />
            <DrawerContent>
                <SideNavigationContent width={"full"} />
            </DrawerContent>
    </Drawer>
}
