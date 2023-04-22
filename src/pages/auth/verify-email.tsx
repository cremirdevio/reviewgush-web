import { Box, Text, HStack, VStack, Heading, Container, Spacer, Checkbox, Icon, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdFacebook, MdPassword } from 'react-icons/md'
import { FaApple, FaArrowLeft, FaEye, FaFacebook, FaGoogle } from 'react-icons/fa'
import AuthLayout from '@/src/components/auth-layout'
import FormInput from '@/src/components/ui/input'
import PasswordInput from '@/src/components/ui/password-input'
import Button from '@/src/components/ui/button'
import Head from 'next/head'
import Link from '@/src/components/ui/link'

export default function VerifyEmail() {

  return (
    <AuthLayout>
      <Head>
        <title>Forgot Password</title>
      </Head>

      <Container textAlign={"center"} shadow={["none", "2xl"]} w={["full", "3xl"]} maxW={"3xl"} bg={"whiteAlpha.900"} borderRadius={["none", "3xl"]} height={"fit-content"} px={["24px", "48px"]} py={["48px"]}>
        <Heading fontSize={"2xl"}>Verify your account</Heading>
        <Text fontSize={"sm"} mt={"8px"}>Account activation link has been sent to the e-mail address you provided. If you have not received the email after a few minutes, please check your spam folder.</Text>
        <Spacer height={"64px"} />

        {/* Image/Icon depicting traditional mail: lottie */}

        {/* Resend email */}
        <Text color={"orange.700"} cursor={"pointer"} mt={"16px"} fontSize={"sm"} fontWeight={"bold"}>Didn&apos;t get the email? Send it again</Text>

      </Container>
    </AuthLayout>
  )
}