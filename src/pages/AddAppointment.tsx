import { Button, Field, Input, Stack , Text } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
//data type
import { PatientData, PatientStatus } from "@/services/Types";
//import actions and hooks redux toolkit
import { patientActions } from "@/Store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//toasts and icons
import toast , {Toaster} from "react-hot-toast";
import { MdAddTask } from "react-icons/md";
import { motion } from "framer-motion";


const AddAppointment = () => {
  //for animate Button
  const MotionButton = motion(Button);
  const [prirorAppointment , setPrirorAppointment] = useState(true);
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register , reset , handleSubmit , formState} = useForm<PatientData>();
    function submitData (data : PatientData) {
        const item : PatientStatus = {
          id : Date.now().toLocaleString(),
          ...data,
          status : data.appointmentType === 'emergency' ? 'current' : data.appointmentType === 'priror' ? 'comming' : 'waiting' ,
        }
        dispatch(patientActions.addItem(item));
        reset();
        //toast to add patient
        toast('تمت إضافة الحجز بنجاح',{
          position : 'bottom-center',
          duration : 1500,
          style : {
            background : '#0aa555',
            color : 'white',
            padding : '10px',
          } ,
          icon : <MdAddTask />,
        });
        //for auto routing
        setTimeout(() => navigate('/patients'),1500);
    }
    function handleChangeAppointmentDate (e : React.ChangeEvent<HTMLSelectElement>) {
      if(e.target.value !== 'priror') {
        setPrirorAppointment(false);
      }
      else {
        setPrirorAppointment(true);
      }
    }
    return <form onSubmit={handleSubmit(submitData)} className="form-appointment">
     <Stack gap="4" align="flex-start"   width={'100%'}>
        <Text mr={{base : '2rem' , sm : '6rem'}} 
        fontWeight={'bold'} color={'teal.600'} fontSize={{ sm : '1.25rem'}}
        >إدخال معلومات المريض والحجز</Text>
          {/* patient's name */}
        <Field.Root invalid={!!formState.errors.name}>
        <Field.Label>اسم المريض</Field.Label>
        <Input {...register("name", {
            required : "يجب ادخال اسم المريض",
        })} />
        <Field.ErrorText>{formState.errors.name?.message}</Field.ErrorText>
        </Field.Root>
        {/* patient's phone number */}
        <Field.Root invalid={!!formState.errors.phoneNumber}>
        <Field.Label>رقم الهاتف</Field.Label>
        <Input {...register("phoneNumber",{
            required : "يجب ادخال رقم الهاتف مكون من 10 ارقام",
            pattern: {
                value: /^09[0-9]{8}$/,
                message: " يجب ادخال رقم الهاتف مكون من 10 ارقام ويبدأ ب 09",
            },
        })} />
        <Field.ErrorText>{formState.errors.phoneNumber?.message}</Field.ErrorText>
        </Field.Root>
        {/* patient's  blood type*/}
        <Field.Root invalid={!!formState.errors.bloodType}>
        <Field.Label>زمرة الدم</Field.Label>
        <select
        {...register('bloodType', {
            required: 'يجب ادخال زمرة الدم',
        })}
        >
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        </select>
        <Field.ErrorText>{formState.errors.bloodType?.message}</Field.ErrorText>
        </Field.Root>
        {/* patient's  reservation type*/}
            <Field.Root invalid={!!formState.errors.appointmentType}>
            <Field.Label>نوع الحجز</Field.Label>
            <select
            {...register('appointmentType', {
                required: 'يجب ادخال نوع الحجز',
            })}
            onChange={handleChangeAppointmentDate}
            >
                <option value='priror'>حجز مسبق</option>
                <option value='direct'>حجز مباشر</option>
                <option value='emergency'>حالة إسعافية</option>
            </select>
            <Field.ErrorText>{formState.errors.appointmentType?.message}</Field.ErrorText>
            </Field.Root>
            {/* reservation history */}
                <Field.Root invalid={!!formState.errors.appointmentDate}>
                <Field.Label>تاريخ الحجز (فقط للمسبق)</Field.Label>
                <Input
                type="datetime-local"
                {...register('appointmentDate', {
                    //validation 
                    validate: (value) => {
                      if(value == '' && prirorAppointment) {
                        return 'يرجى ادخال التاريخ';
                      }
                      const selectedDate = new Date(value);
                      const today = new Date();
                      if(selectedDate < today) {
                        return 'التاريخ غير صالح للحجز'
                      }
                      // I choose dentist time between 11 and 5 
                      const hours = selectedDate.getHours();
                      if(hours < 11 || hours > 17) {
                        return 'الوقت المحدد خارج أوقات دوام العيادة'
                      }
                      return true;
                    },
                  })} 
                  disabled={!prirorAppointment}
                />
                <Field.ErrorText>{formState.errors.appointmentDate?.message}</Field.ErrorText>
                </Field.Root>
      <MotionButton 
      whileTap={{scale : 0.8}}
      type="submit" bg={'blue.500'} color={'white'}
      p={'1rem 1.25rem'} fontSize={'1.1rem'}>إضافة</MotionButton>
      <Toaster />
    </Stack>
  </form>
}
export default AddAppointment;