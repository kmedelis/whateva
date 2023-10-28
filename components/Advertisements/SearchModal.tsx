"use client"
import React from 'react';
import { Button, Modal, Box, Typography, Autocomplete, TextField, AutocompleteRenderInputParams } from "@mui/material";
import { incrementTimesSearched } from '@/utils/general/uploadedAdvertisementService';
import { UploadedAdvertisement } from '@/models/UploadedAdvertisement';
import { useRouter } from 'next/navigation';

interface SearchModalProps {
    open: boolean;
    onClose: () => void;
    uploadedAdvertisements: UploadedAdvertisement[]
}

const style = {
    position: 'absolute' as 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const SearchModal: React.FC<SearchModalProps> = ({ open, onClose, uploadedAdvertisements }) => {

 const handleAutocompleteChange = async (newValues: string[]) => {
    for (const value of newValues) {
        const [city, neighborhood, street] = value.split(', ');

        await incrementTimesSearched(city, neighborhood, street);

        let url = `/advertisements/${city}`;
        if (neighborhood) {
            url += `-${neighborhood}`;
        }
        if (street) {
            url += `-${street}`;
        }

        router.push(url);
    }
};

    const router = useRouter();

    const sortedAdvertisements = uploadedAdvertisements.sort((a, b) => {
        const weightA = (a.city ? 1 : 0) + (a.neighborhood ? 1 : 0) + (a.street ? 1 : 0);
        const weightB = (b.city ? 1 : 0) + (b.neighborhood ? 1 : 0) + (b.street ? 1 : 0);

        return weightA - weightB;
    });

    return (
        <div>
            <Button onClick={onClose}>Open modal</Button>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Autocomplete
                        multiple
                        id="free-solo-demo"
                        options={sortedAdvertisements.map((option) => {
                            return `${option.city}${option.neighborhood ? `, ${option.neighborhood}` : ''}${option.street ? `, ${option.street}` : ''}`;
                        })}
                        onChange={(event, values) => {
                            handleAutocompleteChange(values);
                        }}
                        renderInput={(params) => <TextField {...params} label="Address" />}
                    />
                </Box>
            </Modal>
        </div>
    );
}

export default SearchModal;
