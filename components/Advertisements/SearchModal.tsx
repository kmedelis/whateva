"use client"
import React, { useState } from 'react';
import { Button, Modal, Box, Typography, Autocomplete, TextField, AutocompleteRenderInputParams, Hidden, Dialog } from "@mui/material";
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
    width: '95%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const SearchModal: React.FC<SearchModalProps> = ({ open, onClose, uploadedAdvertisements }) => {

    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const router = useRouter();

    const handleAutocompleteChange = async (newValues: string[]) => {
        let allUrls: string[] = [];

        for (const value of newValues) {
            const [city, neighborhood, street] = value.split(', ');

            await incrementTimesSearched(city, neighborhood, street);

            let url = `${city}`;
            if (neighborhood) {
                url += `-${neighborhood}`;
            }
            if (street) {
                url += `-${street}`;
            }

            allUrls.push(url);
        }

        const combinedUrl = `/advertisements/${allUrls.join('&')}`;
        router.push(combinedUrl);
    };

    const handleSearchButtonClick = () => {
        if (selectedValues.length === 0) {
            return;
        }
        handleAutocompleteChange(selectedValues);
    };


    const handleModalCloseMobile = () => {
        if (selectedValues.length === 0) {
            onClose();
            return;
        }
        handleAutocompleteChange(selectedValues);
    }

    const sortedAdvertisements = uploadedAdvertisements.sort((a, b) => {
        const weightA = (a.city ? 1 : 0) + (a.neighborhood ? 1 : 0) + (a.street ? 1 : 0);
        const weightB = (b.city ? 1 : 0) + (b.neighborhood ? 1 : 0) + (b.street ? 1 : 0);

        return weightA - weightB;
    });

    return (
        <div>
            <Hidden smDown>
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
                            value={selectedValues}
                            onChange={(event, values) => {
                                setSelectedValues(values);
                            }}
                            renderInput={(params) => <TextField {...params} label="Address" />}
                        />
                        <Button onClick={handleModalCloseMobile}>Close</Button>
                        <Button onClick={handleSearchButtonClick}>Search</Button>
                    </Box>
                </Modal>
            </Hidden>

            <Hidden smUp>
                <Dialog
                    open={open}
                    fullScreen
                    fullWidth>
                    <Button onClick={handleModalCloseMobile}>close</Button>
                    <Autocomplete
                        multiple
                        options={sortedAdvertisements.map((option) => {
                            return `${option.city}${option.neighborhood ? `, ${option.neighborhood}` : ''}${option.street ? `, ${option.street}` : ''}`;
                        })}
                        onChange={(event, values) => {
                            setSelectedValues(values);
                        }}
                        renderInput={(params) => <TextField {...params} label="Address" />}
                    />
                    <Button onClick={handleSearchButtonClick}>Search</Button>
                </Dialog>
            </Hidden>
        </div>
    );
}

export default SearchModal;
