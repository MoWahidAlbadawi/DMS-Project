import Patient from "@/components/Patient";
import NoPatient from "@/components/NoPatient";
//state types
import { PatientStatus , RootState} from "@/services/Types";
//components from chakra
import { Box, Heading, Stack , SimpleGrid , Flex, Icon } from "@chakra-ui/react";
//redux hooks and actions
import { patientActions } from "@/Store";
import { useDispatch, useSelector } from "react-redux";
//icons
import { GiMonoWheelRobot } from "react-icons/gi";
import { PiStackPlusBold } from "react-icons/pi";
import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import { useEffect } from "react";
//toasts and icons
import toast , {Toaster} from "react-hot-toast";
import { FaCalendarCheck } from "react-icons/fa";
import { GoMoveToTop } from "react-icons/go";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { PiSealWarning } from "react-icons/pi";


const PatientsList = () => {
    const dispatch = useDispatch();
    const AllPatients = useSelector((state : RootState) => state.patient.items);
    const currentPatients : PatientStatus[] = AllPatients.filter((patient : PatientStatus) => patient.status === 'current');
    const waitingPatients : PatientStatus[] = AllPatients.filter((patient : PatientStatus) => patient.status === 'waiting');
    const commingPatients : PatientStatus[] = AllPatients.filter((patient : PatientStatus) => patient.status === 'comming');

    //state mangement functions
    function finishPatient (patient : PatientStatus) {
        dispatch(patientActions.deleteItem(patient));
        toast('تم إنهاء الجلسة بنجاح' , {
            position : 'top-center',
            duration : 3000,
            style : {
                background : '#3b82f6',
                color : 'white',
                padding  : '10px',
            },
            icon : <FaCalendarCheck />
        });
    }

    function movePatientToProcess (patient : PatientStatus) {
        dispatch(patientActions.moveToProcess(patient));
        //check if we already current patient
        if(currentPatients.length > 0) {
            toast('يرجى الانتظار لإفراغ المعالجة' , {
                position : 'top-center',
                duration : 3000,
                style : {
                    background : '#3b82f6',
                    color : 'white',
                    padding  : '10px',
                },
                icon : <PiSealWarning />
        });
    }
        else {
            toast('تم نقل المريض إلى المعالجة' , {
                position : 'top-center',
                duration : 3000,
                style : {
                    background : '#3b82f6',
                    color : 'white',
                    padding  : '10px',
                },
                icon : <GoMoveToTop />
        });
    }
    }

    function deletePatient (patient : PatientStatus) {
        dispatch(patientActions.deleteItem(patient));
        toast('تم إلغاء الحجز بنجاح',{
            position : 'top-center',
            duration : 3000,
            style : {
                background : '#3b82f6',
                color : 'white',
                padding  : '10px',
            },
            icon : <MdOutlineFreeCancellation />
        });
    }
    //store data in local storage just for expirement
    useEffect(() => {
        window.localStorage.setItem('patients',JSON.stringify(AllPatients));
    },[AllPatients]);

    return <Box p='30px'>
        <Stack gap={4}>
            {/* current patients */}
            <Box>
                <Flex bg={'#f2ebeb'} width={'fit-content'} p={'2px 25px'} borderRadius={'10px'}>
                <Icon color={'blue.700'} mt={'10px'} fontSize={'2rem'}><GiMonoWheelRobot /></Icon>
                <Heading as={'h6'} color={'blue.800'} m={3}>المريض الحالي</Heading>
                </Flex>
                {currentPatients.length !==0 ? <SimpleGrid gap={3} columns={{base : 1 , md : 2 }}>
                {currentPatients.map((patient : PatientStatus , key) =>
                <Box key={key}><Patient  patient={patient} handleEvent={finishPatient}/></Box>)}
            </SimpleGrid> : <NoPatient message="لا يوجد مريض تتم معالجته الآن "/>}
            </Box>
            {/* waiting patients */}
            <Box>
            <Flex bg={'#f2ebeb'} width={'fit-content'} p={'2px 25px'} borderRadius={'10px'}>
                <Icon color={'blue.700'} mt={'10px'} fontSize={'2rem'}><PiStackPlusBold /></Icon>
                <Heading as={'h6'} color={'blue.800'} m={3}>المرضى في قاعة الانتظار</Heading>
                </Flex>
                {waitingPatients.length !==0 ? <SimpleGrid gap={3} columns = {{base : 1 , md : 2}}>
                {waitingPatients.map((patient : PatientStatus , key) =>
                <Box key={key}><Patient  patient={patient} handleEvent={movePatientToProcess}/></Box>)}
            </SimpleGrid> : <NoPatient message="لا يوجد مرضى في قاعة الانتظار الآن"/>}
            </Box>
            {/* comming patients */}
            <Box>
            <Flex bg={'#f2ebeb'} width={'fit-content'} p={'2px 25px'} borderRadius={'10px'}>
                <Icon color={'blue.700'} mt={'10px'} fontSize={'2rem'}><FaUpRightAndDownLeftFromCenter /></Icon>
                <Heading as={'h6'} color={'blue.800'} m={3}>المرضى القادمون</Heading>
                </Flex>
                {commingPatients.length !== 0 ? <SimpleGrid gap={3} columns={{base : 1 , md : 2}}>
                {commingPatients.map((patient : PatientStatus , key) =>
                <Box key={key}><Patient  patient={patient} handleEvent={deletePatient}/></Box>)}
            </SimpleGrid> : <NoPatient message="لا يوجد مرضى لديهم حجوزات مسبقة" />}
            </Box>
            <Toaster />
        </Stack>
    </Box>
}
export default PatientsList;    