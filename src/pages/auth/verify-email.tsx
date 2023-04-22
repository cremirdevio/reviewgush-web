import { Box, Text, HStack, VStack, Heading, Container, Spacer, Checkbox, Icon, Flex, Center } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdFacebook, MdPassword } from 'react-icons/md'
import { FaApple, FaArrowLeft, FaEye, FaFacebook, FaGoogle } from 'react-icons/fa'
import AuthLayout from '@/src/components/auth-layout'
import Head from 'next/head'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import mailAnimation from "@/src/assets/animations/mail.json";
import Link from '@/src/components/ui/link'

export default function VerifyEmail() {

  return (
    <AuthLayout>
      <Head>
        <title>Forgot Password</title>
      </Head>

      <Container textAlign={"center"} shadow={["none", "2xl"]} w={["full", "3xl"]} maxW={"3xl"} bg={"whiteAlpha.900"} borderRadius={["none", "3xl"]} height={"fit-content"} px={["24px", "48px"]} py={["48px"]}>
        <Heading fontSize={"2xl"} color={"green.800"}>Verify your account</Heading>
        <Text fontSize={"sm"} mt={"8px"}>Account activation link has been sent to the e-mail address you provided. If you have not received the email after a few minutes, please check your spam folder.</Text>
        <Spacer height={"32px"} />

        {/* Image/Icon depicting traditional mail: lottie */}
        <Player
          autoplay
          loop
          src={mailAnimation}
          style={{ height: '100px', width: '100px' }}
        >
        </Player>
        <Spacer height={"32px"} />

        {/* Resend email */}
        <Text color={"orange.700"} cursor={"pointer"} mt={"16px"} fontSize={"sm"} fontWeight={"bold"}>Didn&apos;t get the email? Send it again</Text>
        <Center my={"24px"}>
         <Box height={"1px"} width={"100px"} bgColor={"black"} />
        </Center>
        <Link mt={"16px"} fontSize={"sm"} fontWeight={"bold"} href='/' display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"8px"}>
          <Icon as={FaArrowLeft} />
          Back Home
        </Link>
      </Container>
    </AuthLayout>
  )
}