import React from "react";
import { getData, saveData } from "../utils";
import {Modal, TextField, Button, Box} from "@material-ui/core"
import { useDispatch } from "react-redux";
import { getDataFromLocal } from "../Redux/action";

const init = {
  first_name:"",
  last_name:"",
  email:"",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Form = (props) => {
  const { id, setEditStart } = props;
  const [form, setForm] = React.useState(init);
  const [openModal, setOpenModal] = React.useState(false);
  const dispatch = useDispatch()

  React.useEffect(() => {
    let data = getData("listitem");
    if(data){
      let newData = data.filter((item) => item.id === id );
      setForm({...newData[0]})
      handelModalOpen()
    }

  },[])

  const handelModalOpen = () => {
    setOpenModal(true)
  }

  const handelModalClose = () => {
    setOpenModal(false)
    setEditStart(false)
  }

  const handelFormChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  }

  const handelFormSubmit = () => {
    let data = getData("listitem");
    if(data){
      let newData = data.map((item) => item.id == id ? {...form} : item);
      saveData("listitem", newData);
      dispatch(getDataFromLocal());
      handelModalClose()
    }
  }


 
  return (
    <>
      <Modal title='Edit Data'  open={openModal}
        onClose={handelModalClose}>
        <Box sx={style}>
          <TextField required
            id="outlined-required"
            label="First Name"
            name='first_name' value={form.first_name} onChange = {handelFormChange} />
          <br></br>
          <TextField required
            id="outlined-required"
            label="Last Name"
            name='last_name' value={form.last_name} onChange = {handelFormChange} />
          <br></br>
          <TextField required
            id="outlined-required"
            label="Email"
            name='email' value={form.email} onChange = {handelFormChange} />

          <div style={{width: "50%", display: "flex", justifyContent: "space-evenly",
            marginTop: "10px", padding: "5px", marginLeft: "40%"}}>
            <Button variant="contained" onClick={handelFormSubmit} style={{backgroundColor: "#428ff7", color: "white"}}>Submit</Button>
            <Button variant="outlined" onClick={handelModalClose}>Cancel</Button>
          </div>
        </Box>
      </Modal>   
    </>
  );
};

export default Form;