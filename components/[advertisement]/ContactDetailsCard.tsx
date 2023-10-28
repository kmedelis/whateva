"use client"
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Grid,
    Divider,
    Box
} from "@mui/material";
import styled from "@emotion/styled";
import CallIcon from '@mui/icons-material/Call';


const StyledCard = styled(Card)({
    position: "sticky",
    top: "calc(1rem + 60px)",
    minWidth: "275px",
});

const TitleTypography = styled(Typography)({
    fontSize: 14,
    marginBottom: 12
});

interface ContactDetailsCardProps {
    seller: {
        availability: string[];
        languages: string[];
        phone: string;
    };
}
const ContactDetailsCard: React.FC<ContactDetailsCardProps> = ({ seller }) => (
    <StyledCard elevation={15}>
        <Grid container display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography variant="h5" gutterBottom>
                Contact Details
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                <CallIcon/>Phone Number: {seller.phone}
            </Typography>

            <Typography variant="subtitle2" gutterBottom>
                Languages: {seller.languages.join(', ')}
            </Typography>

            <Typography variant="subtitle2" gutterBottom>
                Availability: {seller.availability.join(', ')}
            </Typography>

            <Typography variant="subtitle2" gutterBottom>
                Preferred contact method: {seller.availability.join(', ')}
            </Typography>

            <Box sx={{ width: '80%', mt: 1, mb: 2 }}>
                <Button variant="contained" fullWidth>Contact by email</Button>
            </Box>

        </Grid>
    </StyledCard>
)


export default ContactDetailsCard;