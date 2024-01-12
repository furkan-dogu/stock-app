import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { FormControl, TextField } from "@mui/material";
import useStockCalls from "../service/useStockCalls";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BrandModal({ handleClose, open, data, setData }) {
  const { addStock, updateStock } = useStockCalls();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data._id) {
      updateStock("brands", data._id, data);
    } else {
      addStock("brands", data);
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
          <Box sx={style} component={"form"} onSubmit={handleSubmit}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                label="Marka Adı"
                name="name"
                id="name"
                type="text"
                variant="outlined"
                required
                value={data.name}
                onChange={handleChange}
              />
              <TextField
                label="Resim"
                name="image"
                id="image"
                type="text"
                variant="outlined"
                sx={{ marginTop: "1rem" }}
                required
                value={data.image}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ marginTop: "1rem" }}
              >
                Gönder
              </Button>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
