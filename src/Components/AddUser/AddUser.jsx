import { useAddUserMutation } from 'generated/graphql.tsx';
import React from 'react'
import {
    AutoForm,
    SelectField,
    AutoField,
    HiddenField,
    SubmitField,
    ErrorsField,
  } from "uniforms-material";
  import { bridge as schema } from "./Schema";


const AddUser = () => {
    const [addUserMutation] = useAddUserMutation({ });
  return (
    <div>
        <AutoForm schema={schema} onChangeModel={(model)=>console.log(model)}>
            <HiddenField name="id" value={0}/>
            <AutoField name="name" />
            <AutoField name="surname" />
            <AutoField name="username" />
            <AutoField name="password" />
            <SubmitField value="Submit" />
            <ErrorsField />
            </AutoForm>
    </div>
  )
}

export default AddUser