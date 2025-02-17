import { useTranslations } from 'next-intl';

export default function InnerInventoryTable() {
    const t = useTranslations('inventory');


    const data = [
        { "id": "1A2B3C", "product_name2": "Laptop X", "date": "2024-01-10", "products": 5, "status": "Shipped", "total": "1200.50" },
        { "id": "4D5E6F", "product_name2": "Smartphone Y", "date": "2024-02-15", "products": 2, "status": "Shipped", "total": "899.99" },
        { "id": "7G8H9I", "product_name2": "Tablet Z", "date": "2024-03-22", "products": 3, "status": "Delivered", "total": "450.75" },
        { "id": "J1K2L3", "product_name2": "Monitor 24-inch", "date": "2024-04-05", "products": 1, "status": "Delivered", "total": "249.99" },
        { "id": "M4N5O6", "product_name2": "Wireless Mouse", "date": "2024-05-18", "products": 10, "status": "Shipped", "total": "150.00" },
        { "id": "P7Q8R9", "product_name2": "Mechanical Keyboard", "date": "2024-06-11", "products": 4, "status": "Delivered", "total": "320.99" },
        { "id": "S1T2U3", "product_name2": "External Hard Drive", "date": "2024-07-07", "products": 6, "status": "Shipped", "total": "540.45" },
    ]

    const headContent = [
        { sort: false, name: t("product_id") },
        { sort: false, name: t("product_name2") },
        { sort: false, name: t("date") },
        { sort: false, name: t("products") },
        { sort: false, name: t("status") },
        { sort: false, name: t("total") },
    ];

    return { headContent, data };
}
