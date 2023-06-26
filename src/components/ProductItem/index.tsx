import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { getImageUrl } from "../../lib/utils";
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import MainButton from "../MainButton";


const CustomIcon = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "3rem",
  height: "3rem",
  borderRadius: "50%",
  transition: "all 0.3s linear",
  opacity: 0,
  cursor: "pointer",
  "&:hover ": {
    background: theme.palette.primary.main,
  },
}));

const CustomContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#222",
  borderRadius: "0.25rem",
  "&:hover img": {
    opacity: 0.5,
    cursor: "pointer",
  },
  "&:hover button": {
    opacity: 1,
  },
}));

export interface ProductItemProps {
  id: number;
  photos?: string;
  name: string;  
  price: number;
  url?: any;
}

function ProductItem(props: ProductItemProps) {
  const { id, photos, name,price} = props;
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/products/" + id);
  }
   const addToCartHandler = () => {
    router.push(`/cart?id=${props.id}?qty=1`);
  };
  const handleImageError = (e:any) => {
    e.target.onerror = null;
    e.target.src = "https://via.placeholder.com/400x150?text=no+image+available"  
}

  return (
    <div className="item">
    <Card >
        <CustomContainer>
          <CardMedia
            component="img"
            image={'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'}
            onError={handleImageError}
            sx={{ transition: "all 0.3s linear" }}
            
          />
          <CustomIcon onClick={showDetailsHandler}>
            <ZoomInOutlinedIcon
              sx={{
                color: "white",
                fontSize: "40px",
              }}
            />
          </CustomIcon>
        </CustomContainer>
        <CardContent  sx={{ height:'130px',cursor:'pointer' }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            <Typography sx={{ fontSize: 14 }} gutterBottom component="div">
              {name}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom component="div">
              {price}.00$
            </Typography>
          </Stack>
          <Box sx={{ marginTop: 2 }}>
            <MainButton onClick={addToCartHandler}>ADD TO CART</MainButton>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductItem;
