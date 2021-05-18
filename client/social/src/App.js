import React,{useEffect} from 'react'

import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import useStyles from './styles'
// import Index from '.'
import {getPost} from './actions/posts'
import Form from './components/Form/Form'
import Post from './components/Posts/Posts'
import {useDispatch} from 'react-redux'
import memories from './images/memories.png'

function App() {
    const classes =useStyles();
  const dispatch =useDispatch();
  useEffect(()=>{
      dispatch(getPost())
  },[dispatch])
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center" > Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>




            </AppBar>
            <Grow in>
<Container>
    <Grid container justifycontent = 'space-between' alignitem="stretch" >
        <Grid item xs={12} sm={7}>
              <Post />
        </Grid>
        <Grid item xs={12} sm={7}>
              <Form />
        </Grid>
    </Grid>
</Container>

            </Grow>





        </Container>




    )
}

export default App
