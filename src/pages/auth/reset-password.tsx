import { Box, Text, HStack, VStack, Heading, Container, Spacer, Checkbox, Icon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdFacebook, MdPassword } from 'react-icons/md'
import { FaApple, FaArrowLeft, FaEye, FaFacebook, FaGoogle } from 'react-icons/fa'
import AuthLayout from '@/src/components/auth-layout'
import FormInput from '@/src/components/ui/input'
import PasswordInput from '@/src/components/ui/password-input'
import Button from '@/src/components/ui/button'
import Head from 'next/head'
import Link from '@/src/components/ui/link'
import Image from 'next/image'

export default function ResetPassword() {
  const [passwordHasBeenReset, setPasswordHasBeenReset] = useState<Boolean>(false);

  return (
    <AuthLayout>
      <Head>
        <title>Reset your ReviewGush Password</title>
      </Head>
      {!passwordHasBeenReset ?
        <Container shadow={["none", "2xl"]} w={["full", "md"]} bg={"whiteAlpha.900"} borderRadius={["none", "3xl"]} height={["full", "fit-content"]} px={["24px", "48px"]} py={["48px"]}>
          {/* Logo Here */}
          <Link href='/'>
            <Image src={"/logo-icon-primary.svg"} width={"36"} height={"36"} alt="reviewgush logo" />
          </Link>
          <Spacer height={"16px"} />
          
          <Heading fontWeight={"normal"} fontSize={["2xl"]}>Set new password</Heading>
          <Text fontSize={"sm"} mt={"8px"}>Your new password must be different to previously used passwords.</Text>
          <Spacer height={"32px"} />

          {/* Password */}
          <PasswordInput />
          <Spacer height={"12px"} />

          {/* Confirm Password */}
          <PasswordInput placeholder='Confirm Password' />
          <Spacer height={"24px"} />

          {/* Sign In button */}
          <Button width={"full"} size={"lg"} variant={"primary"}>Reset password</Button>

          {/* Back to Login */}
          <Link mt={"16px"} fontSize={"sm"} fontWeight={"bold"} href='/auth/login' display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"8px"}>
            <Icon as={FaArrowLeft} />
            <Text>Back to Login</Text>
          </Link>

        </Container>
        :
        <Container textAlign={"center"} shadow={["none", "2xl"]} w={["full", "md"]} bg={"whiteAlpha.900"} borderRadius={["none", "3xl"]} height={"fit-content"} px={["24px", "48px"]} py={["48px"]}>
          <Heading fontSize={"2xl"}>Password reset</Heading>
          <Text fontSize={"sm"} mt={"8px"}>Your password has been successfully reset. Click below to log in manually.</Text>
          <Spacer height={"32px"} />

          {/* Sign In button */}
          <Button width={"full"} size={"lg"} variant={"primary"}>Continue</Button>

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