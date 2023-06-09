import { Text, Heading, Container, Spacer, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import AuthLayout from "@/src/components/auth-layout";
import FormInput from "@/src/components/ui/input";
import Button from "@/src/components/ui/button";
import Head from "next/head";
import Link from "@/src/components/ui/link";
import Image from "next/image";

export default function ForgotPassword() {
  const [resetEmailSent] = useState<boolean>(false);

  return (
    <AuthLayout>
      <Head>
        <title>Forgot Password</title>
      </Head>

      {!resetEmailSent ? (
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
            Forgot Password?
          </Heading>
          <Text fontSize={`sm`} mt={`8px`}>
            No worries, we&apos;ll send you reset instructions.
          </Text>
          <Spacer height={`32px`} />

          {/* Enter Email */}
          <FormInput type="email" placeholder="Enter your email" size={`lg`} />
          <Spacer height={`12px`} />

          {/* Sign In button */}
          <Button width={`full`} size={`lg`} variant={`primary`}>
            Reset Password
          </Button>

          {/* Back to Login */}
          <Link
            mt={`16px`}
            fontSize={`sm`}
            fontWeight={`bold`}
            href="/auth/login"
            display={`flex`}
            justifyContent={`center`}
            alignItems={`center`}
            gap={`8px`}
          >
            <Icon as={FaArrowLeft} />
            <Text>Back to Login</Text>
          </Link>
        </Container>
      ) : (
        <Container
          textAlign={`center`}
          shadow={[`none`, `2xl`]}
          w={[`full`, `md`]}
          bg={`whiteAlpha.900`}
          borderRadius={[`none`, `3xl`]}
          height={`fit-content`}
          px={[`24px`, `48px`]}
          py={[`48px`]}
        >
          <Heading fontSize={`2xl`}>Check your email</Heading>
          <Text fontSize={`sm`} mt={`8px`}>
            We sent a password reset link to{` `}
            <Text fontWeight={`bold`}>example@reviewgush.com</Text>
          </Text>
          <Spacer height={`32px`} />

          {/* Sign In button */}
          <Button width={`full`} size={`lg`} variant={`primary`}>
            Open Email App
          </Button>

          <Text textAlign={`center`} mt={`16px`} fontSize={`sm`}>
            Didn&apos;t receive the email?
            <Link fontWeight={`bold`} href="/">
              {` `}
              Click to resend
            </Link>
          </Text>

          {/* Back to Login */}
          <Link
            mt={`16px`}
            fontSize={`sm`}
            fontWeight={`bold`}
            href="/auth/login"
            display={`flex`}
            justifyContent={`center`}
            alignItems={`center`}
            gap={`8px`}
          >
            <Icon as={FaArrowLeft} />
            <Text>Back to Login</Text>
          </Link>
        </Container>
      )}
    </AuthLayout>
  );
}
