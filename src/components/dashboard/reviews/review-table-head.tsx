import { Avatar, Badge, Checkbox, Flex, HStack, Icon, Td, Text, Th, Tr, VStack } from '@chakra-ui/react'
import React from 'react'
import {  FaSortAmountUpAlt, FaSortNumericDownAlt } from 'react-icons/fa'

export default function ReviewTableHeader() {
    return (
        <Tr>
            <Th>
                <Checkbox colorScheme='orange' />
            </Th>
            <Th>Reviewer</Th>
            <Th>Review  <Icon as={FaSortNumericDownAlt} /></Th>
            <Th>Date <Icon as={FaSortAmountUpAlt} /></Th>
            <Th>Status</Th>
        </Tr>
    )
}

