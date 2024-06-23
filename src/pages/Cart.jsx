import { Typography, Stack, Divider, Button } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ListUi from "../components/ListUi";
import { clearCart } from "../slices/cartSlice";
// import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const grandTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        This is add to cart
      </Typography>
      {cartItems.length ? (
        <>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{ mb: 2, borderBottom: "2px solid black", pb: 1 }}
          >
            <Typography
              variant="h6"
              sx={{ width: "100px", textAlign: "center" }}
            >
              Image
            </Typography>
            <Typography
              variant="h6"
              sx={{ width: "200px", textAlign: "center" }}
            >
              Item
            </Typography>
            <Typography
              variant="h6"
              sx={{ width: "150px", textAlign: "center" }}
            >
              Quantity
            </Typography>
            <Typography
              variant="h6"
              sx={{ width: "80px", textAlign: "center" }}
            >
              Price
            </Typography>
            <Typography
              variant="h6"
              sx={{ width: "100px", textAlign: "center" }}
            >
              Total Price
            </Typography>
            <Typography
              variant="h6"
              sx={{ width: "100px", textAlign: "center" }}
            >
              Remove
            </Typography>
          </Stack>
          {cartItems.map((x) => (
            <Stack key={x.id} spacing={2} sx={{ mb: 2 }}>
              <ListUi
                key={x.id}
                id={x.id}
                description={x.description}
                image={x.image}
                title={x.title}
                price={x.price}
                quantity={x.quantity}
              />
              <Divider />
            </Stack>
          ))}
          <Typography variant="h6" sx={{ textAlign: "right", mt: 2 }}>
            Grand Total: ₹{grandTotal}
          </Typography>
          <Button variant="contained" color="secondary" onClick={handleClearCart} sx={{ mt: 2 }}>
            Clear Cart
          </Button>
        </>
      ) : (
        <Typography>Your cart is empty</Typography>
      )}
    </>
  );
};

export default Cart;
