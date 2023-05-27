import React, { forwardRef, Ref } from "react";
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement
} from "@chakra-ui/react";

interface FormInputProps extends InputProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    { leftIcon: leftPart, rightIcon: rightPart, ...inputProps },
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <FormControl>
        <InputGroup size={inputProps.size ?? `lg`}>
          {leftPart && (
            <InputLeftElement pointerEvents="none">{leftPart}</InputLeftElement>
          )}
          <Input
            focusBorderColor={`orange.500`}
            fontSize={[`sm`]}
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
