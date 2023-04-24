import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

const Post = () => {
  return (
    <Card sx={{ margin: { xs: "2rem auto", md: 5 } }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Some random Title"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="auto"
        image="https://images.unsplash.com/photo-1681532639984-edb0790487d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
        alt="Nature"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste illo
          sequi voluptatum fugiat quod nesciunt porro libero sapiente ex
          suscipit.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
