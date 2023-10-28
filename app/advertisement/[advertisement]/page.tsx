import { prisma } from '@/lib/prisma'
import { Divider, Grid, Typography } from '@mui/material';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GradeIcon from '@mui/icons-material/Grade';
import image1 from '@/images/image1.jpeg';
import image2 from '@/images/image2.jpeg';
import image3 from '@/images/image3.jpeg';
import image4 from '@/images/image4.jpeg';
import image5 from '@/images/image5.jpeg';
import dynamic from "next/dynamic"
import ImageGallery from '@/components/[advertisement]/Pictures';
import Navbar from '@/components/[advertisement]/NavBar';
import ContactDetailsCard from '@/components/[advertisement]/ContactDetailsCard';
import InitialPropertyDetails from '@/components/[advertisement]/InitialPropertyDetails';
import AboutDetails from '@/components/[advertisement]/AboutDetails';

const imageUrls = [image1, image2, image3, image4, image5];
const LeafletMap = dynamic(() => import("@/components/[advertisement]/Map"), { loading: () => <p>A map is loading</p>, ssr: false })

const sections = [
  { id: 'features', name: 'Property Details' },
  { id: 'about', name: 'About' },
  { id: 'location', name: 'Location' },
  { id: 'amenities', name: 'Amenities' }
];

export default async function Home() {
  const user = await prisma.user.findFirst({
    where: {
      email: 'test@test.com'
    }
  })

  const advertisement = await prisma.advertisement.findFirst()

  const seller = await prisma.seller.findFirst();

  const adress = advertisement?.city + ", " + advertisement?.neighborhood + ", " + advertisement?.street + ", " + advertisement?.houseNumber;


  return (
    <main>
      <Navbar sections={sections} />
      <ImageGallery images={imageUrls} />
      <Grid container >
        <Grid item xs={8} paddingLeft={10} paddingTop={5}>
          <InitialPropertyDetails advertisement={advertisement} />
          <Divider style={{ width: '100%', height: '0.5px', backgroundColor: 'lightgrey', marginTop: '25px', marginBottom: '25px' }} />
          <AboutDetails advertisement={advertisement} sectionName={sections[1].name} sectionId={sections[1].id}/>
          <h2 id={sections[0].id}>{sections[0].name}</h2>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body2"><ApartmentIcon /> Aukštas: {advertisement?.floor}/{advertisement?.totalFloors}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><WhatshotIcon /> Šildymas: {advertisement?.heating}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><GradeIcon /> Energijos klasė: {advertisement?.energyConsumption}</Typography>
            </Grid>
          </Grid>
          <h2 id={sections[2].id}>{sections[2].name}</h2>
          <b>Property address: </b>{adress}
          <LeafletMap address={adress} />
          <h2 id={sections[3].id}>{sections[3].name}</h2>
          {advertisement?.apartment_features?.length > 0 ? (
            <Grid container spacing={2}>
              {advertisement?.apartment_features.map((feature, index) => (
                <Grid item xs={4} key={index}>
                  <div>
                    • {feature}
                  </div>
                </Grid>
              ))}
            </Grid>
          ) : (
            <p>No features available.</p>
          )}
        </Grid>
        <Grid item xs={4} padding={5}>
          <ContactDetailsCard seller={seller} />
        </Grid>
      </Grid>
    </main>
  )
}
