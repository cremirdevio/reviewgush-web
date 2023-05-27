import {
  Avatar,
  ButtonGroup,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Td,
  Text,
  Tooltip,
  Tr,
  useBoolean
} from "@chakra-ui/react";
import Ratings from "./ratings";
import Button from "../../ui/button";
import { MdClose, MdOutlineEdit, MdOutlineShare } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import Badge from "../../ui/badge";
import TagPopoverForm from "./tag-popover-form";
import { FaTimesCircle } from "react-icons/fa";

export default function SingleReviewTableItem() {
  const [showFullDetails, { on, off }] = useBoolean(false);

  return (
    <Tr
      onClick={on}
      _hover={{ bg: `gray.50` }}
      cursor={`pointer`}
      fontSize={`sm`}
    >
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
            <Text fontWeight={`bold`}>Joseph Ajibodu</Text>
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

        <Drawer
          isOpen={showFullDetails}
          placement="right"
          onClose={off}
          size={`sm`}
          // finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <ButtonGroup>
                <Button size={`sm`}>Unapprove</Button>
                <IconButton
                  size={`sm`}
                  aria-label="edit review"
                  color={`gray.500`}
                  icon={<MdOutlineEdit size={`16`} />}
                />
                <IconButton
                  size={`sm`}
                  aria-label="edit review"
                  color={`red.500`}
                  icon={<MdDeleteOutline size={`16`} />}
                />
              </ButtonGroup>
            </DrawerHeader>

            <DrawerBody>
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
                Hey! It&apos;s Olly here, co-founder of Senja. This is a dummy
                review that&apos;ll show you how a testimonial works 😄.
              </Text>

              {/* Date */}
              <Text fontSize={`md`} color={`gray.500`} my={`2`}>
                April 23rd, 2023
              </Text>

              {/* Tags List */}
              <Flex
                gap={`2`}
                flexWrap={`wrap`}
                bg={`gray.50`}
                px={`2`}
                py={`3`}
                borderRadius={`2xl`}
              >
                {Array.from(`1234567890`).map((_, index) => (
                  <Badge key={index} variant={`outline`}>
                    label {_}
                    <Icon cursor={`pointer`} ml={`1`} as={FaTimesCircle} />
                  </Badge>
                ))}

                {/* <Badge colorScheme="green">
                  <Icon mr={`1`} as={MdLabelOutline} />
                  Add a tag
                </Badge> */}

                <TagPopoverForm />
              </Flex>

              {/* Actions List: Do more with your review */}
              <Heading fontWeight={`normal`} fontSize={`2xl`} mt={`8`} mb={`4`}>
                Review Actions
              </Heading>
              {/* Share - Embed - Generate Image */}
              <ButtonGroup>
                <Tooltip label="Share Review">
                  <IconButton
                    icon={<MdOutlineShare />}
                    aria-label="Share review"
                  />
                </Tooltip>
              </ButtonGroup>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={on}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Td>
      <Td>April 23rd, 2023</Td>
      <Td>
        <Badge colorScheme="green">Approved</Badge>
      </Td>
    </Tr>
  );
}
