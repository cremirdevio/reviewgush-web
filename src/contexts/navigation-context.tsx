import { useDisclosure } from "@chakra-ui/react";
import { createContext } from "react";

interface NavigationContextProp {
  sideBarIsOpen: boolean;
  toggleSideBar: () => void;
}

export const NavigationContext = createContext<NavigationContextProp>({
  sideBarIsOpen: false,
  toggleSideBar: () => console.log
});

export default function NavigationProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <NavigationContext.Provider
      value={{
        sideBarIsOpen: isOpen,
        toggleSideBar: onToggle
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
