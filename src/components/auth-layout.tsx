import { Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

interface AuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Flex flexDir={"column"} h={"100vh"} bgColor={"orange.100"} justifyContent={"center"} alignItems={"center"}>
        {/* Logo Here */}
        <Heading size={"md"} mb={"32px"}>ReviewGush Logo</Heading>
        {children}
        {/* Copyright */}
        <Spacer maxH={"48px"} />
        <Text>Copyright &copy; ReviewGush 2023 | Privacy Policy</Text>
    </Flex>
  )
}
