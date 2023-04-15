import '../styles/Home.module.scss'
import {
    Formik,
    Form,
    Field,
  } from 'formik';
import *as yup from 'yup';

  
  interface MyFormValues {
    yourName: string;
    email: string;
    phoneNumber: string;
    comment: string;
  }
  
export const LeaveRequest: React.FC<{}> = () => {
  const initialValues: MyFormValues = { yourName: '' , email: '', phoneNumber: '', comment: '' };
  const validationsSchema = yup.object().shape({
    yourName: yup.string().typeError("Должно быть строкой").required("Обязательно"),
    email: yup.string().email("Введите верный email").required("Обязательно"),
    phoneNumber: yup.string().typeError("Должно быть строкой").required("Обязательно"),
    comment: yup.string().typeError("Должно быть строкой")
  })
  return (
    <div className='footer'>
      <div className='formFooter'>
        <h1>Leave a request</h1>

        <Formik
          initialValues={initialValues}
          validateOnBlur
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationsSchema}
        >
          {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit}) =>(
          <Form >
            <label htmlFor="yourName">Your name</label>
            <input 
              type={"text"} 
              id="yourName"
              name="yourName" 
              onChange={handleChange} 
              onBlur={handleBlur}
              value={values.yourName} 
              placeholder="Please introduce yourself"/>
          {touched.yourName && errors.yourName && <p className={"error"}>{errors.yourName}</p>}
            <label htmlFor="email">Emaii</label>
            <Field
              type={"email"}
              id="email" 
              name="email" 
              onChange={handleChange} 
              onBlur={handleBlur}
              value={values.email} 
              placeholder="ivanov@mail.ru"/> 
          {touched.email && errors.email && <p className={"error"}>{errors.email}</p>}
            <label htmlFor="phoneNumber">Phone number</label>
            <Field 
              type={"text"}
              id="phoneNumber" 
              name="phoneNumber" 
              onChange={handleChange} 
              onBlur={handleBlur}
              value={values.phoneNumber} 
              placeholder="+7(999)123-45-78"/>
          {touched.phoneNumber && errors.phoneNumber && <p className={"error"}>{errors.phoneNumber}</p>}
            <label htmlFor="comment">Comment</label>
            <Field 
              id="comment" 
              name="comment" 
              onChange={handleChange} 
              onBlur={handleBlur}
              value={values.comment} 
              placeholder="Message text"/>
            {touched.comment && errors.comment && <p className={"error"}>{errors.comment}</p>}
            <button 
              type="submit"
              disabled={!isValid}
            >Send</button>
          </Form>
          )}
        </Formik>

        <div className='confirm'>
        <p>By clicking "Send" you confirm your consent to the <br></br>
        <a>processing of personal data</a>
        </p>
        </div>
      </div>
      <div className='company'>
        <div className='startProject'>
          <p>We will advise you and help you start <br></br> a new project</p>
        </div>
        <div className='numberFooter'>
          <p>+7 499 391-66-69</p>
        </div>
        <div className='mail'>
          <p>mail@greensight.ru</p>
        </div>
        <div className='location'>
          <p>Moscow, Zelenograd, Central Ave., <br></br> bldg. 305, 3rd floor</p>
        </div>
        <div className='question'>
          <p>How to get there?</p>
        </div>
      </div>
    </div>
  );
};
  

