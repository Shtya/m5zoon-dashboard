import { useTranslations } from 'next-intl';

export default function InvoicesTable() {
    const t = useTranslations('callCenter');


    const data = [
        { "id": "INV-9812", "start_date": "01/01/2020", "end_date": "31/01/2020", "country": "Saudi Arabia", "invoice_value_usd": "150.00", "invoice_value_sar": "562.50", "status": "Paid", "download": "download" },
        { "id": "INV-9821", "start_date": "05/02/2020", "end_date": "05/03/2020", "country": "United Arab Emirates", "invoice_value_usd": "200.00", "invoice_value_sar": "750.00", "status": "collector", "download": "download" },
        { "id": "INV-9830", "start_date": "10/03/2020", "end_date": "10/04/2020", "country": "Kuwait", "invoice_value_usd": "250.00", "invoice_value_sar": "937.50", "status": "Paid", "download": "download" },
        { "id": "INV-9841", "start_date": "15/04/2020", "end_date": "15/05/2020", "country": "Bahrain", "invoice_value_usd": "120.00", "invoice_value_sar": "450.00", "status": "collector", "download": "download" },
        { "id": "INV-9850", "start_date": "20/05/2020", "end_date": "20/06/2020", "country": "Qatar", "invoice_value_usd": "180.00", "invoice_value_sar": "675.00", "status": "Paid", "download": "download" },
        { "id": "INV-9860", "start_date": "25/06/2020", "end_date": "25/07/2020", "country": "Oman", "invoice_value_usd": "210.00", "invoice_value_sar": "787.50", "status": "collector", "download": "download" },
        { "id": "INV-9871", "start_date": "30/07/2020", "end_date": "30/08/2020", "country": "Saudi Arabia", "invoice_value_usd": "190.00", "invoice_value_sar": "712.50", "status": "Paid", "download": "download" },
        { "id": "INV-9882", "start_date": "05/09/2020", "end_date": "05/10/2020", "country": "United Arab Emirates", "invoice_value_usd": "220.00", "invoice_value_sar": "825.00", "status": "collector", "download": "download" },
        { "id": "INV-9893", "start_date": "10/10/2020", "end_date": "10/11/2020", "country": "Kuwait", "invoice_value_usd": "160.00", "invoice_value_sar": "600.00", "status": "Paid", "download": "download" },
        { "id": "INV-9904", "start_date": "15/11/2020", "end_date": "15/12/2020", "country": "Bahrain", "invoice_value_usd": "240.00", "invoice_value_sar": "900.00", "status": "collector", "download": "download" },
        { "id": "INV-9915", "start_date": "20/12/2020", "end_date": "20/01/2021", "country": "Qatar", "invoice_value_usd": "170.00", "invoice_value_sar": "637.50", "status": "Paid", "download": "download" },
        { "id": "INV-9926", "start_date": "25/01/2021", "end_date": "25/02/2021", "country": "Oman", "invoice_value_usd": "230.00", "invoice_value_sar": "862.50", "status": "collector", "download": "download" },
        { "id": "INV-9937", "start_date": "01/03/2021", "end_date": "01/04/2021", "country": "Saudi Arabia", "invoice_value_usd": "250.00", "invoice_value_sar": "937.50", "status": "collector", "download": "download" },
        { "id": "INV-9948", "start_date": "05/04/2021", "end_date": "05/05/2021", "country": "United Arab Emirates", "invoice_value_usd": "260.00", "invoice_value_sar": "975.00", "status": "Paid", "download": "download" },
        { "id": "INV-9959", "start_date": "10/05/2021", "end_date": "10/06/2021", "country": "Kuwait", "invoice_value_usd": "280.00", "invoice_value_sar": "1050.00", "status": "Paid", "download": "download" },
        { "id": "INV-9960", "start_date": "15/06/2021", "end_date": "15/07/2021", "country": "Bahrain", "invoice_value_usd": "300.00", "invoice_value_sar": "1125.00", "status": "collector", "download": "download" },
        { "id": "INV-9971", "start_date": "20/07/2021", "end_date": "20/08/2021", "country": "Qatar", "invoice_value_usd": "310.00", "invoice_value_sar": "1162.50", "status": "Paid", "download": "download" },
        { "id": "INV-9982", "start_date": "25/08/2021", "end_date": "25/09/2021", "country": "Oman", "invoice_value_usd": "320.00", "invoice_value_sar": "1200.00", "status": "collector", "download": "download" }
      ]
      
      

    const headContent = [
        { sort: false, name: t('invoice_number') },
        { sort: false, name: t('start_date') },
        { sort: false, name: t('end_date') },
        { sort: false, name: t('country') },
        { sort: false, name: t('invoice_value_usd') },
        { sort: false, name: t('invoice_value_sar') },
        { sort: false, name: t('status') },
        { sort: false, name: t('download_invoice') },
    ];

    return { headContent, data };
}
