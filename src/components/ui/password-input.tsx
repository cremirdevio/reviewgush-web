import React, { useState } from 'react'
import FormInput from './input'
import { Icon, InputProps, useBoolean } from '@chakra-ui/react'
import { MdPassword } from 'react-icons/md'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function PasswordInput({ ...props }: InputProps) {
    const [showPassword, {toggle}] = useBoolean();

  return (
    <FormInput
        type={showPassword ? "text" : "password"} placeholder='Password' size={"lg"}
        leftIcon={<Icon as={MdPassword} />}
        rightIcon={<Icon onClick={toggle} as={showPassword ? FaEyeSlash : FaEye} />}
        {...props}
    />
  )
}