import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import  IconButton  from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import emptyCartImage from "../Assets/Images/emptyCart.svg";
import ProductQtyButton from "../Components/productQtyButton";
import { Box, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.common.lightGrey,
        paddingTop: theme.spacing(4),
      },
      container: {},
      title: {
        fontWeight: "bold",
      },
      link: {
        textDecoration: "none",
        color: theme.palette.common.mediumGrey,
      },
      paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        boxShadow:
          "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px ",
      },
    
      table: {
        minWidth: 650,
      },
      head: {
        background: theme.palette.common.lightGrey,
        borderRadius: 50,
      },
      cell: {
        border: "none",
      },
      total: {
        display: "flex",
        justifyContent: "space-between",
      },
    
      product: {
        display: "flex",
        width: "fit-content",
        alignItems: "center",
      },
    
      imgContainer: {
        height: "60px",
        width: "60px",
        objectFit: "cover",
        position: "relative",
        marginRight: "15px",
      },
      img: {
        maxWidth: "100%",
        height: "100%",
        position: "absolute",
        borderRadius: "12px",
      },
    
      emptyCart: {
        height: "450px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    
      emptyCartImageBox: {
        width: "100%",
        height: "60%",
        position: "relative",
        objectFit: "cover",
        marginBottom: theme.spacing(2),
      },
      emptyCartImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
      },


}));

const CartProductsTable = (props) => {
  const classes = useStyles();


  return (
    <TableContainer style={{ marginTop: "15px" }}>
                  <Table className={classes.table}>
                    <TableHead className={classes.head}>
                      <TableRow>
                        <TableCell className={classes.cell} align="left">
                          Product
                        </TableCell>
                        <TableCell className={classes.cell} align="left">
                          Price
                        </TableCell>
                        <TableCell className={classes.cell} align="left">
                          Quantity
                        </TableCell>
                        <TableCell className={classes.cell} align="left">
                          Total Price
                        </TableCell>
                        <TableCell
                          className={classes.cell}
                          align="left"
                        ></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {props.cartProducts.map((product) => (
                        <TableRow className={classes.row}>
                          <TableCell className={classes.cell}>
                            <div className={classes.product}>
                              <div className={classes.imgContainer}>
                                <img
                                  className={classes.img}
                                  src={product.imageUrl}
                                />
                              </div>
                              <Box style={{ marginRight: "0" }}>
                                <Typography>{product.productName}</Typography>
                                <Typography variant="body2">
                                  new product from sony
                                </Typography>
                              </Box>
                            </div>
                          </TableCell>
                          <TableCell className={classes.cell} align="left">
                            {product.price}$
                          </TableCell>
                          <TableCell className={classes.cell}>
                            <ProductQtyButton product={product}
                            increaseQty={()=>props.increaseQty(product)}
                            decreaseQty={()=>props.decreaseQty(product)}
                            >
                              {product.qty}
                            </ProductQtyButton>
                          </TableCell>
                          <TableCell className={classes.cell}>{product.price * product.qty} $</TableCell>
                          <TableCell className={classes.cell}>
                            <IconButton onClick={()=>props.removeFromCart(product.id)}>
                              <DeleteForeverIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                </TableContainer>
  );
};

export default CartProductsTable;
