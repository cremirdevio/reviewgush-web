import { Box, Stack } from "@chakra-ui/react";
import SideNavigation from "./navigation/side-nav";
import MainNavigation from "./navigation/main-nav";

interface DashboardLayoutProps {
  children?: JSX.Element;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Stack direction={[`column`, `row`]}>
      <SideNavigation />
      <Box width={`full`} height={[`max-content`, `100vh`]} overflowY={`auto`}>
        {/* Main Navigation */}
        <MainNavigation />

        {/* Main Body */}
        <Box px={[`6`, `10`]}>{children}</Box>

        {/* Main Footer */}
        {/* <MainFooter /> */}
      </Box>
    </Stack>
  );
}
