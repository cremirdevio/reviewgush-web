import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'
import Link from '../components/ui/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Center flexDir={"column"}>
      <Heading>Authentication Pages</Heading>
      <Box height={"1px"} width={"100px"} bgColor={"orange.500"} my={"24px"} />
      <Flex gap={"12px"} flexDirection={"column"} alignItems={"center"}>
        <Link href='/auth/login'>Login Page</Link>
        <Link href='/auth/register'>Register Page</Link>
        <Link href='/auth/forgot-password'>Forgot Password Page</Link>
        <Link href='/auth/reset-password'>Reset Password Page</Link>
        <Link href='/auth/verify-email'>Verify Email Page</Link>
      </Flex>
    </Center>
  )
}
