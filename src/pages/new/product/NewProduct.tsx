import React, { useState } from 'react';
import { Field, Form, Formik, useFormik } from 'formik';

import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

import classes from '../New.module.scss';
import { IProductInputs, IUserInputs } from '../../../data/formSource';

interface Props {
   inputs: IUserInputs | IProductInputs;
   title: string;
}

const NewProduct = ({ inputs, title }: Props) => {
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
                           <label htmlFor="title">Title</label>
                           <Field id="title" name="title" />
                        </div>
                        <div className={classes.formInput}>
                           <label htmlFor="description">Description</label>
                           <Field id="description" name="description" />
                        </div>
                        <div className={classes.formInput}>
                           <label htmlFor="category">Category</label>
                           <Field id="category" name="category" />
                        </div>
                        <div className={classes.formInput}>
                           <label htmlFor="price">Price</label>
                           <Field id="price" name="price" />
                        </div>
                        <div className={classes.formInput}>
                           <label htmlFor="stock">Stock</label>
                           <Field id="stock" name="stock" />
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

export default NewProduct;
