import { useDisclosure } from "@chakra-ui/react";
import { createContext, useContext } from "react";

interface NavigationContextProp {
    sideBarIsOpen: boolean;
    toggleSideBar: () => void;
}

export const NavigationContext = createContext<NavigationContextProp>({
    sideBarIsOpen: false,
    toggleSideBar: () => { }
});

export default function NavigationProvider({ children }: { children: React.ReactNode }) {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <NavigationContext.Provider value={{
            sideBarIsOpen: isOpen,
            toggleSideBar: onToggle
        }}>
            {children}
        </NavigationContext.Provider>
    )
}