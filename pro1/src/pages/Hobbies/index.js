import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://lightmv.com/wp-content/uploads/2020/10/lightmv-making-reels-video-20201019.jpg',
    title: 'reels',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://www.standout.co.uk/blog/wp-content/uploads/2018/06/Travel-Style.jpeg',
    title: 'Travel',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlu3dhtSMScKfEMzRgWrkU6ETT-KxSpTkKhg&usqp=CAU',
    title: 'Photography',
    
  },
  {
    img: 'https://static.tnn.in/thumb/msid-90434518,updatedat-1648192881850,width-400,height-225,resizemode-75/90434518.jpg',
    title: 'Cricket',
    
    cols: 2,
  },
  {
    img: 'https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg',
    title: 'music',
    
    cols: 2,
  },
];