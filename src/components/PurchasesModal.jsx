import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { modalStyle } from "../styles/globalStyles";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PurchasesModal({ open, handleClose, data, setData }) {
  const { addStock, updateStock } = useStockCalls();
  const { brands, products, firms } = useSelector((state) => state.stock);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(data._id) {
        updateStock("purchases", data)
    } else {
        addStock("purchases", data);
    }
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
              <InputLabel id="firm-select-label">Firms</InputLabel>
              <Select
                labelId="firm-select-label"
                id="firm-select"
                name="firmId"
                value={data?.firmId || ""}
                label="Firms"
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate("/stock/firms")}>
                  Add New Firm
                </MenuItem>
                <hr />
                {firms?.map((firm) => (
                  <MenuItem key={firm._id} value={firm._id}>
                    {firm.name}
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
                <MenuItem onClick={() => navigate("/stock/brands")}>
                  Add New Brand
                </MenuItem>
                <hr />
                {brands?.map((brand) => (
                  <MenuItem key={brand._id} value={brand._id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="product-select-label">Products</InputLabel>
              <Select
                labelId="product-select-label"
                id="product-select"
                name="productId"
                value={data?.productId || ""}
                label="Products"
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate("/stock/products")}>
                  Add New Product
                </MenuItem>
                <hr />
                {products?.map((product) => (
                  <MenuItem key={product._id} value={product._id}>
                    {product.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Quantity"
              name="quantity"
              id="quantity"
              type="number"
              variant="outlined"
              value={data.quantity}
              onChange={handleChange}
              required
            />
            <TextField
              label="Price"
              name="price"
              id="price"
              type="number"
              variant="outlined"
              value={data.price}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
                {data._id ? "update purchases" : "add purchases"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
