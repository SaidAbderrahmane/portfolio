import React from 'react';
import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';


function Skills(props) {
  const skills = [
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Expert' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' }
  ];

  return (
    <div>
      <Typography variant="h3" component="h1" gutterBottom>
        Skillset
      </Typography>

      <TableContainer sx={{p:5}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Skill</TableCell>
              <TableCell>Level</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skills.map((skill) => (
              <TableRow key={skill.name}>
                <TableCell>{skill.name}</TableCell>
                <TableCell>{skill.level}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Skills;
