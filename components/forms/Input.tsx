'use client';

import React from 'react';
import { Formik } from 'formik';
import * as Yub from 'yup';
import toast from 'react-hot-toast';

const Input = () => {
  return (
    <Formik
      initialValues={{ fullName: '' }}
      validationSchema={Yub.object({
        fullName: Yub.string()
          .min(4, 'Must be more than 4 charaters')
          .max(50, 'Must be less than 50 charaters')
          .required('Required'),
      })}
      onSubmit={(values, actions) => {
        const { setSubmitting, resetForm } = actions;
        toast.success(values.fullName);
        resetForm();
        setSubmitting(false);
      }}
    >
      {(formik) => {
        return (
          <form onSubmit={formik.handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                {...formik.getFieldProps('fullName')}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="text-sm text-red-500">
                  {formik.errors.fullName}
                </div>
              ) : null}
            </div>
            <div className="flex items-center justify-center">
              <button type="submit" disabled={!formik.errors}>
                Take Me In!
              </button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Input;
