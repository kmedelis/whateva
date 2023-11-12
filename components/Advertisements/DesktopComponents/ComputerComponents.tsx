import AdvertisementCard from "../MobileComponents/MobileAdvertisementCard";
import DesktopMainAppBar from "./ComputerMainAppBar";
import SearchAppBar from "../MobileComponents/MobileFilterAppBar";

function ComputerComponents({ advertisements, searchAdvertisemenents }) {
    return (
        <div>
            <DesktopMainAppBar />
            <SearchAppBar uploadedAdvertisements={searchAdvertisemenents}/>
            {advertisements.map(ad => (
                <AdvertisementCard ad={ad} key={ad.id} />
            ))}
        </div>
    );
}

export default ComputerComponents;
