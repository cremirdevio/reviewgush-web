import { Box, Text, HStack, VStack, Heading, Container, Flex, FormControl, FormLabel, Input, FormHelperText, Spacer, InputGroup, InputLeftAddon, InputLeftElement, Icon, InputRightElement, Button, Link } from '@chakra-ui/react'
import React from 'react'
import { MdFacebook, MdPassword } from 'react-icons/md'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'

export default function Login() {
  return (
    <Flex h={"100vh"} bgColor={"orange.100"} justifyContent={"center"} alignItems={"center"}>
      <Container w={"md"} bg={"whiteAlpha.900"} borderRadius={'3xl'} height={"fit-content"} padding={"48px"}>
        <Heading>Hi, Welcome Back!</Heading>
        <Text fontSize={"sm"}>Start 14 day full-featured trial. No credit card required.</Text>
        <Spacer height={"32px"} />
        {/* Enter Email/Phone no */}
        <FormControl>
          <InputGroup size={"lg"}>
            <InputLeftElement>@</InputLeftElement>
            <Input type='email' placeholder='Enter Email' focusBorderColor='' size={"lg"} />
          </InputGroup>
        </FormControl>
        <Spacer height={"12px"} />
        
        {/* Password */}
        <FormControl>
          <InputGroup size={"lg"}>
            <InputLeftElement>
              <Icon as={MdPassword} />
            </InputLeftElement>
            <Input type='password' placeholder='Password' size={"lg"} />
            <InputRightElement width='4.5rem'>
              <Button h={"70%"} size='sm' onClick={() => console.log}>
                Show
              </Button>
          </InputRightElement>
          </InputGroup>
        </FormControl>

        {/* Trouble Signing in */}
        <Link>
          <Text fontWeight={"bold"} fontSize={"sm"} mt={"16px"} mb={"12px"}>
            Forgot Password?
          </Text>
        </Link>

        {/* Sign In button */}
        <Button width={"full"} size={"lg"} bgColor={"orange.500"} color={"white"}>Sign In</Button>

        {/* Line: or sign in with */}
        <HStack mt={"16px"} mb={"16px"} justifyContent={"center"} alignItems={"center"}>
          <Box height={"1px"} width={"20px"} bgColor={"black"} />
          <Text>Or Sign in with</Text>
          <Box height={"1px"} width={"20px"} bgColor={"black"} />
        </HStack>

        {/* Google/Facebook/Apple */}
        <HStack>
          <Button leftIcon={<FaFacebook />} fontWeight={"bold"} variant={"outline"}>Facebook</Button>
          <Button leftIcon={<FaGoogle />} fontWeight={"bold"} variant={"outline"}>Google</Button>
          <Button leftIcon={<FaApple />} fontWeight={"bold"} variant={"outline"}>Apple</Button>
        </HStack>

        {/* Don't have an account? Register Now */}
        <Text textAlign={"center"} mt={"16px"} fontSize={"sm"}>Don't have an account? <Link fontWeight={"bold"}>Register Now</Link></Text>
      </Container>

      {/* Copyright */}
    </Flex>
  )
}
