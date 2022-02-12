import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { deleteData, getDataApi } from "../Redux/action";
import styles from "./Styles/home.module.css";
import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  Paper,
  TableHead,
  TableRow
} from "@material-ui/core";
import Form from "./Form";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state, shallowEqual);
  const [editId, setEditId] = React.useState("");
  const [editStart, setEditStart] = React.useState(false);

  React.useEffect(() => {
    dispatch(getDataApi());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  const handelEditData = (id) => {
    setEditId(id);
    setEditStart(true);
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className={styles.tableContainer}>
      <h1 className={styles.mainTitle}>Welcome</h1>
      {editStart && <Form id = {editId} setEditStart = {setEditStart} />}
      {data && data.length ? 
        (<TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "600" }} align="center">
                                Avatar
                </TableCell>
                <TableCell style={{ fontWeight: "600" }} align="left">
                                FirstName
                </TableCell>
                <TableCell style={{ fontWeight: "600" }} align="left">
                                LastName
                </TableCell>
                <TableCell style={{ fontWeight: "600" }} align="left">
                                Email
                </TableCell>
                <TableCell style={{ fontWeight: "600" }} align="left">
                                Operation
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">
                    <img src={row.avatar} alt="" />
                  </TableCell>
                  <TableCell align="left">{row.first_name}</TableCell>
                  <TableCell align="left">{row.last_name}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell>
                    <button style={{marginRight:"20px",cursor:"pointer"}} onClick={() => handelEditData(row.id)}>Edit</button>
                    <button style={{cursor:"pointer"}} onClick={() => handleDelete(row.id)}>Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>) : <h1 style={{textAlign:"center"}}>Data Empty</h1>
      }   
    </div>
  );
};

export default Home;
