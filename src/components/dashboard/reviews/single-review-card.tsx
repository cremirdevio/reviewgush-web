import { Avatar, Badge, Box, Checkbox, Flex, HStack, Icon, Td, Text, Tr, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import Ratings from './ratings'

export default function SingleReviewCard() {
  return (
    <Box>
        <HStack mb={"8px"}>
            <Avatar name="Joseph Ajibodu" src="https://avatars.githubusercontent.com/u/78092933?v=4" size={"sm"} />
            <Flex flexDir={"column"} alignItems={"flex-start"} gap={"-10px"}>
                <Text fontWeight={"bold"} fontSize={"sm"} py={"0"}> Joseph Ajibodu</Text>
                <Text fontSize={"xs"} whiteSpace={"pre-wrap"} mt={"0px"}> Co-founder of ReviewGush</Text>
            </Flex>
        </HStack>

        <Flex flexDir={"column"} minWidth={"18rem"} maxWidth={"25rem"}>
            <Ratings rating={3.5} />
            <Text whiteSpace={"pre-wrap"} fontSize={"sm"}>
                Hey! It&apos;s Olly here, co-founder of Senja. This is a dummy review that&apos;ll show you how a testimonial works 😄.
            </Text>
        </Flex>
        <Text color={"gray"} fontSize={"xs"} mt={"1"}>April 23rd, 2023</Text>
    </Box>
  )
}

