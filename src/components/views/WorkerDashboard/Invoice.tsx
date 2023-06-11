import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Alert,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AppContainer from '../../common/AppContainer';
import { IOrder } from '../../../shared/interfaces/order.interface';
import { useMutation } from 'react-query';
import {
    createInvoiceService,
    eventDetailService,
    updateEventService,
} from '../../../services/eventService';
import { statusFormatter } from '../../../tools/StatusFormatter';
import { convertType } from '../../../tools/TypeConverter';
import {InvoiceI} from "../../../shared/interfaces/invoice.interface";

const Invoice = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const typeParam = urlParams.get('id');

    const [invoiceData, setInvoiceData] = useState<InvoiceI>({
        order_id: '',
        client_id: '',
        invoice_nr: '',
        nip: '',
        created_at: '',
    })

    const [data, setData] = useState<IOrder>({
        id: '',
        name: '',
        startDate: null,
        type: '',
        status: '',
        additionalInfo: '',
        securityOption: false,
        barOption: false,
        artist: '',
        maxPeople: '',
        minAge: '',
        numberOfSeats: '',
        companyName: '',
        cateringOption: false,
        cateringName: '',
        clientId: '',
        types: '',
    });

    const {
        mutate,
        data: responseData,
        isSuccess,
        isLoading,
    } = useMutation(eventDetailService);

    const {
        mutate: createInvoiceMutate,
        data: createInvoiceData,
        isSuccess: createInvoiceSuccess,
    } = useMutation(createInvoiceService);

    useEffect(() => {
        mutate({
            access_token: localStorage.getItem('accessToken') as string,
            id: typeParam as string,
        });
    }, []);

    useEffect(() => {
        if (isSuccess) {
            console.log(responseData);
            if (responseData.data.payload.length > 0) {
                const orderDetails = responseData.data.payload[0];
                console.log(orderDetails);
                setData({
                    id: orderDetails.id,
                    name: orderDetails.name,
                    startDate: orderDetails.start_date,
                    type: convertType(orderDetails.type) as string,
                    status: statusFormatter(orderDetails.status) as string,
                    additionalInfo: orderDetails.additional_info,
                    securityOption: orderDetails.security,
                    barOption: orderDetails.bar_option,
                    artist: orderDetails.artist_name,
                    maxPeople: orderDetails.max_nr_of_people,
                    minAge: orderDetails.minimal_age,
                    numberOfSeats: orderDetails.number_of_seats,
                    companyName: orderDetails.company_name,
                    cateringOption: orderDetails.catering,
                    cateringName: orderDetails.company_name,
                    clientId: orderDetails.client_id,
                    types: 'Birthdays',
                });
                setInvoiceData(prevState => ({
                    ...prevState,
                    order_id: (orderDetails.id as string),
                    client_id: (orderDetails.client_id as string),
                }))
            }
        }
    }, [isSuccess]);
    console.log(invoiceData, 'invoice ');

    const navigate = useNavigate();
    const handleEditOrder = async () => {
        const now = new Date();

        createInvoiceMutate({
            access_token: localStorage.getItem('accessToken') as string,
            invoiceData: {
                ...invoiceData,
                nip: parseFloat(invoiceData.nip),
                created_at: `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
             },
        });
    };

    useEffect(() => {
        console.log(createInvoiceData?.data);
        if (createInvoiceSuccess) {
            setTimeout(() => {
                navigate(`/app/invoice-item?invoice_id=${createInvoiceData.data.payload.id}&order_id=${createInvoiceData.data.payload.order_id}`);
            }, 3000);
        }
    }, [createInvoiceSuccess]);

    return (
        <AppContainer
            back="/app/dashboard"
            label={`Create Invoice For Order: ${typeParam}`}
            additionalLabel={`Type: ${data.type} | Date: ${data.startDate}`}
            navbar
        >
            <Box component="form">
                <Grid container>
                    <Grid item sm={12}>
                        <TextField
                            margin="dense"
                            required
                            fullWidth
                            id="name"
                            label="Invoice Number"
                            name="name"
                            value={invoiceData.invoice_nr}
                            onChange={(e) => setInvoiceData({ ...invoiceData, invoice_nr: e.target.value })}
                        />
                    </Grid>

                    {/* ---------------- Detailed data ---------------- */}

                    {data.type === 'Public' && (
                        <>
                            <Grid item sm={12}>
                                <TextField
                                    margin="dense"
                                    required
                                    type='number'
                                    fullWidth
                                    id="artist"
                                    label="NIP"
                                    name="artist"
                                    multiline
                                    value={invoiceData.nip.replace(/\D/g, '')}
                                    onChange={(e) => setInvoiceData({ ...invoiceData, nip: e.target.value })}
                                />
                            </Grid>

                        </>
                    )}




                    <Grid item sm={12}>

                    </Grid>
                    <Grid item sm={12}>
                        <Typography component="h5" variant="body2" sx={{ mt: 2, mb: 2 }}>
                            * require
                        </Typography>
                    </Grid>
                    <Grid item sm={5.5}></Grid>
                </Grid>
                <Button
                    variant="contained"
                    endIcon={<EditIcon />}
                    sx={{ fontWeight: 600 }}
                    onClick={handleEditOrder}
                >
                    Edit Order
                </Button>
            </Box>
            {createInvoiceSuccess && (
                <Alert severity="success">
                    Za chwile nastąpi przekierowanie...
                </Alert>
            )}
        </AppContainer>
    );
};

export default Invoice;
