export interface LinkTyppe {
    title : string,
    path : string,
}

export const MyLinks : LinkTyppe[] = [
    {
        title : 'الصفحة الرئيسية',
        path : '/',
    },
    {
        title : 'إضافة حجوزات',
        path : '/addappointment',
    },
    {
        title : 'الحجوزات والمرضى',
        path : '/patients',
    }
];