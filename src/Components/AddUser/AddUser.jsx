import { useAddUserMutation, useGetUsersQuery } from "generated/graphql.tsx";
import React from "react";
import { useNavigate } from "react-router-dom";
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
  const { data, loading, error, refetch } = useGetUsersQuery({});
  const [addUserMutation] = useAddUserMutation({
    onCompleted: () => {
      refetch();
    },
    
  });
  const handleSubmit = (model) => {
    addUserMutation({
      variables: {
        prmUser: model,
      },
    })
      .then((res) => {
        res.data.addUser.resultType === "SUC"
          ? console.log("User added successfully")
          : console.log(res.data.addUser.messageText);
        refetch();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      {refetch && (
        <div className="px-8">
          <AutoForm schema={schema} onSubmit={handleSubmit}>
            <HiddenField name="id" value={0} />
            <AutoField name="name" />
            <AutoField name="surname" />
            <AutoField name="username" />
            <AutoField name="password" />
            <div className="text-center">
              <SubmitField value="Submit" label={"Add"} />
            </div>
            <ErrorsField />
          </AutoForm>
        </div>
      )}
    </div>
  );
};

export default AddUser;
