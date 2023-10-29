import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    ButtonGroup,
} from "@mui/material";
import image1 from '@/images/image1.jpeg';

export default function AdvertisementCard({ ad }) {
    return (
        <Card elevation={3} sx={{ maxWidth: 500, m: 3 }}>
            <CardMedia
                component="img"
                height="200"
                image={image1.src}
                alt={ad.name}
            />
            <Typography variant="caption" component="div" sx={{ ml: 2, mt: 1 }}>
                Virtual Tour
            </Typography>
            <Typography variant="h5" component="div" sx={{ ml: 2 }}>
                ${ad.price}
            </Typography>
            <Typography variant="body1" component="div" sx={{ ml: 2, color: "text.secondary" }}>
                {ad.roomCount} Rooms
            </Typography>
            <CardContent>
                <Typography variant="h6" component="div">
                    {ad.name}
                </Typography>
                <Typography variant="body1" component="p" color="text.secondary">
                    {ad.street} {ad.houseNumber} <br />
                    {ad.city}, {ad.neighborhood}
                </Typography>
                <Typography variant="body2" component="p">
                    {ad.apartment_features.join(", ")}
                </Typography>
            </CardContent>
            <ButtonGroup variant="contained" fullWidth>
                <Button color="primary">Email</Button>
                <Button color="secondary">Call</Button>
            </ButtonGroup>
        </Card>
    );
}
