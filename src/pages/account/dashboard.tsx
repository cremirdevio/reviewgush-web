import DashboardLayout from "@/src/components/dashboard-layout";
import Button from "@/src/components/ui/button";
import FormInput from "@/src/components/ui/input";
import {
  Box,
  ButtonGroup,
  Flex,
  HStack,
  Heading,
  Icon
} from "@chakra-ui/react";
import { FaEllipsisV, FaSearch } from "react-icons/fa";
import ListReviews from "@/src/components/dashboard/reviews/list-reviews";
import {
  MdAccountBox,
  MdCalendarMonth,
  MdChevronLeft,
  MdExtension,
  MdFilter,
  MdFilterAlt,
  MdOutlineCalendarMonth,
  MdOutlineExtension,
  MdOutlineFilterAlt,
  MdOutlineFilterAltOff,
  MdOutlineLabel,
  MdOutlineRateReview,
  MdOutlineStarRate,
  MdRateReview,
  MdStarRate
} from "react-icons/md";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Box py={`24px`}>
        <HStack mb={`24px`} justifyContent={`space-between`}>
          <Heading fontSize={[`xl`, `2xl`]}>Your Reviews</Heading>
          <Icon as={FaEllipsisV} />
        </HStack>

        {/* Search Reviews */}
        <Flex gap={`6`} mb={`24px`} flexDirection={[`column`, `row`]}>
          <FormInput
            leftIcon={<Icon as={FaSearch} />}
            placeholder="Search Reviews by name, email or review keyword"
            width={`full`}
            variant={`flushed`}
          />
          <ButtonGroup>
            <Button
              // size={`lg`}
              variant="primary"
              leftIcon={<Icon as={MdOutlineCalendarMonth} />}
            >
              Date
            </Button>

            <Button
              variant="primary"
              leftIcon={<Icon as={MdOutlineExtension} />}
            >
              Integration
            </Button>

            <Button
              variant="primary"
              leftIcon={<Icon as={MdOutlineStarRate} />}
            >
              Rating
            </Button>

            <Button
              variant="primary"
              leftIcon={<Icon as={MdOutlineFilterAlt} />}
            >
              More filter
            </Button>
          </ButtonGroup>
        </Flex>

        {/* List reviews in tables or grids */}
        <ListReviews />

        {/* <NotFound 
                    title="Not found" 
                    message="No reviews found matching this search!" 
                /> */}

        {/* <NotFound 
                    title="Reviews List Empty" 
                    message="Reviews you collect will show up here. Already have reviews? Import them!" 
                    buttonText="Import Review"
                    onButtonClick={() => {}}
                /> */}
      </Box>
    </DashboardLayout>
  );
}
