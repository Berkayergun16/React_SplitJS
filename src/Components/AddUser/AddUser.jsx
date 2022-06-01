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


const AddUser = ({refetch}) => {
    const [addUserMutation] = useAddUserMutation({ });

    const handleSubmit  = (model) => {
      
      addUserMutation({
        variables: {
          prmUser: model,
        },
      }).then((res) => {
        res.data.addUser.resultType === "SUC" ? alert("User added successfully") : alert(res.data.addUser.messageText);
        refetch();
      })
        .catch((err) => {
          alert(err.message);
        });
    }

  return (
    <div className='p-8'>
      {
        refetch && <AutoForm schema={schema}  onSubmit={handleSubmit}>
        <HiddenField name="id" value={0}/>
        <AutoField name="name" />
        <AutoField name="surname" />
        <AutoField name="username" />
        <AutoField name="password" />
        <SubmitField value="Submit" label={"Add"} />
        <ErrorsField />
        </AutoForm>
      }
       
    </div>
  )
}

export default AddUser