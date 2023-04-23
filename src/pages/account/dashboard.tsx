import DashboardLayout from '@/src/components/dashboard-layout'
import Button from '@/src/components/ui/button'
import FormInput from '@/src/components/ui/input';
import { NavigationContext } from '@/src/contexts/navigation-context';
import { Box, Checkbox, Flex, HStack, Heading, Icon, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa';

export default function Dashboard() {
    const { sideBarIsOpen, toggleSideBar } = useContext(NavigationContext);
    return (
        <DashboardLayout>
            <Box py={"24px"}>
                <HStack mb={"24px"}>
                    <Heading>All Reviews</Heading>
                </HStack>

                {/* Search Reviews */}
                <Flex gap={"6"} mb={"24px"}>
                    <FormInput leftIcon={<Icon as={FaSearch} />} placeholder='Search Reviews by name, email or review keyword' width={"full"} variant={"flushed"} />
                    <Button size={"lg"} variant='primary'>Search</Button>
                </Flex>

                {/* List reviews in tables or grids */}
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>
                                    <Checkbox colorScheme='orange' />
                                </Th>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <Checkbox colorScheme='orange' />
                                </Td>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td isNumeric>25.4</Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>
                                    <Checkbox colorScheme='orange'/>
                                </Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </Box>
        </DashboardLayout>
    )
}
