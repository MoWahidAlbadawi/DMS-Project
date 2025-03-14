//components from chakra
import { Text , Box} from "@chakra-ui/react";
interface Props {
    message : string,
}
const NoPatient = ({message} : Props) => {   
    return <Box m={'20px'} bg={'white'}  
    textAlign={'center'} borderRadius={'10px'} py={'5px'}>
        <Text color={'teal.900'} fontSize={{base : '1.3rem' , md : '1.5rem'}} 
        m={3}>{message}</Text>
    </Box>
}
export default NoPatient;