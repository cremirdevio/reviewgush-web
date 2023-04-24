import { Flex, Icon, useMediaQuery } from "@chakra-ui/react";
import { useContext } from "react";
import { MdMenu } from "react-icons/md";
import { NavigationContext } from "@/src/contexts/navigation-context";

export default function MainNavigation() {
  const [isLargerThanMobile] = useMediaQuery(`(min-width: 800px)`);
  const { toggleSideBar } = useContext(NavigationContext);

  return (
    <Flex minH={`56px`} alignItems={`center`}>
      {/* <Image src={"/logo-primary-hor.svg"} height={20} width={200} alt={"Review Gush Logo"} /> */}
      {!isLargerThanMobile && (
        <Icon as={MdMenu} boxSize={`8`} onClick={toggleSideBar} />
      )}
    </Flex>
  );
}
