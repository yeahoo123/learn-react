import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/FormControl/InputField';

const schema = yup.object().shape({
  title: yup.string()
  .required('Please enter title')
  .min(5, 'Title is too short'),
});
function TodoForm({onSubmit}) {
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema)
    })
    const handleSubmit = (value) => {
        console.log(value);
        if(onSubmit){
            onSubmit(value)
        }
        form.reset()
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField form={form} name="title" label="todo"/>
        </form>
    );
}

export default TodoForm;