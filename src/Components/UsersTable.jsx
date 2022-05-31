import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useGetUsersQuery } from "generated/graphql.tsx";
import { Button } from "@mui/material";

const UsersTable = () => {
    const { data, loading, error } = useGetUsersQuery({ });
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 90 },
    { field: "surname", headerName: "Surname", width: 90 },
    { field: "username", headerName: "Username", width: 90 },
    { field: "password", headerName: "Password", width: 90 },

    
  ];
  console.log(data);

  const paramsFunctions = (params) => {
    return params.api.state.rows.idRowsLookup[params.id];
  };
  return (
    <div style={{ height: 400, width: "50%" }}>
      <DataGrid
        rows={data?.users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UsersTable;
