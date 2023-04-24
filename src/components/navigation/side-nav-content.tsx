import {
  Avatar,
  Box,
  BoxProps,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text
} from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import SideNavLink from "./side-bar-link";
import { dashboardConfig } from "@/src/config/dashboard-outline";

type SideNavigationContentProps = Pick<BoxProps, "width" | "maxWidth">;

export default function SideNavigationContent({
  width = [`300px`],
  maxWidth
}: SideNavigationContentProps) {
  return (
    <Flex
      width={width}
      maxW={maxWidth}
      maxH={`100vh`}
      height={`100vh`}
      flexDir={`column`}
      alignItems={`flex-start`}
      justifyContent={`space-between`}
      borderRight={`1px`}
      borderColor={`gray.200`}
      bg={`white`}
    >
      <Box px={`16px`} py={`24px`} width={`full`} overflowY={`auto`}>
        {/* Side Navigation Header */}
        <HStack pos={`sticky`} top={0} bg={`white`} pb={`2`}>
          <Avatar
            size="md"
            name="Joseph Ajibodu"
            src="https://senja-lh3.b-cdn.net/a/ALm5wu3wbzsBQ5txejoQuxNCMksbHpsGPYNtxInUN9kKlQ=s96-c?width=100&height=100"
          />

          <Menu>
            <MenuButton as={Box}>
              <HStack>
                <Text fontWeight={`bold`} fontSize={`md`}>
                  Joseph Ajibodu
                </Text>
                <Icon as={FaChevronDown} boxSize={`3`} />
              </HStack>
              <Text fontWeight={`light`} fontSize={`xs`}>
                josephajibodu@gmail.com
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem>Account</MenuItem>
              <MenuItem>Upgrade</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem>Become our affiliate</MenuItem>
              <MenuItem>Reward account</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </HStack>

        {/* Side Navigation Body */}
        <Flex flexDir={`column`} my={`0`}>
          {dashboardConfig.sidebarNav.map((sideBarItem) => (
            <SideNavLink navItem={sideBarItem} key={sideBarItem.title} />
          ))}
        </Flex>
      </Box>

      {/* Side Navigation Footer */}
      <HStack
        borderTop={`1px`}
        borderColor={`gray.200`}
        py={`3`}
        px={`16px`}
        width={`full`}
        justifyContent={`space-between`}
      >
        <HStack>
          <Avatar
            size="sm"
            name="Cremir"
            src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://cremir.org&size=64"
          />
          <Text fontWeight={`bold`} fontSize={`lg`}>
            Cremir
          </Text>
        </HStack>
        <Menu>
          <MenuButton as={Box}>
            <Icon as={FaChevronUp} />
          </MenuButton>
          <MenuList>
            <MenuItem>Project One</MenuItem>
            <MenuItem>Project Two</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
}
