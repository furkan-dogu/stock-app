import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { modalStyle } from "../styles/globalStyles";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";

export default function ProductModal({ open, handleClose, data, setData }) {
  const { addStock } = useStockCalls();
  const { brands, categories } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStock("products", data);
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
              <InputLabel id="category-select-label">Categories</InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                name="categoryId"
                value={data?.categoryId || ""}
                label="Categories"
                onChange={handleChange}
                required
              >
                {categories?.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="brand-select-label">Brands</InputLabel>
              <Select
                labelId="brand-select-label"
                id="brand-select"
                name="brandId"
                value={data?.brandId || ""}
                label="Brands"
                onChange={handleChange}
                required
              >
                {brands?.map((brand) => (
                  <MenuItem key={brand._id} value={brand._id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Product Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={data.name}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              add product
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
