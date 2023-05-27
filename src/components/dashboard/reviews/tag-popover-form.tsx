import {
  Divider,
  Flex,
  FocusLock,
  Icon,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  useDisclosure
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdAdd, MdEditNotifications, MdLabelOutline } from "react-icons/md";
import FormInput from "../../ui/input";
import Badge from "../../ui/badge";
import Button from "../../ui/button";

export default function TagPopoverForm() {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);
  const [tagInput, setTagInput] = useState(``);

  return (
    <Popover
      isOpen={isOpen}
      initialFocusRef={firstFieldRef}
      onOpen={onOpen}
      onClose={onClose}
      placement="bottom-start"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Badge colorScheme="green" cursor={`pointer`}>
          <Icon mr={`1`} as={MdLabelOutline} />
          Add a tag
        </Badge>
      </PopoverTrigger>
      <PopoverContent p={5}>
        <PopoverArrow />
        <FormInput
          size={`sm`}
          ref={firstFieldRef}
          autoCorrect="on"
          placeholder="Search for a tag or create one"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
        />

        {/* List of existing tags */}
        <Flex flexWrap={`wrap`} rowGap={`2`} columnGap={`2`} my={`2`}>
          {Array.from(`1234567890`).map((_, index) => (
            <Badge
              _hover={{ bg: `gray.100` }}
              key={index}
              cursor={`pointer`}
              variant={`outline`}
            >
              <Icon as={MdAdd} />
              label {_}
            </Badge>
          ))}
        </Flex>

        {/* New Tag */}
        {tagInput && (
          <>
            <Divider />
            <Badge
              _hover={{ bg: `gray.100` }}
              cursor={`pointer`}
              variant={`outline`}
              mt={`2`}
              width={`max-content`}
              onClick={() => {
                setTagInput(``);
                onClose();
              }}
            >
              <Icon as={MdAdd} />
              {tagInput}
            </Badge>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
