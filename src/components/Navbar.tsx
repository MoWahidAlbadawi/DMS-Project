import { NavLink } from 'react-router-dom';
//icon in navber
import navbarIcon from '../../src/assets/navbar-icon.png'
//css file
import classes from './Navbar.module.css'
//components from chakra 
import { Box, Flex, Heading, Stack, IconButton ,Image}  from '@chakra-ui/react';
import { useState } from 'react';
//icons from react-icons
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
//import Links
import { LinkTyppe , MyLinks } from './Links';
   const Navbar = () => {
    //for resposive layout
    const [open , setOpen] = useState(false);
    function ToggleIconOpen () {
        setOpen(prev => !prev);
    }

       return ( 
           <Box bg="teal.500" px={4} py={1} direction={'ltr'}>
               <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Flex ml={{md : '2rem'}}>
                <Image src={navbarIcon} width={'50px'}/>
                   <Heading color={"white"} m={2} as={'h1'}>DM System</Heading>
                   </Flex>
                   {/* small screens */}
                   <IconButton
                       size={'md'}
                       padding={2}
                       aria-label={'Toggle Navigation'}
                       display={{base : 'block' , md: 'none' }}
                       onClick={ToggleIconOpen}
                   >{open ? <IoMdClose /> : <RxHamburgerMenu />}</IconButton>
                   {/* menu in small screens */}
                       <Stack
                       className={classes['menu-small']}
                       bg='teal.100'
                       position={'absolute'}
                       left={'2%'}
                       top={open ? '85px' : '-150px'}
                       display={{base : 'block',md : 'none'}}
                       >
                     {MyLinks.map((myLink : LinkTyppe) => {
                       return  <>
                       <Box onClick={() => setOpen(false)} p={2}><NavLink to={myLink.path}
                       className={({isActive}) => isActive ? `${classes['navlink-small-screen']} ${classes['active-in-small-screens']}` : classes['navlink-small-screen']}>
                        {myLink.title}</NavLink>
                       </Box>
                       </>
                    })}
                       </Stack>
                    {/* bigger screens */}
                   <Flex display={{ base: 'none', md: 'flex' }} 
                   direction={'row-reverse'} mr={'4rem'} gap={{md : '2rem' , lg : '3rem'}} 
                   fontSize={'1.2rem'} color='white'>
                    {MyLinks.map((myLink : LinkTyppe) => {
                       return  <Box><NavLink to={myLink.path}
                       className={({isActive}) => isActive ? classes['active-in-bigger-screens'] : '' }>
                        {myLink.title}</NavLink>
                       </Box>
                    })}
                   </Flex>
               </Flex>
           </Box>
       );
    }
export default Navbar;