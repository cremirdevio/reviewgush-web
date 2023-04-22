import { Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

interface AuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Flex flexDir={"column"} h={"100vh"} bgColor={"orange.100"} justifyContent={"center"} alignItems={"center"}>
        {/* Logo Here */}
        <Image src={"/logo-primary-hor.svg"} width={"220"} height={"50"} alt="reviewgush logo" />
        <Spacer maxH={"32px"} />
        {children}
        {/* Copyright */}
        <Spacer maxH={"48px"} />
        <Text>Copyright &copy; ReviewGush 2023 | Privacy Policy</Text>
    </Flex>
  )
}
