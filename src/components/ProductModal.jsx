import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globalStyle";
import useStockCalls from "../service/useStockCalls";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSelector } from "react-redux";

export default function ProductModal({ open, handleClose, info, setInfo }) {
  const { addStock } = useStockCalls();

  const { products, categories, brands } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  console.log(info);
  const handleSubmit = (e) => {
    e.preventDefault();
    addStock("products", info);
    handleClose();
  };

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
            <FormControl fullWidth>
              <InputLabel id="categories">Kategoriler</InputLabel>
              <Select
                labelId="categories"
                id="categories"
                value={info?.category || ""}
                label="Kategoriler"
                onChange={(e) => setInfo({ ...info, category: e.target.value })}
              >
                {categories.map((category) => (
                  <MenuItem key={category?._id} value={category?.name}>
                    {category?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="categories">Markalar</InputLabel>
              <Select
                labelId="categories"
                id="categories"
                value={info?.brand || ""}
                label="Markalar"
                onChange={(e) => setInfo({ ...info, brand: e.target.value })}
              >
                {brands.map((brand) => (
                  <MenuItem key={brand?._id} value={brand?.name}>
                    {brand?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Ürün Adı"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
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
  );
}
