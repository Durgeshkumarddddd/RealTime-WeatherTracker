import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function InfoBox({info}) {
    let summer_URL = "https://images.unsplash.com/photo-1665303700017-04f6f2f586db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1bm55JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" 
    let rainy_URL = "https://media.istockphoto.com/id/1164520030/photo/rain-on-umbrella-weather-concept.jpg?s=2048x2048&w=is&k=20&c=490llzrPJ6Huw5UIb5yI0j9fjsagDKh8xokVfKOu_wI="
    let cool_URL = "https://images.unsplash.com/photo-1610215868058-f9879ac512c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <div>
            <h1> All weather information : {info.city} </h1><br></br><br></br>
            <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={ info.humidity > 60 ? rainy_URL : info.temp > 500 ? summer_URL : cool_URL  }
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{info.humidity > 60 ? rainy_URL : info.temp > 500 ? summer_URL : cool_URL }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                           <p>Weather = {info.weather}</p>
                           <p>Temperature = {info.temp}&deg; K</p>
                           <p>Min Temperature = {info.temp_min}&deg;K </p>
                           <p> Max Temperature =  {info.temp_max}&deg;K</p>
                           <p>Pressure = {info.pressure}</p>
                           <p>Humidity = {info.humidity}%</p>
                           <p>Feels-Like = {info.feels_like}°K</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}