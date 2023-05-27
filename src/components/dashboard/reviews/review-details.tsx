import {
  Avatar,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
  Tooltip
} from "@chakra-ui/react";
import TagPopoverForm from "./tag-popover-form";
import {
  MdCalendarToday,
  MdOutlineClose,
  MdOutlineShare
} from "react-icons/md";
import Badge from "../../ui/badge";
import Ratings from "./ratings";

// we might have to lazy load some parts of this component for performance reasons
export default function ReviewDetail() {
  return (
    <Flex direction={`column`}>
      <Flex gap={`4`} alignItems={`center`} mb={`4`}>
        <Avatar
          name="Joseph Ajibodu"
          src="https://avatars.githubusercontent.com/u/78092933?v=4"
          size={`lg`}
          borderWidth={`4px`}
          borderColor={`gray.100`}
        />
        <Flex flexDir={`column`} alignItems={`flex-start`}>
          <Text fontWeight={`bold`}> Joseph Ajibodu</Text>
          <Text whiteSpace={`pre-wrap`}> Co-founder of ReviewGush</Text>
        </Flex>
      </Flex>
      <Ratings rating={4.5} />
      <Text whiteSpace={`pre-wrap`}>
        Hey! It&apos;s Olly here, co-founder of Senja. This is a dummy review
        that&apos;ll show you how a testimonial works 😄.
      </Text>

      {/* Date */}
      <Text fontSize={`md`} color={`gray.500`} my={`2`}>
        April 23rd, 2023
      </Text>

      {/* Tags List */}
      <Flex gap={`3`} flexWrap={`wrap`} px={`2`} py={`3`} borderRadius={`2xl`}>
        {Array.from(`1234567890`).map((_, index) => (
          <Badge key={index} variant={`outline`}>
            label {_}
            <Icon cursor={`pointer`} ml={`1`} as={MdOutlineClose} />
          </Badge>
        ))}

        <TagPopoverForm />
      </Flex>

      <Flex
        gap={`2`}
        flexWrap={`wrap`}
        mt={`4`}
        px={`4`}
        py={`4`}
        border={`1px`}
        borderColor={`blackAlpha.400`}
        color={`blackAlpha.700`}
        borderRadius={`8`}
      >
        <MdCalendarToday size={`24`} />
        <Text fontSize={`md`} color={`blackAlpha.900`}>
          Date: May 27, 2023
        </Text>
      </Flex>

      {/* Actions List: Do more with your review */}
      <Heading fontWeight={`normal`} fontSize={`2xl`} mt={`8`} mb={`4`}>
        Review Actions
      </Heading>

      {/* Share - Embed - Generate Image */}
      <ButtonGroup>
        <Tooltip label="Share Review">
          <IconButton icon={<MdOutlineShare />} aria-label="Share review" />
        </Tooltip>
      </ButtonGroup>
    </Flex>
  );
}
