import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useMediaQuery
} from "@chakra-ui/react";
import { useContext } from "react";
import SideNavigationContent from "./side-nav-content";
import { NavigationContext } from "@/src/contexts/navigation-context";

export default function SideNavigation() {
  const [isLargerThanMobile] = useMediaQuery(`(min-width: 800px)`);
  const { sideBarIsOpen, toggleSideBar } = useContext(NavigationContext);

  if (isLargerThanMobile)
    return (
      <>
        <SideNavigationContent />
      </>
    );

  return (
    <Drawer isOpen={sideBarIsOpen} placement="left" onClose={toggleSideBar}>
      <DrawerOverlay />
      <DrawerContent>
        <SideNavigationContent width={`full`} />
      </DrawerContent>
    </Drawer>
  );
}
