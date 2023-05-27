import {
  Avatar,
  Box,
  Button as ChakraButton,
  Flex,
  FormLabel,
  Heading,
  Spacer,
  Text,
  Textarea,
  CloseButton
} from "@chakra-ui/react";
import { MdOutlineImage } from "react-icons/md";
import Ratings from "./ratings";
import FormInput from "../../ui/input";
import Button from "../../ui/button";

interface EditReviewProp {
  show?: boolean;
  onClose?: () => void;
}

export default function EditReview({ show = false, onClose }: EditReviewProp) {
  return (
    <Box
      position={`absolute`}
      zIndex={`2`}
      top={`0`}
      bottom={`0`}
      right={`0`}
      left={`0`}
      background={`white`}
      overflow={`auto`}
      display={!show ? `none` : `block`}
    >
      {/* Header section */}
      <Flex
        flexDir={`column`}
        padding={`4`}
        paddingLeft={`8`}
        paddingRight={`8`}
        backgroundColor={`blackAlpha.200`}
      >
        <CloseButton alignSelf={`flex-end`} onClick={onClose} />
        <Heading fontWeight={`bold`} fontSize={`2xl`}>
          Edit Review
        </Heading>
      </Flex>

      <Box padding={`4`} paddingLeft={`8`} paddingRight={`8`}>
        {/* Body of the review */}
        <FormInput label="Name" value={`Joseph Ajibodu`} fontSize={`md`} />
        <Spacer height={`16px`} />

        <FormInput
          label="Tagline"
          value={`Founder of ReviewGush`}
          fontSize={`md`}
        />
        <Spacer height={`16px`} />

        {/* Avatar Image */}
        <FormLabel>Avatar</FormLabel>
        <Flex alignItems={`center`} gap={`4`}>
          <Avatar src="https://senja-lh3.b-cdn.net/a/ALm5wu3wbzsBQ5txejoQuxNCMksbHpsGPYNtxInUN9kKlQ=s96-c?width=100&height=100" />
          <ChakraButton variant="outline" colorScheme="gray">
            Pick an image
          </ChakraButton>
          <CloseButton />
        </Flex>
        <Spacer height={`16px`} />

        <FormInput
          label="Website URL"
          placeholder="ex. https://reviewgush.com"
        />
        <Spacer height={`16px`} />

        <FormInput
          label="Review Title"
          placeholder="ex. Exceptional Training. Just what I needed!"
        />
        <Spacer height={`16px`} />

        <FormLabel>Rating</FormLabel>
        <Ratings rating={5} />
        <Spacer height={`16px`} />

        <FormLabel>Review</FormLabel>
        <Text fontSize={`sm`} color={`blackAlpha.700`}>
          Tip 💡 Select text to highlight your favorite parts of the
          testimonial.
        </Text>
        <Textarea
          placeholder="ex. https://reviewgush.com"
          rows={7}
          value={`I just learned about Cremir this morning and now they have a new customer. I'm head over heels about Joseph's project. It just works! Well done!`}
        />
        <Spacer height={`16px`} />

        <FormLabel>Images</FormLabel>
        <Box
          padding={`10`}
          background={`blackAlpha.50`}
          width={`min-content`}
          borderRadius={`4`}
          cursor={`pointer`}
          color={`blackAlpha.500`}
        >
          <MdOutlineImage size={`24px`} />
        </Box>
        <Spacer height={`16px`} />

        <FormInput label="Date" type="date" value={`2/2/2020`} />
        <Spacer height={`16px`} />

        <Button variant="primary" width={`100%`}>
          Save
        </Button>
      </Box>
    </Box>
  );
}
