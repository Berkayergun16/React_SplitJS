import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useGetUsersQuery,useDeleteUserMutation } from "generated/graphql.tsx";
import { Button } from "@mui/material";
import { IconButton } from "@material-ui/core";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import CachedIcon from '@mui/icons-material/Cached';


const UsersTable = () => {
   const { data, loading, error, refetch } = useGetUsersQuery({});
  const [deleteUserMutation] = useDeleteUserMutation({});
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [rows, setRows] = React.useState(data?.users);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 90 },
    { field: "surname", headerName: "Surname", width: 90 },
    { field: "username", headerName: "Username", width: 90 },
    { field: "password", headerName: "Password", width: 90 },
    {
      field: "delete",
      width: 75,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <IconButton
            onClick={() => {
               const selectedIDs = new Set(selectionModel);
               setRows((r) => r.filter((x) => !selectedIDs.has(x.id)));
            deleteUserMutation({
              variables: {
  
                prmUser: {
                  id: selectionModel[0] ? selectionModel[0] : alert("No user selected"),
                }
              },
            }).then((res) => {
              res.data.deleteUser.resultType === "SUC" ? alert("User deleted successfully") : alert(res.data.deleteUser.messageText);
              refetch();
            })
            }}
          >
            <DeleteSharpIcon />
          </IconButton>
        );
      },
    },
    {
      field: "update",
      width: 75,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <IconButton
            onClick={() => {
              
            }}
          >
            <CachedIcon />
          </IconButton>
        );
      },
    },
  ];
  
 
    
  return (
    <div style={{ height: "100%", width: "100%" }} className="">
     
        {
          refetch() &&
           <DataGrid
          rows={rows}
          onSelectionModelChange={(ids) => {
            setSelectionModel(ids);
          }}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
        />
        }
       
       
     
       
        
    </div>
  );
};

export default UsersTable;
