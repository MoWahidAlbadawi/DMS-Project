import { Link } from 'react-router-dom';
import classes from './Error404.module.css'
import { Box , Text } from '@chakra-ui/react';

const Err404 = () => {
    return <Box className={classes.arlinacode}>
        <Box className={classes['arlinacode__content']} as={'header'}>
            <Text as={'h1'} className={classes['arlinacode__title']} fontSize={30}>Error 404</Text>
            <Box className={classes['arlinacode__text']}>
                 الصفحة التي تحاول الوصول  إليها ربما تم نقلها أو  إزالتها من قبل صاحب الصفحة 
            </Box>
        </Box>
        <Box className={classes['arlinacode__footer']} as={'footer'}>
        <Link to={'/'} className={`${classes.ripple} ${classes.tombol}`}>
        العودة إلى الصفحة الرئيسية
        </Link>
        </Box>
        <Box className={classes.wave}></Box>
        <Box className={`${classes.wave} ${classes.wave2}`}></Box>
        <Box className={`${classes.wave} ${classes.wave3}`}></Box>
    </Box>
}
export default Err404;