import DashboardLayout from "@/src/components/dashboard-layout";
import Button from "@/src/components/ui/button";
import FormInput from "@/src/components/ui/input";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack
} from "@chakra-ui/react";
import React from "react";
import { FaChevronDown, FaPlus, FaSearch } from "react-icons/fa";
import ClearSearch from "@/src/components/ui/clear-search";
import SingleTag from "@/src/components/dashboard/tags/single-tag";

const tagsList = [
  { label: `bug`, description: `Something isn't working`, color: `red` },
  {
    label: `enhancement`,
    description: `New feature or request`,
    color: `yellow`
  },
  {
    label: `documentation`,
    description: `Improvements or additions to documentation`,
    color: `purple`
  },
  {
    label: `duplicate`,
    description: `This issue or pull request already exists`,
    color: `gray`
  },
  {
    label: `good first issue`,
    description: `Good for newcomers`,
    color: `green`
  },
  {
    label: `help wanted`,
    description: `Extra attention is needed`,
    color: `orange`
  },
  { label: `invalid`, description: `This doesn't seem right`, color: `cyan` },
  {
    label: `question`,
    description: `Further information is requested`,
    color: `teal`
  },
  {
    label: `wontfix`,
    description: `This will not be worked on`,
    color: `pink`
  },
  {
    label: `feature request`,
    description: `A new feature or request`,
    color: `blue`
  }
];

export default function Tags() {
  return (
    <DashboardLayout>
      <Box py={`24px`}>
        <HStack mb={`24px`} justifyContent={`space-between`}>
          <VStack alignItems={`flex-start`}>
            <Heading fontSize={[`xl`, `2xl`]}>Available Tags</Heading>
            <Text fontSize={`md`} color={`gray.500`}>
              Tags help you organize your reviews.
            </Text>
          </VStack>

          <Button variant="primary" leftIcon={<Icon as={FaPlus} />}>
            New Tag
          </Button>
        </HStack>

        <FormInput
          mb={`3`}
          leftIcon={<Icon as={FaSearch} />}
          placeholder="Search all tags"
        />
        <ClearSearch />

        <Card variant={`outline`} my={`4`}>
          <CardHeader
            display={`flex`}
            justifyContent={`space-between`}
            flexDir={`row`}
            borderBottom={`1px`}
            borderColor={`gray.200`}
          >
            <Text fontWeight={`bold`} fontSize={`lg`}>
              11 Tags
            </Text>
            <Menu>
              <MenuButton as={Box}>
                <HStack color={`gray.500`}>
                  <Text fontWeight={`bold`} fontSize={[`md`, `lg`]}>
                    Sort
                  </Text>
                  <Icon as={FaChevronDown} boxSize={`3`} />
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem>Sort</MenuItem>
                <MenuDivider />
                <MenuItem>Alphabetically</MenuItem>
                <MenuItem>Reverse Alphabetically</MenuItem>
                <MenuItem>Most Reviews</MenuItem>
                <MenuItem>Fewest Reviews</MenuItem>
              </MenuList>
            </Menu>
          </CardHeader>

          <CardBody py={`0`}>
            {tagsList.map((tag) => (
              <React.Fragment key={tag.label}>
                <SingleTag item={tag} />
                <Divider />
              </React.Fragment>
            ))}
          </CardBody>
        </Card>
      </Box>
    </DashboardLayout>
  );
}
