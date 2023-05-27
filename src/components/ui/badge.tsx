import { Ref, forwardRef } from "react";
import { BadgeProps, Badge as ChakraBadge } from "@chakra-ui/react";

const Badge = forwardRef<HTMLElement, BadgeProps>(
  ({ children, ...otherProps }: BadgeProps, ref: Ref<HTMLElement>) => {
    return (
      <ChakraBadge
        display={`inline-flex`}
        borderRadius={`md`}
        alignItems={`center`}
        textTransform={`none`}
        py={`0.5`}
        px={`2`}
        ref={ref}
        {...otherProps}
      >
        {children}
      </ChakraBadge>
    );
  }
);

Badge.displayName = `Badge`;

export default Badge;
