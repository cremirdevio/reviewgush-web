import { Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Link from './ui/link'

interface AuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Flex flexDir={"column"} h={"100vh"} bgColor={"orange.100"} justifyContent={"center"} alignItems={"center"}>
        {/* Logo Here */}
        <Link href='/'>
          <Image src={"/logo-primary-hor.svg"} width={"220"} height={"50"} alt="reviewgush logo" />
        </Link>
        <Spacer maxH={"32px"} />
        {children}
        {/* Copyright */}
        <Spacer maxH={"48px"} />
        <Text>Copyright &copy; ReviewGush {new Date().getFullYear()} | Privacy Policy</Text>
    </Flex>
  )
}
