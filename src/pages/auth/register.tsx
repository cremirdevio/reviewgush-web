import {
  Box,
  Text,
  HStack,
  Heading,
  Container,
  Checkbox,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import { FaApple, FaGoogle } from "react-icons/fa";
import AuthLayout from "@/src/components/auth-layout";
import FormInput from "@/src/components/ui/input";
import PasswordInput from "@/src/components/ui/password-input";
import Button from "@/src/components/ui/button";
import Head from "next/head";
import Link from "@/src/components/ui/link";
import Image from "next/image";

export default function Register() {
  return (
    <AuthLayout>
      <Head>
        <title>Register free ReviewGush account</title>
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
          Get Started Now
        </Heading>
        <Text fontSize={`sm`} mt={`8px`}>
          Join ReviewGush to easily collect, manage and share your reviews.
        </Text>
        <Spacer height={`32px`} />

        {/* Firstname and Lastname */}
        <Stack direction={`row`}>
          <FormInput type="text" placeholder="First Name" size={`lg`} />
          <FormInput type="text" placeholder="Last Name" size={`lg`} />
        </Stack>
        <Spacer height={`12px`} />

        {/* Enter Email/Phone no */}
        <FormInput type="email" placeholder="Enter Email" size={`lg`} />
        <Spacer height={`12px`} />

        {/* Password */}
        <PasswordInput autoComplete={`false`} />
        <Spacer height={`12px`} />

        {/* Keep me signed in */}
        <Checkbox size="md" color={`gray.700`} colorScheme={`orange`}>
          I agree with all service agreement
        </Checkbox>
        <Spacer height={`32px`} />

        {/* Sign In button */}
        <Button width={`full`} size={`lg`} variant={`primary`}>
          Sign Up
        </Button>

        {/* Line: or sign in with */}
        <HStack
          mt={`16px`}
          mb={`16px`}
          justifyContent={`center`}
          alignItems={`center`}
        >
          <Box height={`1px`} width={`20px`} bgColor={`black`} />
          <Text fontSize={`xs`}>Or Sign Up with</Text>
          <Box height={`1px`} width={`20px`} bgColor={`black`} />
        </HStack>

        {/* Google/Facebook/Apple */}
        <HStack justifyContent={`center`}>
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
          Do you have an account?{` `}
          <Link href={`/auth/login`} fontWeight={`bold`}>
            Login
          </Link>
        </Text>
      </Container>
    </AuthLayout>
  );
}
