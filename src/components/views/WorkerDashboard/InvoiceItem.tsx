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
    createInvoiceItemService,
    createInvoiceService,
    eventDetailService, getInvoice,
    updateEventService,
} from '../../../services/eventService';
import { statusFormatter } from '../../../tools/StatusFormatter';
import { convertType } from '../../../tools/TypeConverter';
import {InvoiceI} from "../../../shared/interfaces/invoice.interface";
import invoice from "./Invoice";
import {InvoiceItemCreateI, InvoiceItemI} from "../../../shared/interfaces/invoiceItem.interface";
import PrintIcon from '@mui/icons-material/Print';

function Textera() {
    return null;
}

const InvoiceItem = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const invoiceId = urlParams.get('invoice_id');
    const orderId = urlParams.get('order_id');
    console.log(invoiceId)
    console.log(orderId)

    const [invoiceData, setInvoiceData] = useState<InvoiceI>({
        order_id: '',
        client_id: '',
        invoice_nr: '',
        nip: '',
        created_at: '',
    })

    const  [invoiceItems, setInvoiceItems] = useState<InvoiceItemI>({
        name:'',
        invoice_id:'',
        count:'',
        price_per_item:'',
    })

    const navigate = useNavigate();

    const {
        mutate,
        data: responseData,
        isSuccess,
        isLoading,
    } = useMutation(getInvoice);

    const {
        mutate: createInvoiceItemMutate,
        data: createInvoiceItemData,
        isSuccess: createInvoiceItemSuccess,
    } = useMutation(createInvoiceItemService);

    useEffect(() => {
        mutate({
            access_token: localStorage.getItem('accessToken') as string,
            invoiceData: orderId as string,
        });
    }, [createInvoiceItemSuccess]);

    useEffect(() => {
        if (isSuccess) {
                setInvoiceData(prevState => ({
                    ...prevState,
                    order_id: (responseData.data.payload.order_id as string),
                    client_id: (responseData.data.payload.client_id as string),
                    id: (responseData.data.payload.id as string),
                    invoice_nr: (responseData.data.payload.invoice_nr as string),
                    created_at: (responseData.data.payload.created_at as string),
                    nip: (responseData.data.payload.nip),
                }))
                setInvoiceItems(prevState => ({...prevState, invoice_id: responseData.data.payload.id}))
            }
    }, [isSuccess]);
    console.log(responseData?.data.payload.items, 'items');

    const handleEditOrder = async () => {

        createInvoiceItemMutate({
            access_token: localStorage.getItem('accessToken') as string,
            invoiceData: {
                ...invoiceItems,
                price_per_item: parseFloat(invoiceItems.price_per_item ?? ''),
                count: parseFloat(invoiceItems.count ?? '')
            },
        });
    };
    const handlePrintInvoice = async () => {
        setTimeout(() => {
            navigate(`/app/print-invoice?invoice_id=${responseData?.data.payload.id}&order_id=${responseData?.data.payload.order_id}`);
        }, 100);
    };
    useEffect(() => {
        console.log(createInvoiceItemData?.data);
        if (createInvoiceItemSuccess) {

            setTimeout(() => {
                navigate(`/app/invoice-item?invoice_id=${responseData?.data.payload.id}&order_id=${responseData?.data.payload.order_id}`);
            }, 100);
        }
    }, [createInvoiceItemSuccess]);

    return (
        <AppContainer
            back="/app/dashboard"
            label={`Adding Items To Invoice: ${invoiceData.invoice_nr}`}
            additionalLabel={`Date: ${invoiceData.created_at}`}
            navbar
        >
            <Box component="form">
                <Grid container>
                    <Grid item sm={5.5}><Typography>Invoice Items: </Typography></Grid>
                    {isSuccess && responseData.data.payload.items.length &&
                        responseData.data.payload.items.map((item : InvoiceItemCreateI, index:number) => (
                            <Grid item sm={12}>
                                <Grid item sm={5.5}><Typography>{index+1}.{item.name}   {item.count}  {item.price_per_item}</Typography></Grid>
                            </Grid>
                        ))}
                    <Grid item sm={12}>
                        <TextField
                            margin="dense"
                            required
                            fullWidth
                            id="name"
                            label="Invoice Item Name"
                            name="name"
                            value={invoiceItems.name}
                            onChange={(e) => setInvoiceItems(prevState => ({...prevState, name: e.target.value}))}
                        />
                    </Grid>

                    <Grid item sm={12}>
                        <TextField
                            margin="dense"
                            required
                            type='number'
                            fullWidth
                            id="artist"
                            label="Count"
                            name="artist"
                            multiline
                            value={invoiceItems.count?.replace(/\D/g, '')}
                            onChange={(e) => setInvoiceItems(prevState => ({...prevState, count: e.target.value}))}
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <TextField
                            margin="dense"
                            required
                            type='number'
                            fullWidth
                            id="artist"
                            label="Price"
                            name="artist"
                            multiline
                            value={invoiceItems.price_per_item?.replace(/\D/g, '')}
                            onChange={(e) => setInvoiceItems(prevState => ({...prevState, price_per_item: e.target.value}))}
                        />
                    </Grid>





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
                    Add Item
                </Button>
                <Button
                    variant="contained"
                    endIcon={<PrintIcon />}
                    sx={{ fontWeight: 600 }}
                    onClick={handlePrintInvoice}
                >
                    Print Invoice
                </Button>
            </Box>
            {createInvoiceItemSuccess && (
                <Alert severity="success">
                    Dodano! Za chwile nastąpi przekierowanie...
                </Alert>
            )}
        </AppContainer>
    );
};

export default InvoiceItem;
