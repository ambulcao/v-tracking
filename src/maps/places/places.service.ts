import { Injectable } from '@nestjs/common';
import { Client as GoogleMapsClient, PlaceInputType } from '@googlemaps/google-maps-services-js';

@Injectable()
export class PlacesService {

    constructor(private googleMapsClient: GoogleMapsClient) {}

    async findPlaces(text: string){
     const { data } = await this.googleMapsClient.findPlaceFromText({
        params: {
            input: text,
            inputtype: PlaceInputType.textQuery,
            fields: ['places.id', 'formatted_address', 'geometry', 'name'],
            key: '',
        },
     });
     return data;
    }
}
