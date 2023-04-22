import React from 'react'
import Link from './ui/link'
import { HStack, Heading, Icon, Text } from '@chakra-ui/react'
import { FaHome } from 'react-icons/fa'
import { SidebarNavItem } from '@/types'

interface SideNavLinkProp {
    navItem: SidebarNavItem
}

export default function SideNavLink({ navItem }: SideNavLinkProp) {

    if (navItem.isTitle) {
        return <Heading pl={"8px"} fontSize={"md"} color={"gray.500"} textTransform={"uppercase"} mt={"24px"} mb={"8px"}>{navItem.title}</Heading>
    }

    return (
        <Link textDecoration={"none"} href={navItem.href}>
            <HStack _hover={{
                bgColor: "green.100", borderRadius: "md"
            }} py={"4px"} pl={"8px"}>
                <Icon as={FaHome} />
                <Text>{navItem.title}</Text>
            </HStack>
        </Link>
    )
}
