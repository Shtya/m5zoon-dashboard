import { useTranslations } from 'next-intl';

export default function CallCenterFeeTable() {
    const t = useTranslations('callCenter');

    const data = [
        { id: "ORD-1000", replied_fee: "10.50", confirmed_fee: "15.00", received_orders_fee: "20.00", upsell_fee: "5.00", monthly_fee: "50.00" },
        { id: "ORD-1001", replied_fee: "12.00", confirmed_fee: "14.50", received_orders_fee: "18.00", upsell_fee: "6.00", monthly_fee: "55.00" },
        { id: "ORD-1002", replied_fee: "9.00", confirmed_fee: "13.00", received_orders_fee: "22.00", upsell_fee: "4.50", monthly_fee: "48.00" },
        { id: "ORD-1003", replied_fee: "11.25", confirmed_fee: "16.75", received_orders_fee: "19.50", upsell_fee: "5.50", monthly_fee: "52.50" },
        { id: "ORD-1004", replied_fee: "13.75", confirmed_fee: "17.00", received_orders_fee: "21.25", upsell_fee: "6.25", monthly_fee: "57.00" },
        { id: "ORD-1005", replied_fee: "14.00", confirmed_fee: "18.50", received_orders_fee: "23.00", upsell_fee: "7.00", monthly_fee: "60.00" },
        { id: "ORD-1006", replied_fee: "10.00", confirmed_fee: "12.50", received_orders_fee: "20.75", upsell_fee: "5.25", monthly_fee: "49.50" },
        { id: "ORD-1007", replied_fee: "15.25", confirmed_fee: "19.00", received_orders_fee: "24.50", upsell_fee: "7.50", monthly_fee: "63.00" },
        { id: "ORD-1008", replied_fee: "11.75", confirmed_fee: "14.25", received_orders_fee: "18.75", upsell_fee: "6.75", monthly_fee: "53.00" },
        { id: "ORD-1009", replied_fee: "16.50", confirmed_fee: "20.75", received_orders_fee: "25.00", upsell_fee: "8.00", monthly_fee: "65.00" },
        { id: "ORD-1010", replied_fee: "9.50", confirmed_fee: "12.25", received_orders_fee: "19.25", upsell_fee: "5.50", monthly_fee: "47.50" },
        { id: "ORD-1011", replied_fee: "13.25", confirmed_fee: "16.00", received_orders_fee: "22.50", upsell_fee: "7.25", monthly_fee: "56.50" },
        { id: "ORD-1012", replied_fee: "12.75", confirmed_fee: "15.50", received_orders_fee: "21.75", upsell_fee: "6.50", monthly_fee: "55.25" },
        { id: "ORD-1013", replied_fee: "10.75", confirmed_fee: "14.00", received_orders_fee: "20.00", upsell_fee: "5.75", monthly_fee: "51.00" },
        { id: "ORD-1014", replied_fee: "14.50", confirmed_fee: "17.25", received_orders_fee: "23.50", upsell_fee: "7.75", monthly_fee: "59.00" },
        { id: "ORD-1015", replied_fee: "15.75", confirmed_fee: "18.00", received_orders_fee: "24.75", upsell_fee: "8.25", monthly_fee: "61.50" },
        { id: "ORD-1016", replied_fee: "9.25", confirmed_fee: "11.50", received_orders_fee: "18.50", upsell_fee: "5.00", monthly_fee: "46.50" },
        { id: "ORD-1017", replied_fee: "17.00", confirmed_fee: "21.25", received_orders_fee: "26.00", upsell_fee: "8.50", monthly_fee: "67.00" },
        { id: "ORD-1018", replied_fee: "12.00", confirmed_fee: "15.00", received_orders_fee: "20.50", upsell_fee: "6.00", monthly_fee: "52.75" },
        { id: "ORD-1019", replied_fee: "18.25", confirmed_fee: "22.50", received_orders_fee: "27.00", upsell_fee: "9.00", monthly_fee: "69.50" },
    ];
        

    const headContent = [
        { sort: false, name: t('order_number') },
        { sort: false, name: t('replied_fee') },
        { sort: false, name: t('confirmed_fee') },
        { sort: false, name: t('received_orders_fee') },
        { sort: false, name: t('upsell_fee') },
        { sort: false, name: t('monthly_fee') },
    ];

    return { headContent, data };
}
