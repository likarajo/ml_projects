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
      .then(response => response.json())
      .then(data => {
        setResult(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <p>Machine Learning Projects</p>
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width="15%">Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell width="15%">Language</TableCell>
                <TableCell width="15%">Created</TableCell>
                <TableCell width="15%">Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {result.map((row) => (
                <TableRow key={row.full_name}>
                  <TableCell width="15%">
                    <a href={row.svn_url} target="_blank" rel="noreferrer">
                      {row.name}
                    </a>
                  </TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell width="15%">{row.language}</TableCell>
                  <TableCell width="15%" alignRight>{row.created_at}</TableCell>
                  <TableCell width="15%" alignRight sortDirection="desc">{row.updated_at}</TableCell>
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
