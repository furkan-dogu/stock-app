import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import useStockCalls from "../service/useStockCalls";
import { modalStyle } from "../styles/globalStyles";

export default function FirmModal({ handleClose, open, data, setData }) {
  const { addStock, updateStock } = useStockCalls();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data._id) {
      updateStock("firms", data);
    } else {
      addStock("firms", data);
    }
    handleClose();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle} component={"form"} onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Firm Name"
                name="name"
                id="name"
                type="text"
                variant="outlined"
                required
                value={data.name}
                onChange={handleChange}
              />
              <TextField
                label="Phone"
                name="phone"
                id="phone"
                type="text"
                variant="outlined"
                required
                value={data.phone}
                onChange={handleChange}
              />
              <TextField
                label="Address"
                name="address"
                id="address"
                type="text"
                variant="outlined"
                required
                value={data.address}
                onChange={handleChange}
              />
              <TextField
                label="Image"
                name="image"
                id="image"
                type="text"
                variant="outlined"
                required
                value={data.image}
                onChange={handleChange}
              />
              <Button type="submit" variant="contained" size="large">
                {data._id ? "update firm" : "add firm"}
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
