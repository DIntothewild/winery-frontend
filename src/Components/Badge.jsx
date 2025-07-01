import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CustomizedBadge() {
  const { countCartItems } = useCartContext();
  const cartItems = countCartItems();
  console.log('Cart Items Count in Badge:', cartItems);

  return (
    <Badge badgeContent={cartItems} color="primary">
      <Link to="/cart">
        <ShoppingCartIcon sx={{ color: "#fff" }} />
      </Link>
    </Badge>
  );
}
