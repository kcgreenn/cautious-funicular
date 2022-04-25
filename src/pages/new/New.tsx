import React, { useState } from 'react';
import { Form, Formik, useFormik } from 'formik';

import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

import classes from './New.module.scss';
import { IProductInputs, IUserInputs } from '../../data/formSource';

interface Props {
   inputs: IUserInputs | IProductInputs;
   title: string;
}

const New = ({ inputs, title }: Props) => {
   const initialValues: IUserInputs | IProductInputs = inputs;
   const [file, setFile] = useState<File | null>(null);

   return (
      <div className={classes.new}>
         <Sidebar />
         <div className={classes.newContainer}>
            <Navbar />
            <div className={classes.top}>
               <h1 className={classes.title}>{title}</h1>
            </div>
            <div className={classes.bottom}>
               <div className={classes.left}>
                  <img
                     src={
                        file
                           ? URL.createObjectURL(file)
                           : 'https://as2.ftcdn.net/v2/jpg/00/89/55/15/1000_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg'
                     }
                     alt=""
                  />
               </div>
               <div className={classes.right}>
                  <Formik
                     initialValues={initialValues}
                     onSubmit={(values, actions) => {
                        console.log({ values, actions });
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                     }}
                  >
                     <Form></Form>
                  </Formik>
               </div>
            </div>
         </div>
      </div>
   );
};

export default New;

{
   /* <form>
                     <div className={classes.formInput}>
                        <label htmlFor="image">
                           Image:{' '}
                           <DriveFolderUploadOutlinedIcon
                              className={classes.icon}
                           />
                        </label>
                        <input
                           type="file"
                           id="image"
                           style={{ display: 'none' }}
                           onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                           ) =>
                              setFile(
                                 event.target.files
                                    ? event.target.files[0]
                                    : null
                              )
                           }
                        />
                     </div>
                     {inputs.map((input) => (
                        <div className={classes.formInput} key={input.id}>
                           <label htmlFor={input.label}>{input.label}</label>
                           <input
                              type={input.type}
                              placeholder={input.placeholder}
                              id={input.label}
                           />
                        </div>
                     ))}
                     <button type="submit">Send</button>
                  </form> */
}
