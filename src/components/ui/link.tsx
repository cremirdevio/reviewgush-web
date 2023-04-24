import NextLink from "next/link";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

interface NextChakraLinkProps extends ChakraLinkProps {
  href?: string;
  children: React.ReactNode;
}

export default function Link({
  href,
  children,
  ...chakraProps
}: NextChakraLinkProps) {
  return (
    <ChakraLink href={href ?? `#`} as={NextLink} {...chakraProps}>
      {children}
    </ChakraLink>
  );
}
