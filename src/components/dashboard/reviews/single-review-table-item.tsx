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
  IconButton,
  Td,
  Text,
  Tr,
  useBoolean
} from "@chakra-ui/react";
import Ratings from "./ratings";
import Button from "../../ui/button";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import Badge from "../../ui/badge";
import ReviewDetail from "./review-details";
import EditReview from "./edit-review";

export default function SingleReviewTableItem() {
  const [showFullDetails, { on, off }] = useBoolean(false);
  const [editReview, { off: onClodeEditor, on: onOpenEditor }] =
    useBoolean(false);

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
          size={`md`}
          // finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent position={`relative`}>
            <DrawerCloseButton />
            <DrawerHeader>
              <ButtonGroup>
                <Button size={`sm`}>Unapprove</Button>
                <IconButton
                  size={`sm`}
                  aria-label="edit review"
                  color={`gray.500`}
                  icon={<MdOutlineEdit size={`16`} />}
                  onClick={onOpenEditor}
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
              <ReviewDetail />
              <EditReview show={editReview} onClose={onClodeEditor} />
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
