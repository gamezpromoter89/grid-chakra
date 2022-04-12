import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Grid, GridItem, SimpleGrid, Link, Box, Flex, HStack, Button, Center, Text, transition, Heading } from '@chakra-ui/react'
import NextLink from "next/link"
import { BiCommentCheck, BiCommentEdit, BiCommentDots } from "react-icons/bi";


export default function Home() {
  return (
    <Grid templateColumns='repeat(4, 1fr)'>
      <GridItem colStart={1} colEnd={5}>
        <HStack h={{base: '4rem'}} justifyContent={'center'} color={'black'}>
          <Flex>
            <NextLink href='/home' passHref >
              <Link 
                p={4}
                _hover={{
                  background: "gray.100",
                  color: "black"
                }}
              >Comparte tu Trabajo</Link>
            </NextLink>
          </Flex>
          

          <Flex>
            <NextLink href='/home' passHref>
              <Link 
                p={4} 
                _hover={{
                background: "gray.100",
                color: "black",
              }}>Recursos
              </Link>
            </NextLink>
          </Flex>


          <Flex>
            <NextLink href='/home' passHref>
            <Link 
                p={4} 
                _hover={{
                background: "gray.100",
                color: "black",
              }}>Quienes Somos</Link>
            </NextLink>
          </Flex>

          <Flex>
            <NextLink href='/home' passHref>
            <Link 
                p={4} 
                _hover={{
                background: "gray.100",
                color: "black",
              }}>Pregunta mas Frecuentre</Link>
            </NextLink>
          </Flex>

          <Flex>
            <NextLink href='/home' passHref>
            <Link 
                p={4} 
                _hover={{
                background: "gray.100",
                color: "black",
              }}>Iconos</Link>
            </NextLink>
          </Flex>

          <Flex>
            <NextLink href='/home' passHref>
            <Link 
                p={4} 
                _hover={{
                background: "gray.100",
                color: "black",
              }}>Ingresar</Link>
            </NextLink>
          </Flex>

          <Flex>
            <NextLink href='/home' passHref>
            <Link 
                p={4} 
                _hover={{
                background: "gray.100",
                color: "black",
              }}>Registrar</Link>
            </NextLink>
          </Flex>
        </HStack>
       
      </GridItem>



      <GridItem colStart={1} colEnd={5} h={{base: '25rem'}} bgImage={"url('/banner.jpg')"} bgSize={'cover'}>
        
      </GridItem>


      <GridItem colStart={1} colEnd={5} justifyContent={'center'} gap={3} borderBottom={'0.10rem solid hsl(0, 0%, 90%)'}>
          <Flex justify={'center'}>
            <Center p={2} m={2} justify={'center'} borderRadius={'1rem'}
            _hover={{
              bg: 'gray.50',
              transition: 'all 0.4s',
              cursor: 'pointer'
            }}>
              <Text color={'gray.700'} px={3}><b>welovewebdesing 1</b></Text>
              <Button bg={'green.400'} color={'white'}><b>300</b></Button>
            </Center>
            <Center p={2} m={2} justify={'center'} borderRadius={'1rem'}
            _hover={{
              bg: 'blue.50',
              transition: 'all 0.4s',
              cursor: 'pointer'
            }}>
              <Text color={'gray.700'} px={3}><b>welovewebdesing 2</b></Text>
              <Button bg={'blue.400'} color={'white'}><b>400</b></Button>
            </Center>
          </Flex>


          <Flex justify={'center'}>
            <Center p={2} m={2} justify={'center'} borderRadius={'1rem'}
            _hover={{
              bg: 'blue.50',
              transition: 'all 0.4s',
              cursor: 'pointer'
            }}>
              <Text color={'gray.700'} px={3}><b>welovewebdesing 3</b></Text>
              <Button bg={'yellow.500'} color={'white'}><b>500</b></Button>
            </Center>
            <Center p={2} m={2} justify={'center'} borderRadius={'1rem'}
            _hover={{
              bg: 'gray.50',
              transition: 'all 0.4s',
              cursor: 'pointer'
            }}>
              <Text color={'gray.700'} px={3}><b>welovewebdesing 4</b></Text>
              <Button bg={'red.400'} color={'white'}><b>600</b></Button>
            </Center>
          </Flex>
      </GridItem>


      {/* Beneficios de Compartir */}
      <GridItem colStart={1} colEnd={5} mb={'2rem'} >
        <Box pt={'5rem'} pb={'3rem'}>
          <Center>
            <Text>POR QUÉ</Text>
          </Center>
          <Center>
            <Heading fontSize={'2rem'}>
              Los beneficios de compartir
            </Heading>
          </Center>
        </Box>
        {/* Box - Description of Article */}
        <Flex justify={'center'} px={'2rem'} h={'250px'} pt={'2rem'} color={'gray.600'}>
          <Box w={{base: '250px',md: '250px', xl: '400px'}}>
            <Center fontSize={'2.4rem'} >
              <BiCommentCheck/>
            </Center>
            <Text fontSize={'1.2rem'} textAlign={'center'} pt={'1rem'}>Comparte tu trabajo con diseñadores de todo el mundo.</Text>
          </Box>
          <Box w={{base: '250px',md: '250px', xl: '400px'}}>
            <Center fontSize={'2.4rem'} >
              <BiCommentEdit/>
            </Center>
            <Text fontSize={'1.2rem'} textAlign={'center'} pt={'1rem'}>Inspírate a ti mismo y a los demás con tus diseños.</Text>
          </Box>
          <Box w={{base: '250px',md: '250px', xl: '400px'}}>
            <Center fontSize={'2.4rem'} >
              <BiCommentDots/>
            </Center>
            <Text fontSize={'1.2rem'} textAlign={'center'} pt={'1rem'}>Inspírate a ti mismo y a los demás con tus diseños.</Text>
          </Box>  
        </Flex>
         
            
      </GridItem>
      <GridItem colStart={1} colEnd={5} bg={'gray.500'} h={'16rem'}>
            
      </GridItem>
    </Grid>
  )
}
