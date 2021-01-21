import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './App.css';

function App() {

  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/likarajo/repos', {method: "GET"})
      .then(data => {
        setResult(data);
      })
      .catch(error => console.log(error));
  });

  return (
    <div className="App">
      <p>Machine Learning Projects</p>
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Link</TableCell>
                <TableCell>Language</TableCell>
                <TableCell>Created</TableCell>
                <TableCell>Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {result.map((row) => (
                <TableRow key={row.full_name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">{row.link}</TableCell>
                  <TableCell align="right">{row.language}</TableCell>
                  <TableCell align="right">{row.created_at}</TableCell>
                  <TableCell align="right">{row.updated_at}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default App;
