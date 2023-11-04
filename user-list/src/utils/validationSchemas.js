// lib Yup npm validation package
import * as yup from 'yup';



const USER_SCHEMA = yup.object({
    login: yup.string().email('It is not valid email').required(),
    password: yup.string().trim().min(8).max(64).matches(/(?=.*[A-Z].*).*/, 'pass must contain upper letter').matches(/(?=.*[a-z].*).*/, 'pass must contain lower case latter').required()
  })
  
  const loginData = {
    login: 'qqqq@gmail.com',
    password: 'Ohfdkhkj!dsfhdjskhf'
  }

  
  USER_SCHEMA.validate(loginData).then(data => console.log(data)).catch(err => console.log(err));

  // ------------------------------------------------------------------------------------- \\

  const CAR_SCHEMA = yup.object({
    model: yup.string().trim().min(3).required(),
    productionYear: yup.number().min(2010).max(new Date().getFullYear()).required(),
    km: yup.number().min(1).max(999999),
    plate: yup.string().min(8).matches(/^[A-Z]{2}\d{4}[A-Z]{2}$/,'wrong number').required()
  })

  const carData = {
    model: 'bmw', 
    productionYear: 2023, 
    km: 50000, 
    plate: 'AA0000AA'
  }
  
  CAR_SCHEMA.validate(carData).then(data => console.log(data)).catch(err => console.log(err));


  export const USER_VALIDATION_SCHEMA = yup.object({
    userName: yup
      .string()
      .min(2)
      .max(64)
      .matches(/^[A-Z][a-z]*$/)
      .required(),
  });



  export const USER_CONTACTS_VALIDATION_SCHEMA = yup.object({
    userName: yup
      .string()
      .min(2)
      .max(64)
      .matches(/^[A-Z][a-z]*$/)
      .required(),
    phoneNumber: yup
      .string()
      .length(13)
      .matches(/^\+\d{12}$/, 'NOT CORRECT')
      .required(),
    email: yup.string().email().required(),
    birthday: yup.date().max(new Date()),
  });