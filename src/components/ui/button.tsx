import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";
import React from "react";

interface CustomButtonProps extends ButtonProps {
    variant?: "primary" | "secondary" | "outline";
}

export default function Button({ children, variant, ...rest }: CustomButtonProps) {
    let colorScheme;
    let bg;
    let hoverBg;
    let activeBg;
    let textColor;
    let hoverTextColor;
    let activeTextColor;
    let border;

    switch (variant) {
        case "primary":
            colorScheme = "orange";
            bg = "orange.500";
            hoverBg = "orange.600";
            activeBg = "orange.700";
            textColor = "white";
            hoverTextColor = "white";
            activeTextColor = "white";
            break;
        case "secondary":
            colorScheme = "green";
            bg = "green.400";
            hoverBg = "green.500";
            activeBg = "green.600";
            textColor = "white";
            hoverTextColor = "white";
            activeTextColor = "white";
            break;
        case "outline":
            colorScheme = "gray";
            bg = "transparent";
            hoverBg = "gray.100";
            activeBg = "gray.200";
            textColor = "gray.700";
            hoverTextColor = "gray.900";
            activeTextColor = "gray.900";
            border = "1px solid gray";
            break;
        default:
            colorScheme = "gray";
            bg = "gray.500";
            hoverBg = "gray.600";
            activeBg = "gray.700";
            textColor = "white";
            hoverTextColor = "white";
            activeTextColor = "white";
            break;
    }

    return (
        <ChakraButton
            colorScheme={colorScheme}
            bg={bg}
            _hover={{ bg: hoverBg, color: hoverTextColor }}
            _active={{ bg: activeBg, color: activeTextColor }}
            color={textColor}
            border={border}
            {...rest}
        >
            {children}
        </ChakraButton>
    );
}
