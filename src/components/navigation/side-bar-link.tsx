import {
  HStack,
  Heading,
  Icon,
  LinkBox,
  LinkOverlay,
  Text
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SidebarNavItem } from "@/types";

interface SideNavLinkProp {
  navItem: SidebarNavItem;
}

export default function SideNavLink({ navItem }: SideNavLinkProp) {
  if (navItem.isTitle) {
    return (
      <Heading
        pl={`8px`}
        fontSize={`md`}
        color={`gray.500`}
        textTransform={`uppercase`}
        mt={`24px`}
        mb={`8px`}
      >
        {navItem.title}
      </Heading>
    );
  }

  return (
    <LinkBox textDecoration={`none`}>
      <HStack
        _hover={{
          bgColor: `green.100`,
          borderRadius: `md`,
          textDecoration: `none`
        }}
        py={`6px`}
        pl={`8px`}
        gap={`4px`}
      >
        <Icon as={navItem.icon} color={`gray.500`} />
        <LinkOverlay href={navItem.href}>
          <Text>
            {navItem.title}
            {navItem.external && (
              <Icon as={FaExternalLinkAlt} boxSize={`3`} color={`gray`} />
            )}
          </Text>
        </LinkOverlay>
      </HStack>
    </LinkBox>
  );
}
