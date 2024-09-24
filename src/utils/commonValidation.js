import {object} from 'yup';

export const commonValidationMsg = {
    email:"Please enter Valid Email ID ",
    password:"Please enter Valid password",
    name:"Please Enter Valid Name"
}

export const  regex = {
    email : /^([A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,})$/,
    password:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    name:/^[a-zA-Z ]{2,30}$/,
}

export const commonValidation = async ({field,fieldValue})=>{
    console.log("field",field ,"+++","fieldValue",fieldValue)
    try {
        await object(field).validate(fieldValue, {abortEarly : false})
    }catch(err){
        console.log("errr---",err)
       return err.inner.reduce((a,error)=>{
            return {
                ...a,
                [error.path]:error.errors[0],
            }
        },{})
    }
    return true;
    }