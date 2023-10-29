import AdvertisementCard from "./AdvertisementCard";
import MainAppBar from "./MainAppBar";
import SearchAppBar from "./SearchAppBar";

function ComputerComponents({ advertisements, searchAdvertisemenents }) {
    return (
        <div>
            <MainAppBar />
            <SearchAppBar uploadedAdvertisements={searchAdvertisemenents}/>
            {advertisements.map(ad => (
                <AdvertisementCard ad={ad} key={ad.id} />
            ))}
        </div>
    );
}

export default ComputerComponents;
