import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  useDeleteUserMutation,
  useGetUsersLazyQuery,
} from "generated/graphql.tsx";
import { IconButton } from "@material-ui/core";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const UsersTable = () => {
  const [getLazy, { data, loading, error, refetch }] = useGetUsersLazyQuery({});
  const [deleteUserMutation] = useDeleteUserMutation({});
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    getLazy({});
    if (data) {
      setRows(data?.users);
    }
  }, [data]);

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
              deleteUserMutation({
                variables: {
                  prmUser: {
                    id: selectionModel[0]
                      ? selectionModel[0]
                      : toast.error("No user selected"),
                  },
                },
              }).then((res) => {
                res.data.deleteUser.resultType === "SUC"
                  ? toast.success("User deleted successfully")
                  : toast.info(res.data.deleteUser.messageText);
                refetch();
              });
            }}
          >
            <DeleteSharpIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      {
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
      <ToastContainer />
    </div>
  );
};

export default UsersTable;
