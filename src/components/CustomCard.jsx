import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Rating,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../redux/slices/wishList";

function CustomCard({ title, description, image, price, rating, id }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const isFavorite = wishlist.some((item) => item.id === id);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromWishlist({ id }));
    } else {
      dispatch(addToWishlist({ id, title, description, image, price, rating }));
    }
  };

  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  return (
    <Card
      sx={{
        background: "white",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        width: 300,
      }}
    >
      <Link style={{ textDecoration: "none" }} to={`details/${id}`}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{ objectFit: "contain", padding: 2 }}
        />
        <CardContent sx={{ padding: 2, flexGrow: 1 }}>
          <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
            {title.substring(0, 20)}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {showMore ? description : truncatedDescription}
          </Typography>
          {description.length > 100 && (
            <Typography
              variant="body2"
              color="primary"
              onClick={handleShowMore}
              sx={{ cursor: "pointer" }}
            >
              {showMore ? "Show less" : "Read more"}
            </Typography>
          )}
          <Typography variant="h6" color="primary" sx={{ marginTop: 1 }}>
            ₹{price}
          </Typography>
        </CardContent>
      </Link>
      <CardActions
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Rating value={rating.rate} readOnly />
        <IconButton
          color="primary"
          aria-label="add to wishlist"
          onClick={handleFavorite}
        >
          {isFavorite ? (
            <Favorite sx={{ color: "red" }} />
          ) : (
            <FavoriteBorder sx={{ color: "gray" }} />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CustomCard;
