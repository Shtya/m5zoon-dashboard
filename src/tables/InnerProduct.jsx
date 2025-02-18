import { useTranslations } from 'next-intl';

export default function InnerProductTable() {
    const t = useTranslations('products');


    const data = [
        { id: 1, product_name: "Apple", feeding_date: "2025-02-10", quantity: 50, status: "Acceptable", notes: "Fresh stock", },
        { id: 2, product_name: "Banana", feeding_date: "2025-02-09", quantity: 30, status: "Unacceptable", notes: "Check ripeness", },
        { id: 3, product_name: "Carrot", feeding_date: "2025-02-08", quantity: 75, status: "Acceptable", notes: "Organic", },
        { id: 4, product_name: "Milk", feeding_date: "2025-02-07", quantity: 20, status: "Unacceptable", notes: "Expected restock soon", },
        { id: 5, product_name: "Cheese", feeding_date: "2025-02-06", quantity: 40, status: "Acceptable", notes: "Keep refrigerated", },
        { id: 6, product_name: "Chicken Breast", feeding_date: "2025-02-05", quantity: 15, status: "Unacceptable", notes: "Frozen", },
        { id: 7, product_name: "Salmon", feeding_date: "2025-02-04", quantity: 10, status: "Acceptable", notes: "Wild caught", }
    ]    

    const headContent = [
        { sort: false, name: t("number") },
        { sort: false, name: t("product_name") },
        { sort: false, name: t("feeding_date") },
        { sort: false, name: t("quantity") },
        { sort: false, name: t("status") },
        { sort: false, name: t("notes") },
    ];

    return { headContent, data };
}
