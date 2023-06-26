import React from "react";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";


const SmallImage = styled("img")(({ theme }) => ({
  width: "100px",
  height: "70px",
  borderRadius: "5%",
}));

interface ProductItemProps {
  id: number;
  photos: string;
  name: string;
  username: string;
  description: string;
  price: number;
  subtotal: number;
  value: any;
  quantitySelectedValue: number;
  onChange: (event: SelectChangeEvent<number>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function CartItem(props: ProductItemProps) {
  const { id, photos, name, price, value, onChange, onClick } = props;
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const router = useRouter();

  function showDetailsHandler() {
    router.push("/products/" + id);
  }
 
  return (
    <>
      {/* <TableCell component="th" scope="row">
        <Button onClick={showDetailsHandler}>
          <SmallImage src={photos || "https://advancepetproduct.com/wp-content/uploads/2019/04/no-image-750x479.png"}
          alt='' 
           ></SmallImage>
        </Button>
      </TableCell> */}
      <TableCell>
        <Typography>{props.username}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{new Date().toDateString()}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{props.id}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{props.name}</Typography>
      </TableCell>
       <TableCell>
        <FormControl sx={{ minWidth: 40 }}>
          <Select
            displayEmpty
            id="demo-controlled-open-select"
            label=""
            onChange={onChange}
            style={{ height: 30 }}
            defaultValue={props.quantitySelectedValue}
          >
            <MenuItem value="1"></MenuItem>
            {quantities.map((quantity) => {
              return (
                <MenuItem key={quantity} value={quantity}>
                  {quantity}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </TableCell>
      <TableCell
        align="left"
        sx={{ display: { xs: "none", md: "table-cell" } }}
      >
        {props.price}
      </TableCell>
     
      <TableCell>
        <Typography
          align="left"
          sx={{ display: { xs: "none", md: "table-cell" } }}
        >
          {props.subtotal}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <IconButton onClick={onClick}>
          <DeleteOutlineIcon color="primary" />
        </IconButton>
      </TableCell>
    </>
  );
}

export default CartItem;
