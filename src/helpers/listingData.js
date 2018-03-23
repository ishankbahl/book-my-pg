import { northListing } from "../data/north";
import { southListing } from "../data/south";

export default function listingData(location){
    if(location === 'north'){
        return northListing;
    }
    else if(location === 'south'){
        return southListing;
    }
}