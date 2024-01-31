
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import WestIcon from '@mui/icons-material/West';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Zencloud-Ascent
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [{name: "Beginner Yoga",academy:"Rishi Academy"}, {name : "Yin Yoga",academy:"Zen Academy"},
 {name:"Bikam Yoga",academy:"Bikam Academy"}, {name:"Anusara Yoga",academy:"Anusara Academy"}, 
 {name:"Aether Yoga",academy:"Sai Academy"}, {name:"Divine Yoga",academy:"Zen Academy"}];

const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Link to={"/user-dashboard"}>
          <WestIcon sx={{ mr: 2 }}/>
          </Link>
          <Typography variant="h6" color="inherit" noWrap>
            Courses
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        
        
        <Container sx={{ py: 8 }} maxWidth="md">
        
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?yoga"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                     {card.name}
                    </Typography>
                    <Typography>
                      {card.academy}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View Course</Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    
        <Copyright />
      </Box>
      
    </ThemeProvider>
  );
}