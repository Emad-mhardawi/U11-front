import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Box, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
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
}));

const OrdersTable = (props) => {
  const classes = useStyles();

  return (
    <TableContainer>
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
              status
            </TableCell>
            <TableCell className={classes.cell} align="left">
              payment Method
            </TableCell>
            
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow className={classes.row}>
            <TableCell className={classes.cell}>
              <div className={classes.product}>
                <div className={classes.imgContainer}>
                  <img alt='product' className={classes.img} src="https://media.wired.com/photos/5f2b2e792f0075bf6e0a1de6/1:1/w_1800,h_1800,c_limit/Gear-Sony-WH-1000XM4-1-SOURCE-Sony.jpg" />
                </div>
                <Box style={{ marginRight: "0" }}>
                  <Typography>xrp 4450</Typography>
                </Box>
              </div>
            </TableCell>

            <TableCell className={classes.cell} align="left">
              555
            </TableCell>
            <TableCell className={classes.cell}>
             444
            </TableCell>
						<TableCell className={classes.cell}>
							visa
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
