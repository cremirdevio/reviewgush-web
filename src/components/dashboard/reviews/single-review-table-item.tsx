import {
  Avatar,
  Badge,
  Checkbox,
  Flex,
  HStack,
  Td,
  Text,
  Tr
} from "@chakra-ui/react";
import Ratings from "./ratings";

export default function SingleReviewTableItem() {
  return (
    <Tr _hover={{ bg: `gray.50` }} cursor={`pointer`} fontSize={`sm`}>
      <Td>
        <Checkbox colorScheme="orange" />
      </Td>
      <Td>
        <HStack maxW={`15rem`}>
          <Avatar
            name="Joseph Ajibodu"
            src="https://avatars.githubusercontent.com/u/78092933?v=4"
            size={`md`}
          />
          <Flex flexDir={`column`} alignItems={`flex-start`}>
            <Text fontWeight={`bold`}> Joseph Ajibodu</Text>
            <Text whiteSpace={`pre-wrap`}> Co-founder of ReviewGush</Text>
          </Flex>
        </HStack>
      </Td>
      <Td>
        <Flex flexDir={`column`} minWidth={`18rem`} maxWidth={`25rem`}>
          <Ratings rating={4.5} />
          <Text whiteSpace={`pre-wrap`}>
            Hey! It&apos;s Olly here, co-founder of Senja. This is a dummy
            review that&apos;ll show you how a testimonial works 😄.
          </Text>
        </Flex>
      </Td>
      <Td>April 23rd, 2023</Td>
      <Td>
        <Badge colorScheme="green">Approved</Badge>
      </Td>
    </Tr>
  );
}
