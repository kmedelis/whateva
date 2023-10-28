"use server"
import { createAdvertisement } from "@/utils/general/advertisementService";
import { updateUploadedAdvertisement } from "@/utils/general/uploadedAdvertisementService";

 
export async function POST() {
  seedAdvertisements();
  return Response.json({ now: Date.now() })
}

export async function seedAdvertisements() {
    const vilniusNeighborhoods = [
        "", "Antakalnis", "Antavilis", "Aukštieji Paneriai", "Bajorai", "Balsiai", 
        "Baltupiai", "Bireliai", "Buivydiškės", "Bukčiai", "Burbiškės", 
        "Didieji Gulbinai", "Dvarčionys", "Fabijoniškės", "Filaretai", "Galgiai", 
        "Gariūnai", "Gineitiškės", "Grigiškės", "Gudeliai", "Guriai", 
        "Jeruzalė", "Justiniškės", "Kairėnai", "Kalnėnai", "Karoliniškės", 
        "Kirtimai", "Kryžiokai", "Lazdynai", "Lazdynėliai", "Liepkalnis", 
        "Markučiai", "Mažieji Gulbinai", "Naujamiestis", "Naujaneriai", "Naujininkai", 
        "Naujoji Vilnia", "Ožkiniai", "Pagiriai", "Paneriai", "Pašilaičiai", 
        "Paupys", "Pavilnys", "Pilaitė", "Rasos", "Salininkai", 
        "Santariškės", "Saulėtekis", "Senamiestis", "Šeškinė", "Šiaurės miestelis", 
        "Šnipiškės", "Tarandė", "Trakų Vokė", "Turniškės", "Užupis", 
        "Užusieniai", "Valakampiai", "Verkiai", "Vilkpėdė", "Viršuliškės", 
        "Visoriai", "Zujūnai", "Žemieji Paneriai", "Žirmūnai", "Žvėrynas"
    ];

    const kaunasNeighborhoods = [
        "", "Aleksotas", "Amaliai", "Aukštieji Šančiai", "Aukštutiniai Kaniūkai", "Centras",
        "Dainava", "Eiguliai", "Freda", "Gričiupis", "Kalniečiai",
        "Kleboniškis", "Lampėdžiai", "Marvelė", "Palemonas", "Panemunė",
        "Panerys", "Petrašiūnai", "Rokai", "Romainiai", "Sargėnai",
        "Senamiestis", "Šilainiai", "Vaišvydava", "Vičiūnai", "Vilijampolė",
        "Vytėnai", "Žaliakalnis", "Žemieji Šančiai", "Žemutiniai Kaniūkai"
    ];

    vilniusNeighborhoods.forEach(async (neighborhood) => {
        await updateUploadedAdvertisement("Vilnius", neighborhood, "");
    });


    kaunasNeighborhoods.forEach(async (neighborhood) => {
        await updateUploadedAdvertisement("Kaunas", neighborhood, "");
    });

    console.log(`Seeded advertisements`);
}