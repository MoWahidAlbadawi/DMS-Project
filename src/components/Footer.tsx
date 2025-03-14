//components from chakra
import { Heading , Text , Box, Flex , Image, SimpleGrid, Icon, Link} from "@chakra-ui/react";
//image footer
import ImageTeethFooter from '../../src/assets/footer-teeth-icon.png'
//icons from react icons
import { MdPlace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return <Box bg={'teal.200'} color={'#323232'} py={8} direction={'ltr'}>
        <SimpleGrid columns={{base : 1 , md : 2}} placeItems={'center'}>
        <Flex direction={{base : 'column' , md : 'row'}} textAlign={{base : 'center' , md : 'left' }}>
               <Image className="image-footer" src={ImageTeethFooter} 
               width={{base : '150px' , md : '175px' , lg : '150px'}} 
               ml={{base : '5rem' , md : '1rem'}}/>
               <Box m={'25px 15px'}>
                <Heading as={'h4'}>Dental Clinic mangement system</Heading>
                <Box>
                    <Text>
                        <Icon><FaPhoneAlt /></Icon>
                        +963 930270433
                    </Text>
                    <Text>
                        <Icon><MdPlace /></Icon>
                        Syria , Aleppo
                    </Text>
                <Text>ALL rights reserved</Text>
                </Box>
               </Box>
            </Flex>
            <Box textAlign={'center'}>
                <Heading as={'h4'}>Developed by Mohammad </Heading>
                <Text my={1} color={'teal.700'} 
                fontSize={'1.2rem'}>Contact me</Text>
                <Flex justifyContent={'center'} alignItems={'center'} gap={3}>
                    <Box>
                            <Link href="https://t.me/MWahid7">
                            <Icon color={'#323232'}><FaTelegram /></Icon>
                            </Link>
                    </Box>
                    <Box>
                            <Link href="https://www.facebook.com/mohammad.albadawi.77312?mibextid=ZbWKwL">
                            <Icon color={'#323232'}><FaFacebook /></Icon>
                            </Link>
                    </Box>
                    <Box>
                            <Link href="https://www.linkedin.com/in/mohammad-wahid-albadawi-8a8646312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <Icon color={'#323232'}><FaLinkedin /></Icon>
                            </Link>
                    </Box>
                </Flex>
            </Box>
        </SimpleGrid>
    </Box>
}
export default Footer;