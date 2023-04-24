import {
  Box,
  Text,
  HStack,
  Heading,
  Container,
  Spacer,
  Checkbox
} from "@chakra-ui/react";
import { FaApple, FaGoogle } from "react-icons/fa";
import AuthLayout from "@/src/components/auth-layout";
import FormInput from "@/src/components/ui/input";
import PasswordInput from "@/src/components/ui/password-input";
import Button from "@/src/components/ui/button";
import Head from "next/head";
import Link from "@/src/components/ui/link";
import Image from "next/image";

export default function Login() {
  return (
    <AuthLayout>
      <Head>
        <title>Login to ReviewGush</title>
      </Head>
      <Container
        shadow={[`none`, `2xl`]}
        w={[`full`, `md`]}
        bg={`whiteAlpha.900`}
        borderRadius={[`none`, `3xl`]}
        height={[`full`, `fit-content`]}
        px={[`24px`, `48px`]}
        py={[`48px`]}
      >
        {/* Logo Here */}
        <Link href="/">
          <Image
            src={`/logo-icon-primary.svg`}
            width={`36`}
            height={`36`}
            alt="reviewgush logo"
          />
        </Link>
        <Spacer height={`16px`} />

        <Heading fontWeight={`normal`} fontSize={[`2xl`]}>
          Hi, Welcome Back!
        </Heading>
        <Text color={`gray.500`} fontSize={`md`} mt={`8px`}>
          Join ReviewGush to easily collect, manage and share your reviews.
        </Text>
        <Spacer height={`32px`} />

        {/* Enter Email/Phone no */}
        <FormInput type="email" placeholder="Enter your email" />
        <Spacer height={`12px`} />

        {/* Password */}
        <PasswordInput />
        <Spacer height={`12px`} />

        {/* Keep me signed in */}
        <Checkbox size="md" colorScheme={`orange`}>
          Keep me signed in
        </Checkbox>
        <Spacer height={`32px`} />

        {/* Trouble Signing in */}
        <Link href={`/auth/forgot-password`}>
          <Text fontWeight={`bold`} fontSize={`sm`} mt={`16px`} mb={`12px`}>
            Forgot Password?
          </Text>
        </Link>

        {/* Sign In button */}
        <Button width={`full`} size={`lg`} variant={`primary`}>
          Sign In
        </Button>

        {/* Line: or sign in with */}
        <HStack
          mt={`16px`}
          mb={`16px`}
          justifyContent={`center`}
          alignItems={`center`}
        >
          <Box height={`1px`} width={`20px`} bgColor={`gray.500`} />
          <Text fontSize={`sm`} color={`gray.500`}>
            Or Sign in with
          </Text>
          <Box height={`1px`} width={`20px`} bgColor={`gray.500`} />
        </HStack>

        {/* Google/Facebook/Apple */}
        <HStack justifyContent={`center`} gap={`4`}>
          <Button
            leftIcon={<FaGoogle />}
            fontWeight={`bold`}
            variant={`outline`}
          >
            Google
          </Button>
          <Button
            leftIcon={<FaApple />}
            fontWeight={`bold`}
            variant={`outline`}
          >
            Apple
          </Button>
        </HStack>

        {/* Don't have an account? Register Now */}
        <Text textAlign={`center`} mt={`16px`} fontSize={`sm`}>
          Don&apos;t have an account?{` `}
          <Link fontWeight={`bold`} href="/auth/register">
            Register Now
          </Link>
        </Text>
      </Container>
    </AuthLayout>
  );
}
