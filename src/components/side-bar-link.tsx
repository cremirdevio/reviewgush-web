import React from 'react'
import Link from './ui/link'
import { HStack, Heading, Icon, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { FaExternalLinkAlt, FaHome, FaIcons } from 'react-icons/fa'
import { SidebarNavItem } from '@/types'

interface SideNavLinkProp {
    navItem: SidebarNavItem
}

export default function SideNavLink({ navItem }: SideNavLinkProp) {

    if (navItem.isTitle) {
        return <Heading pl={"8px"} fontSize={"md"} color={"gray.500"} textTransform={"uppercase"} mt={"24px"} mb={"8px"}>{navItem.title}</Heading>
    }

    return (
        <LinkBox textDecoration={"none"}>
            <HStack _hover={{
                bgColor: "green.100",
                borderRadius: "md",
                textDecoration: "none"
            }} py={"4px"} pl={"8px"}>
                <Icon as={navItem.icon} />
                <LinkOverlay href={navItem.href}>
                    <Text>
                        {navItem.title} 
                        {navItem.external && <Icon as={FaExternalLinkAlt} boxSize={"3"} color={"gray"} />}
                    </Text>
                </LinkOverlay>
            </HStack>
        </LinkBox>
    )
}
