import React, { forwardRef, Ref } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement
} from "@chakra-ui/react";

interface FormInputProps extends InputProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    { leftIcon: leftPart, rightIcon: rightPart, label, ...inputProps },
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <FormControl>
        {label && <FormLabel>{label}</FormLabel>}
        <InputGroup size={inputProps.size ?? `lg`}>
          {leftPart && (
            <InputLeftElement pointerEvents="none">{leftPart}</InputLeftElement>
          )}
          <Input
            focusBorderColor={`orange.500`}
            fontSize={[`sm`]}
            color={`black`}
            {...inputProps}
            ref={ref}
          />
          {rightPart && (
            <InputRightElement pointerEvents="none">
              {rightPart}
            </InputRightElement>
          )}
        </InputGroup>
      </FormControl>
    );
  }
);

FormInput.displayName = `FormInput`;

export default FormInput;
