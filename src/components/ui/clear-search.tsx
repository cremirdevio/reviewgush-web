import { Flex, Icon, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { FaTimes, FaTimesCircle } from 'react-icons/fa'

export default function ClearSearch() {
  return (
    <Flex alignItems={"center"} cursor={"pointer"} gap={"2"} _hover={{ color: "orange.500" }}>
        <Icon as={FaTimesCircle} boxSize={"5"} />
        <Text >Clear current search</Text>
    </Flex>
  )
}
