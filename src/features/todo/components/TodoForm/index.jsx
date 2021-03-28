import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/FormControl/InputField';

const schema = yup.object().shape({
  title: yup.string().required('Please enter title'),
});
function TodoForm(onSubmit) {
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema)
    })
    const handleSubmit = (value) => {
        console.log(value);
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField form={form} name="title" label="todo"/>
        </form>
    );
}

export default TodoForm;