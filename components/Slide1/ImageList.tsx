import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  let cols = 4;
  let rowHeight = 121;
  let width = 663;
  let height = 690;

  if (isTablet) {
    cols = 3;
    rowHeight = 100;
    width = 800 ;
    height = 210 ;
  } else if (isMobile) {
    cols = 2;
    rowHeight = 100;
    width = 340;
    height = 210;
  }

  return (
    <>
      <div className="lg:pt-7 pt-14 md:justify-center md:text-center">
        <ImageList
          sx={{ width, height }}
          variant="quilted"
          cols={cols}
          rowHeight={rowHeight}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, rowHeight, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
}

const itemData = [
  {
    img: './Object_19.svg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: './Object_20.svg',
    title: 'Burger',
  },
  {
    img: './Object_21.svg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: './Object_22.svg',
    title: 'Hats',
    cols: 2,
  },
  
  {
    img: './Object_1.svg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: './Object_2.svg',
    title: 'Burger',
  },
  {
    img: './Object_3.svg',
    title: 'Camera',
  },
  {
    img: './Object_4.svg',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: './Object_5.svg',
    title: 'Hats',
    cols: 2,
  },
  {
    img: './Object_6.svg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: './Object_7.svg',
    title: 'Basketball',
  },
  {
    img: './Object_8.svg',
    title: 'Fern',
  },
  {
    img: './Object_9.svg',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: './Object_10.svg',
    title: 'Tomato basil',
  },
  {
    img: './Object_11.svg',
    title: 'Sea star',
  },
  {
    img: './Object_12.svg',
    title: 'Bike',
    cols: 2,
  },
];