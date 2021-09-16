import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@material-ui/core";
import Form from "../Components/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addProductFormValidation } from "../utils/validate";
import { useForm } from "react-hook-form";
import axiosInstance from "../helpers/axios";
import Alert from "@material-ui/lab/Alert";
import { useSelector } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.common.lightGrey,
    minHeight: "94vh",
    position: "relative",
  },
  inStockBox:{
    display:'flex',
    justifyContent:'space-between'
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const [addNewProduct, setAddNewProduct]= useState({loading:false,status:'', message:''});
  const userLogin= useSelector((state)=> state.userLogin);
  const {userInfo} = userLogin;

  const {register,handleSubmit,formState: { errors }} = useForm({
    mode: "onBlur",
    resolver:yupResolver(addProductFormValidation)
    
  });

  const submit = async (data) => {
    setAddNewProduct({loading:true,status:'', message:''});
    try{
      const response = await axiosInstance.post("/add-new-product",data, {
      headers:{token:'Bearer '+userInfo.token  }
    });
      const resData =  await response.data;
      if (resData.productName) {
        setAddNewProduct({loading:false,status:'success', message:'New product has been added'});
      }
    }catch(err){
      setAddNewProduct({loading:false,status:'fail', message:err.message})
    }
    
 
  };

  return (
    <div className={classes.root}>
      <Form form_title="New Product" desc="create new product" onSubmit={handleSubmit(submit)}>
      {addNewProduct.loading  && <CircularProgress/>}
      {addNewProduct.status==='success' && <Alert  severity="success" >{addNewProduct.message} </Alert> }
			{addNewProduct.status==='fail' && <Alert  severity="error" >{addNewProduct.message} </Alert> }
      <TextField
        name="productName"
        {...register("productName")}
        size="medium"
        variant="outlined"
        fullWidth
        label="Product name"
        error ={errors.productName?.message? true : false}
        helperText={errors.productName?.message}
      />
      
      <Box className={classes.inStockBox}>
      <TextField
        style={{marginRight:'15px'}}
        name="inStock"
        {...register("inStock")}
        size="medium"
        variant="outlined"
        fullWidth
        label="inStock (Number)"
        error ={errors.inStock?.message? true : false}
        helperText={errors.inStock?.message}
      />
      <TextField
        name="price"
        {...register("price")}
        size="medium"
        variant="outlined"
        fullWidth
        label="Price"
        error ={errors.price?.message? true : false}
        helperText={errors.price?.message}
      />
      </Box>

       <TextField
          required
          size="medium"
          variant="outlined"
          fullWidth
          label="Add product description"
          multiline
          rows={4}
          name="description"
          {...register("description")}
          error ={errors.description?.message? true : false}
          helperText={errors.description?.message}
          />

       <TextField
        name="imageUrl"
        rows={9}
        {...register("imageUrl")}
        size="medium"
        variant="outlined"
        fullWidth
        label="Add product image Url"
        error ={errors.imageUrl?.message? true : false}
        helperText={errors.imageUrl?.message}
      />
      <Box>
        <FormControl fullWidth>
          <FormLabel component="legend">Brand</FormLabel>
          <RadioGroup
          name="brand"
          {...register("brand")}
          >
            <FormControlLabel value="sony" control= { <Radio color='primary'/>} label="Sony" />
            <FormControlLabel value="beats" control={<Radio color='primary' />} label="beats" />
            <FormControlLabel value="apple" control={<Radio color='primary' />} label="apple" />
          </RadioGroup>
        </FormControl>
        
      </Box>
      <Button color='primary' variant='contained' type='submit'>Add Product</Button>
      </Form>
    </div>
  );
};

export default Dashboard;
