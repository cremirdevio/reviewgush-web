import { FormControl, Input, InputGroup, InputLeftElement, InputProps, InputRightElement } from '@chakra-ui/react'
import React from 'react'

interface FormInput extends InputProps {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}


export default function FormInput({ leftIcon: leftPart, rightIcon: rightPart, ...inputProps } : FormInput) {
  return (
    <FormControl>
        <InputGroup size={inputProps.size ?? "lg"}>
            {leftPart && <InputLeftElement>{leftPart}</InputLeftElement>}
            <Input focusBorderColor={"orange.500"} {...inputProps} />
            {rightPart && <InputRightElement>{rightPart}</InputRightElement>}
        </InputGroup>
    </FormControl>
  )
}
