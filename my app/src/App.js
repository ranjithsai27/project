import './App.css';
import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const useStyless = {
  backgroundColor: "orangered",
  color: "white"
}

const backstyle ={ 
  
    backgroundColor: "black",
    color: "white",
    fontSize : "large",
    fontFamily : "italic"
  
}

 const styless ={
  fontSize : "large",
  fontFamily : "italic"
 }

  const mystyle={
    color: "black",
  backgroundColor: "white",
  padding: "-10px",
  fontFamily: "italic",
  float : "right"
  }

const App = () => {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getProductData = async () => {
    try {
      const data = await axios.get("https://jsonplaceholder.typicode.com/users"
      );
      console.log(data.data);
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search here" style={mystyle}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell style={backstyle}>Name</TableCell>
              <TableCell style={backstyle}>Email Id</TableCell>
              <TableCell style={backstyle} >Phone</TableCell>
              <TableCell style={backstyle}>City</TableCell>
              <TableCell style={backstyle}>CompanyName</TableCell>
              <TableCell style={backstyle}>More Info Links</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.filter((item) => {
              if (search == "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
              .map((item) => (
                <TableRow key={item.name}  >
                  <TableCell component="th" scope="item" style={styless}>{item.name} </TableCell>
                  <TableCell component="th" scope="item" style={styless}>{item.email}</TableCell>
                  <TableCell component="th" scope="item" style={styless}>{item.phone}</TableCell>
                  <TableCell component="th" scope="item" style={styless}>{item.address.city}</TableCell>
                  <TableCell component="th" scope="item" style={styless}>{item.company.name}</TableCell>
                  <TableCell component="th" scope="item" style={styless}> <button style={useStyless} >More Info</button></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

}

export default App;