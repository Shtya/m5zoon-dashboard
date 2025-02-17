import { useTranslations } from 'next-intl';

export default function ShippingFeeTable() {
    const t = useTranslations('callCenter');


    const data = [
        { "id": "order-47e0", "shipping_cost": "24.99", "shipping_cost_return": "10.99", "shipping_fee_receive": "5.99" },
        { "id": "order-4385", "shipping_cost": "14.99", "shipping_cost_return": "8.49", "shipping_fee_receive": "4.79" },
        { "id": "order-4536", "shipping_cost": "19.99", "shipping_cost_return": "7.49", "shipping_fee_receive": "6.29" },
        { "id": "order-4d50", "shipping_cost": "29.99", "shipping_cost_return": "12.99", "shipping_fee_receive": "7.99" },
        { "id": "order-4b43", "shipping_cost": "18.99", "shipping_cost_return": "9.99", "shipping_fee_receive": "5.49" },
        { "id": "order-4425", "shipping_cost": "22.49", "shipping_cost_return": "11.59", "shipping_fee_receive": "6.89" },
        { "id": "order-467e", "shipping_cost": "17.89", "shipping_cost_return": "6.99", "shipping_fee_receive": "4.59" },
        { "id": "order-4415", "shipping_cost": "23.59", "shipping_cost_return": "10.49", "shipping_fee_receive": "5.89" },
        { "id": "order-4fd6", "shipping_cost": "25.99", "shipping_cost_return": "13.29", "shipping_fee_receive": "7.39" },
        { "id": "order-4598", "shipping_cost": "16.49", "shipping_cost_return": "8.99", "shipping_fee_receive": "4.39" },
        { "id": "order-4a45", "shipping_cost": "21.99", "shipping_cost_return": "11.19", "shipping_fee_receive": "6.29" },
        { "id": "order-4001", "shipping_cost": "20.29", "shipping_cost_return": "7.79", "shipping_fee_receive": "5.69" },
        { "id": "order-4a3b", "shipping_cost": "15.49", "shipping_cost_return": "7.39", "shipping_fee_receive": "4.99" },
        { "id": "order-402b", "shipping_cost": "27.99", "shipping_cost_return": "9.99", "shipping_fee_receive": "6.19" },
        { "id": "order-4317", "shipping_cost": "24.49", "shipping_cost_return": "10.59", "shipping_fee_receive": "5.79" },
        { "id": "order-45b9", "shipping_cost": "19.49", "shipping_cost_return": "8.29", "shipping_fee_receive": "5.29" },
        { "id": "order-48b2", "shipping_cost": "22.29", "shipping_cost_return": "10.89", "shipping_fee_receive": "6.49" },
        { "id": "order-4fd5", "shipping_cost": "28.99", "shipping_cost_return": "12.49", "shipping_fee_receive": "7.99" },
        { "id": "order-4cc1", "shipping_cost": "26.19", "shipping_cost_return": "13.79", "shipping_fee_receive": "6.99" },
        { "id": "order-4e33", "shipping_cost": "16.79", "shipping_cost_return": "7.59", "shipping_fee_receive": "5.09" }
      ]
      

    const headContent = [
        { sort: false, name: t('order_number') },
        { sort: true, name: t('shipping_cost') },
        { sort: true, name: t('shipping_cost_return') },
        { sort: true, name: t('shipping_fee_receive') },
    ];

    return { headContent, data };
}
