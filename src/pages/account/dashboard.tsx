import DashboardLayout from "@/src/components/dashboard-layout";
import Button from "@/src/components/ui/button";
import FormInput from "@/src/components/ui/input";
import { Box, Flex, HStack, Heading, Icon } from "@chakra-ui/react";
import { FaEllipsisV, FaSearch } from "react-icons/fa";
import ListReviews from "@/src/components/dashboard/reviews/list-reviews";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Box py={`24px`}>
        <HStack mb={`24px`} justifyContent={`space-between`}>
          <Heading fontSize={[`xl`, `2xl`]}>Your Reviews</Heading>
          <Icon as={FaEllipsisV} />
        </HStack>

        {/* Search Reviews */}
        <Flex gap={`6`} mb={`24px`}>
          <FormInput
            leftIcon={<Icon as={FaSearch} />}
            placeholder="Search Reviews by name, email or review keyword"
            width={`full`}
            variant={`flushed`}
          />
          <Button size={`lg`} variant="primary">
            Search
          </Button>
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
