import { PatientStatus } from "@/services/Types";
//components from chakra
import { Text, Button, Stack, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
//moment library for handel date with time
import moment from "moment";
interface Props {
    patient: PatientStatus;
    handleEvent: (patient: PatientStatus) => void;
}

const Patient = ({ patient, handleEvent }: Props) => {
    const formattedDate = moment(patient.appointmentDate).format('YYYY-MM-DD hh:mm A');
    const MotionStack = motion(Stack);
    const MotionButton = motion(Button);

    return (
        <MotionStack 
        whileHover={{ scale: 1.05 }}
        className='patient' gap={3} fontSize={'1.2rem'} color={'gray.900'}>
            <Flex>
                <Text color={'teal.600'} fontWeight={'bold'}>الاسم : </Text>
                <Text pr={1}>{patient.name}</Text>
            </Flex>
            <Flex>
                <Text color={'teal.600'} fontWeight={'bold'}>رقم الهاتف : </Text>
                <Text pr={1}>{patient.phoneNumber}</Text>
            </Flex>
            <Flex>
                <Text color={'red.500'} fontWeight={'bold'}>زمرة الدم : </Text>
                <Text pr={1}>{patient.bloodType}</Text>
            </Flex>
            {/* show date just for comming patients */}
            {patient.status == 'comming' && (
                            <Flex>
                            <Text color={'teal.600'} fontWeight={'bold'}>تاريخ الحجز : </Text>
                            <Text pr={1}>{formattedDate}</Text>
                        </Flex>
            )}
                <MotionButton
                    whileTap={{ scale: 0.8 }}
                    bg={'teal.600'} color={'white'}
                    p={'1rem'} fontSize={'1.1rem'} maxW={'200px'}
                    onClick={() => handleEvent(patient)}
                >
                    {patient.status === 'current'
                        ? 'إنهاء العلاج'
                        : patient.status === 'waiting'
                        ? 'نقل إلى حالة المعالجة'
                        : 'إلغاء الحجز'}
                </MotionButton>
        </MotionStack>
    );
};

export default Patient;
