import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualification() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="sree chaitanaya" src="https://th.bing.com/th/id/R.106cd5272dec33cd155fc46d9d5f3f0c?rik=e%2f2Z8jRN%2bcHgmg&riu=http%3a%2f%2fwww.scce.ac.in%2fparent12%2findex_files%2flogo.jpg&ehk=y0TUpTcAF10AqorDYNmeqYKMYfR1ksBS%2fe4Xb1KcCTc%3d&risl=&pid=ImgRaw&r=0" />
        </ListItemAvatar>
        <ListItemText
          primary="sree chaitanaya engineering College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                60% CGPA
              </Typography>
              {" — B tech electronics, Information Technology"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Trinity college" src="https://image3.mouthshut.com/images/imagesp/925918266s.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Trinity Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                70% CGPA
              </Typography>
              {" — Intermediate studies with Maths & physics"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="ZPHS pch" src="https://media-exp2.licdn.com/dms/image/C510BAQEbtMKHDdVZyw/company-logo_200_200/0/1567945871464?e=2147483647&v=beta&t=u4rqTn7cdBh4akx_NhLYyreMQxYvytTknuU_B2P_N-s"/>
        </ListItemAvatar>
        <ListItemText
          primary="ZPHS Pachunoor"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                85% CGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}