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

export default function ForgotPassword() {
  const [resetEmailSent, setResetEmailSent] = useState<Boolean>(false);

  return (
    <AuthLayout>
      <Head>
        <title>Forgot Password</title>
      </Head>

      {!resetEmailSent ?
        <Container shadow={["none", "2xl"]} w={["full", "md"]} bg={"whiteAlpha.900"} borderRadius={["none", "3xl"]} height={"fit-content"} px={["24px", "48px"]} py={["48px"]}>
          <Heading fontSize={"2xl"}>Forgot Password?</Heading>
          <Text fontSize={"sm"} mt={"8px"}>No worries, we&apos;ll send you reset instructions.</Text>
          <Spacer height={"32px"} />

          {/* Enter Email */}
          <FormInput
            type='email' placeholder='Enter your email' size={"lg"}
            leftIcon={"@"}
          />
          <Spacer height={"12px"} />

          {/* Sign In button */}
          <Button width={"full"} size={"lg"} variant={"primary"}>Reset Password</Button>

          {/* Back to Login */}
          <Link mt={"16px"} fontSize={"sm"} fontWeight={"bold"} href='/auth/login' display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"8px"}>
            <Icon as={FaArrowLeft} />
            <Text>Back to Login</Text>
          </Link>
        </Container>
        :
        <Container textAlign={"center"} shadow={["none", "2xl"]} w={["full", "md"]} bg={"whiteAlpha.900"} borderRadius={["none", "3xl"]} height={"fit-content"} px={["24px", "48px"]} py={["48px"]}>
          <Heading fontSize={"2xl"}>Check your email</Heading>
          <Text fontSize={"sm"} mt={"8px"}>We sent a password reset link to <Text fontWeight={"bold"}>example@reviewgush.com</Text></Text>
          <Spacer height={"32px"} />

          {/* Sign In button */}
          <Button width={"full"} size={"lg"} variant={"primary"}>Open Email App</Button>

          <Text textAlign={"center"} mt={"16px"} fontSize={"sm"}>
            Didn&apos;t receive the email?
            <Link fontWeight={"bold"} href='#'> Click to resend</Link>
          </Text>

          {/* Back to Login */}
          <Link mt={"16px"} fontSize={"sm"} fontWeight={"bold"} href='/auth/login' display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"8px"}>
            <Icon as={FaArrowLeft} />
            <Text>Back to Login</Text>
          </Link>
        </Container>
      }
    </AuthLayout>
  )
}