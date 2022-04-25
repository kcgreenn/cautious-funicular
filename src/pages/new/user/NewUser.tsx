import React, { useContext, useState } from 'react';
import { Field, Form, Formik, useFormik } from 'formik';

import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

import classes from '../New.module.scss';
import cs from 'classnames';
import { IProductInputs, IUserInputs } from '../../../data/formSource';
import { DarkModeContext } from '../../../context/darkModeContext';

interface Props {
   inputs: IUserInputs | IProductInputs;
   title: string;
}

const NewUser = ({ inputs, title }: Props) => {
   const initialValues: IUserInputs | IProductInputs = inputs;
   const [file, setFile] = useState<File | null>(null);
   const { state, dispatch } = useContext(DarkModeContext);

   return (
      <div className={cs(classes.new, state.darkMode ? classes.dark : null)}>
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
                  <div className={classes.formInput}>
                     <label htmlFor="photo">
                        Image:{' '}
                        <DriveFolderUploadOutlinedIcon
                           className={classes.icon}
                        />
                     </label>
                     <input
                        type="file"
                        id="photo"
                        style={{ display: 'none' }}
                        onChange={(
                           event: React.ChangeEvent<HTMLInputElement>
                        ) =>
                           setFile(
                              event.target.files ? event.target.files[0] : null
                           )
                        }
                     />
                  </div>
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
                     <Form className={classes.form}>
                        <div className={classes.formInput}>
                           <label htmlFor="username">Username</label>
                           <Field
                              id="username"
                              name="username"
                              placeholder="Username"
                           />
                        </div>
                        <div className={classes.formInput}>
                           <label htmlFor="firstAndLast">
                              First and Last Name
                           </label>
                           <Field
                              id="firstAndLast"
                              name="firstAndLast"
                              placeholder="John Doe"
                           />
                        </div>
                        <div className={classes.formInput}>
                           <label htmlFor="email">Email</label>
                           <Field
                              id="email"
                              name="email"
                              placeholder="john@email.com"
                           />
                        </div>
                        <div className={classes.formInput}>
                           <label htmlFor="phone">Phone</label>
                           <Field
                              id="phone"
                              name="phone"
                              placeholder="555 555 5555"
                           />
                        </div>
                        <div className={classes.formInput}>
                           <label htmlFor="password">Password</label>
                           <Field
                              id="password"
                              name="password"
                              placeholder=""
                              type="password"
                           />
                        </div>
                        <div className={classes.formInput}>
                           <label htmlFor="address">Address</label>
                           <Field
                              id="address"
                              name="address"
                              placeholder="123 Street Rd, New York"
                           />
                        </div>
                        <div className={classes.formInput}>
                           <label htmlFor="country">Country</label>
                           <Field
                              id="country"
                              name="country"
                              placeholder="United States"
                           />
                        </div>
                        <button type="submit">Submit</button>
                     </Form>
                  </Formik>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NewUser;
