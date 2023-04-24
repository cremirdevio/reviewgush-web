import {
  Box,
  Text,
  Heading,
  Container,
  Spacer,
  Icon,
  Center,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import AuthLayout from "@/src/components/auth-layout";
import Head from "next/head";
import { Player } from "@lottiefiles/react-lottie-player";
import mailAnimation from "@/src/assets/animations/mail.json";
import Link from "@/src/components/ui/link";
import Image from "next/image";

export default function VerifyEmail() {
  return (
    <AuthLayout>
      <Head>
        <title>Forgot Password</title>
      </Head>

      <Container
        textAlign={`center`}
        shadow={[`none`, `2xl`]}
        w={[`full`, `3xl`]}
        maxW={`3xl`}
        bg={`whiteAlpha.900`}
        borderRadius={[`none`, `3xl`]}
        height={[`full`, `fit-content`]}
        px={[`24px`, `48px`]}
        py={[`48px`]}
      >
        {/* Logo Here */}
        <Link href="/">
          <Center>
            <Image
              src={`/logo-icon-primary.svg`}
              width={`36`}
              height={`36`}
              alt="reviewgush logo"
            />
          </Center>
        </Link>
        <Spacer height={`16px`} />

        <Heading fontWeight={`normal`} fontSize={[`2xl`]}>
          Verify your account
        </Heading>
        <Text fontSize={`sm`} mt={`8px`}>
          Account activation link has been sent to the e-mail address you
          provided. If you have not received the email after a few minutes,
          please check your spam folder.
        </Text>
        <Spacer height={`32px`} />

        {/* Image/Icon depicting traditional mail: lottie */}
        <Player
          autoplay
          loop
          src={mailAnimation}
          style={{ height: `100px`, width: `100px` }}
        ></Player>
        <Spacer height={`32px`} />

        {/* Resend email */}
        <Text
          color={`orange.700`}
          cursor={`pointer`}
          mt={`16px`}
          fontSize={`sm`}
          fontWeight={`bold`}
        >
          Didn&apos;t get the email? Send it again
        </Text>
        <Center my={`24px`}>
          <Box height={`1px`} width={`100px`} bgColor={`black`} />
        </Center>
        <Link
          mt={`16px`}
          fontSize={`sm`}
          fontWeight={`bold`}
          href="/"
          display={`flex`}
          justifyContent={`center`}
          alignItems={`center`}
          gap={`8px`}
        >
          <Icon as={FaArrowLeft} />
          Back Home
        </Link>
      </Container>
    </AuthLayout>
  );
}
