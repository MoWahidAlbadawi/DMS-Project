//components from chakra
import { Box, Text, Flex, Heading, Image, Button } from "@chakra-ui/react";
//css file
import classes from './HomePage.module.css';
//main photo as png
import tooth from '../../src/assets/tooth.png';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const HomePage = () => {
    //for animate welcome text
    const MotionHeading = motion(Heading);
    const welcomeText = "أهلا بكم في نظام إدارة حجوزات العيادات السنية";

    const parentVariants = {
        hidden: { opacity: 0 , y : -20},
        visible: { opacity: 1, y : 0 , transition: { staggerChildren: 0.05 , duration : .5} },
    };

    const childVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <Box p={'50px'}>
            <Flex direction={{ base: 'column', md: 'row-reverse' }} justifyContent={'space-evenly'} alignItems={'center'} mt={{ base: '-20px', md: '30px' }}>
                <Box className={classes['parent-image-home']}>
                    <Image src={tooth} className={classes['image-home']} />
                </Box>
                <Box maxWidth={'400px'} color={'#41C36D'} mt={'50px'} textAlign={'center'}>
                    <MotionHeading as={'h3'} fontSize={'30px'} lineHeight={'1.4'} variants={parentVariants} initial="hidden" animate="visible">
                        {welcomeText.split("").map((char, key) => (
                            <motion.span key={key} variants={childVariants}>
                                {char}
                            </motion.span>
                        ))}
                    </MotionHeading>
                    <Text color={'#2c7f89'} my={7} fontSize={'20px'}>تستطيع بسهولة إضافة حجوزات والتحكم بأولويات الجلسات</Text>
                    <Link to='/addappointment'>
                        <Button bg={'blue.500'} color={'white'} p={'10px 25px'} fontSize={'1.1rem'}>
                            ابدأ الآن
                        </Button>
                    </Link>
                </Box>
            </Flex>
        </Box>
    );
};

export default HomePage;