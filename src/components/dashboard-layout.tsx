import { Stack } from '@chakra-ui/react'
import React from 'react'
import SideNavigation from './side-nav'

interface DashboardLayoutProps {
    children?: JSX.Element
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Stack>
        <SideNavigation />
        {children}
    </Stack>
  )
}
