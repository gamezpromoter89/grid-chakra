import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Grid, GridItem, SimpleGrid, Link, Box, Flex, HStack } from '@chakra-ui/react'
import NextLink from "next/link"


export default function Home() {
  return (
    <Grid templateColumns='repeat(4, 1fr)'>
      <GridItem colStart={1} colEnd={5} h={{base: '100%'}}>
        <HStack h={{base: '4rem'}} justifyContent={'center'}>
          <Flex>
            <NextLink href='/home' passHref >
              <Link 
                p={4}
                _hover={{
                  background: "white",
                  color: "teal.500"
                }}
              >Comparte tu Trabajo</Link>
            </NextLink>
          </Flex>
          

          <Flex>
            <NextLink href='/home' passHref>
              <Link 
                p={4} 
                _hover={{
                background: "white",
                color: "teal.500",
              }}>Recursos
              </Link>
            </NextLink>
          </Flex>


          <Flex>
            <NextLink href='/home' passHref>
              <Link p={4}>Quienes Somos</Link>
            </NextLink>
          </Flex>

          <Flex>
            <NextLink href='/home' passHref>
              <Link p={4}>Pregunta mas Frecuentre</Link>
            </NextLink>
          </Flex>
          <Flex>
            <NextLink href='/home' passHref>
              <Link p={4}>Iconos</Link>
            </NextLink>
          </Flex>
          <Flex>
            <NextLink href='/home' passHref>
              <Link p={4}>Ingresar</Link>
            </NextLink>
          </Flex>
          <Flex>
            <NextLink href='/home' passHref>
              <Link p={4}>Registrar</Link>
            </NextLink>
          </Flex>
        </HStack>
       
      </GridItem>
      <GridItem>
        Banner
      </GridItem>
      <GridItem>
        Article
      </GridItem>
      <GridItem>Article 2</GridItem>
      <GridItem>Footer</GridItem>
    </Grid>
  )
}
