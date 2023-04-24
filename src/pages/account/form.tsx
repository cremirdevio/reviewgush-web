import DashboardLayout from '@/src/components/dashboard-layout'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Badge, Box, Card, CardBody, Center, Container, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineAttribution, MdOutlineCelebration, MdOutlineDesignServices, MdOutlineDomainAdd, MdOutlineHandshake, MdOutlineLanguage, MdOutlineMessage, MdOutlineSettings } from 'react-icons/md'

export default function Form() {
    return (
        <DashboardLayout>
            <Flex height={"100vh"}>
                {/* Collecting Form Editor interface */}
                <Container maxWidth={"3xl"}>

                    <Accordion defaultIndex={[0]} allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton py={"4"}>
                                    <AccordionIcon mr={"4"} />
                                    <HStack gap={"4"} fontSize={"lg"}>
                                        <Icon boxSize={"6"} as={MdOutlineDesignServices} color={"purple.500"} />
                                        <Text fontWeight={"normal"} >
                                            Brand Design
                                        </Text>
                                    </HStack>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton py={"4"}>
                                    <AccordionIcon mr={"4"} />
                                    <HStack gap={"4"} fontSize={"lg"}>
                                        <Icon boxSize={"6"} as={MdOutlineHandshake} color={"purple.500"} />
                                        <Text fontWeight={"normal"} >
                                            Welcome Page
                                        </Text>
                                    </HStack>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton py={"4"}>
                                    <AccordionIcon mr={"4"} />
                                    <HStack gap={"4"} fontSize={"lg"}>
                                        <Icon boxSize={"6"} as={MdOutlineMessage} color={"purple.500"} />
                                        <Text fontWeight={"normal"} >
                                            Response Page
                                        </Text>
                                    </HStack>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton py={"4"}>
                                    <AccordionIcon mr={"4"} />
                                    <HStack gap={"4"} fontSize={"lg"}>
                                        <Icon boxSize={"6"} as={MdOutlineAttribution} color={"purple.500"} />
                                        <Text fontWeight={"normal"} >
                                            Attribution Page
                                        </Text>
                                    </HStack>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton py={"4"}>
                                    <AccordionIcon mr={"4"} />
                                    <HStack gap={"4"} fontSize={"lg"}>
                                        <Icon boxSize={"6"} as={MdOutlineCelebration} color={"purple.500"} />
                                        <Text fontWeight={"normal"} >
                                            Thank You Page
                                        </Text>
                                    </HStack>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton py={"4"}>
                                    <AccordionIcon mr={"4"} />
                                    <HStack gap={"4"} fontSize={"lg"}>
                                        <Icon boxSize={"6"} as={MdOutlineLanguage} color={"purple.500"} />
                                        <Text fontWeight={"normal"} >
                                            Language & Labels
                                        </Text>
                                    </HStack>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton py={"4"}>
                                    <AccordionIcon mr={"4"} />
                                    <HStack gap={"4"} fontSize={"lg"}>
                                        <Icon boxSize={"6"} as={MdOutlineDomainAdd} color={"purple.500"} />
                                        <Text fontWeight={"normal"} >
                                            Custom Domain
                                        </Text>
                                    </HStack>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton py={"4"}>
                                    <AccordionIcon mr={"4"} />
                                    <HStack gap={"4"} fontSize={"lg"}>
                                        <Icon boxSize={"6"} as={MdOutlineSettings} color={"purple.500"} />
                                        <Text fontWeight={"normal"} >
                                            Advanced
                                        </Text>
                                    </HStack>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                    </Accordion>
                </Container>

                {/* Collecting Form Preview interface */}
                <Flex flexGrow={1} display={["none", "flex"]} bg={"yellow.200"} >
                    <Center width={"full"} px={"8"} pt={"12"} pb={"14"}>

                        <Card variant={"outline"} width={"full"} pos={"relative"} height={"full"} borderRadius={"2xl"}>
                            <Badge pos={"absolute"} top={"-4"} right={"6"} width={"fit-content"} bg={"white"} variant={'outline'} colorScheme='orange' px={"2"} py={"0.5"} borderRadius={"xl"}>
                                Live Preview - ReviewGush
                            </Badge>
                            <CardBody>

                            </CardBody>
                        </Card>

                    </Center>
                </Flex>
            </Flex>
        </DashboardLayout>
    )
}
