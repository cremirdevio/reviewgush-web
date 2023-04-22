import { Box, Text, HStack, VStack, Heading, Container, Spacer, Checkbox } from '@chakra-ui/react'
import React from 'react'
import { MdFacebook, MdPassword } from 'react-icons/md'
import { FaApple, FaEye, FaFacebook, FaGoogle } from 'react-icons/fa'
import AuthLayout from '@/src/components/auth-layout'
import FormInput from '@/src/components/ui/input'
import PasswordInput from '@/src/components/ui/password-input'
import Button from '@/src/components/ui/button'
import Head from 'next/head'
import Link from '@/src/components/ui/link'

export default function Login() {
  return (
    <AuthLayout>
      <Head>
        <title>Login to ReviewGush</title>
      </Head>
      <Container shadow={["none", "2xl"]} w={["full", "md"]} bg={"whiteAlpha.900"} borderRadius={["none", "3xl"]} height={"fit-content"} px={["24px", "48px"]} py={["48px"]}>
        <Heading fontSize={"2xl"}>Hi, Welcome Back!</Heading>
        {/* <Text fontSize={"sm"} mt={"8px"}>Start 14 day full-featured trial. No credit card required.</Text> */}
        <Spacer height={"32px"} />

        {/* Enter Email/Phone no */}
        <FormInput
          type='email' placeholder='Enter Email' size={"lg"}
          leftIcon={"@"}
        />
        <Spacer height={"12px"} />
        
        {/* Password */}
        <PasswordInput />
        <Spacer height={"12px"} />

        {/* Keep me signed in */}
        <Checkbox size='lg' colorScheme={"orange"}>
          Keep me signed in
        </Checkbox>
        <Spacer height={"32px"} />

        {/* Trouble Signing in */}
        <Link href={"/auth/forgot-password"}>
          <Text fontWeight={"bold"} fontSize={"sm"} mt={"16px"} mb={"12px"}>
            Forgot Password?
          </Text>
        </Link>

        {/* Sign In button */}
        <Button width={"full"} size={"lg"} variant={"primary"}>Sign In</Button>

        {/* Line: or sign in with */}
        <HStack mt={"16px"} mb={"16px"} justifyContent={"center"} alignItems={"center"}>
          <Box height={"1px"} width={"20px"} bgColor={"black"} />
          <Text fontSize={"xs"}>Or Sign in with</Text>
          <Box height={"1px"} width={"20px"} bgColor={"black"} />
        </HStack>

        {/* Google/Facebook/Apple */}
        <HStack justifyContent={"center"}>
          <Button leftIcon={<FaGoogle />} fontWeight={"bold"} variant={"outline"}>Google</Button>
          <Button leftIcon={<FaApple />} fontWeight={"bold"} variant={"outline"}>Apple</Button>
        </HStack>

        {/* Don't have an account? Register Now */}
        <Text textAlign={"center"} mt={"16px"} fontSize={"sm"}>Don&apos;t have an account? <Link fontWeight={"bold"} href='/auth/register'>Register Now</Link></Text>
      </Container>
    </AuthLayout>
  )
}