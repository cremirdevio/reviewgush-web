import DashboardLayout from '@/src/components/dashboard-layout'
import Button from '@/src/components/ui/button'
import { NavigationContext } from '@/src/contexts/navigation-context';
import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'

export default function Dashboard() {
    const { sideBarIsOpen, toggleSideBar } = useContext(NavigationContext);
  return (
   <DashboardLayout>
        <>
            <Button onClick={toggleSideBar}>Open Side Nav</Button>
        </>
   </DashboardLayout>
  )
}
