import React from "react";
import {
  Button,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "../redux/slices/cartSlice";

const ListUi = ({ id, image, title, description, price, quantity }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      justifyContent="space-around"
      alignItems="center"
    >
      <div>
        <CardMedia
          component="img"
          height="100"
          width="100"
          image={image}
          alt={title}
          sx={{ objectFit: "contain" }}
        />
      </div>
      <div>
        <Typography variant="subtitle1">{title.substring(0, 20)}</Typography>
        <Typography variant="body1">{description.substring(0, 50)}</Typography>
      </div>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button variant="outlined" onClick={handleDecrement} style={{ border: "1px solid" }}>
          -
        </Button>
        <div style={{ padding: "0 20px" }}>{quantity}</div>
        <Button variant="outlined" onClick={handleIncrement} style={{ border: "1px solid" }}>
          +
        </Button>
      </Stack>
      <div>{price}</div>
      <div>{(price * quantity).toFixed(2)}</div>
      <Button variant="outlined" color="secondary" onClick={handleRemove}>
        Remove
      </Button>
    </Stack>
  );
};

export default ListUi;
