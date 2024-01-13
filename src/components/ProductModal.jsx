import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Modal from "@mui/material/Modal"
import { modalStyle } from "../styles/globalStyle"
import useStockCalls from "../service/useStockCalls"

export default function ProductModal({ open, handleClose, info, setInfo }) {
  const { addStock, updateStock } = useStockCalls()

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  console.log(info)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (info._id) {
        updateStock("firms", info)
    } else {
        addStock("firms", info)
    }
    handleClose()
  }

  console.log(info)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField
              label="Firma Adı"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Telefon"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
              required
            />
            <TextField
              label="Adres"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
              required
            />
            <TextField
              label="Resim"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              {info._id ? "Güncelle" : "Ekle"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
