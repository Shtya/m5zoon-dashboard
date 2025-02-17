import { useTranslations } from 'next-intl';

export default function InventoryTable() {
    const t = useTranslations('inventory');


    const data = [
        { "id": "Product A", "total_stock": 100, "sold_items": 40, "remaining_stock": 60, "stock_on_shelf": 30, "stock_in_shipping_companies": 10, "orders_in_progress": 20, "all_orders": 60, "watch": "Edit" },
        { "id": "Product B", "total_stock": 200, "sold_items": 100, "remaining_stock": 100, "stock_on_shelf": 70, "stock_in_shipping_companies": 20, "orders_in_progress": 30, "all_orders": 130, "watch": "View" },
        { "id": "Product C", "total_stock": 150, "sold_items": 50, "remaining_stock": 100, "stock_on_shelf": 60, "stock_in_shipping_companies": 15, "orders_in_progress": 25, "all_orders": 75, "watch": "Edit" },
        { "id": "Product D", "total_stock": 300, "sold_items": 150, "remaining_stock": 150, "stock_on_shelf": 120, "stock_in_shipping_companies": 40, "orders_in_progress": 35, "all_orders": 185, "watch": "Delete" },
        { "id": "Product E", "total_stock": 80, "sold_items": 30, "remaining_stock": 50, "stock_on_shelf": 25, "stock_in_shipping_companies": 10, "orders_in_progress": 15, "all_orders": 45, "watch": "View" },
        { "id": "Product F", "total_stock": 120, "sold_items": 40, "remaining_stock": 80, "stock_on_shelf": 50, "stock_in_shipping_companies": 20, "orders_in_progress": 25, "all_orders": 65, "watch": "Edit" },
        { "id": "Product G", "total_stock": 90, "sold_items": 60, "remaining_stock": 30, "stock_on_shelf": 20, "stock_in_shipping_companies": 5, "orders_in_progress": 10, "all_orders": 70, "watch": "Delete" },
        { "id": "Product H", "total_stock": 200, "sold_items": 80, "remaining_stock": 120, "stock_on_shelf": 90, "stock_in_shipping_companies": 20, "orders_in_progress": 40, "all_orders": 120, "watch": "View" },
        { "id": "Product I", "total_stock": 250, "sold_items": 100, "remaining_stock": 150, "stock_on_shelf": 110, "stock_in_shipping_companies": 30, "orders_in_progress": 50, "all_orders": 150, "watch": "Edit" },
        { "id": "Product J", "total_stock": 400, "sold_items": 200, "remaining_stock": 200, "stock_on_shelf": 150, "stock_in_shipping_companies": 40, "orders_in_progress": 60, "all_orders": 260, "watch": "Delete" },
        { "id": "Product K", "total_stock": 180, "sold_items": 70, "remaining_stock": 110, "stock_on_shelf": 80, "stock_in_shipping_companies": 25, "orders_in_progress": 30, "all_orders": 100, "watch": "View" },
        { "id": "Product L", "total_stock": 220, "sold_items": 90, "remaining_stock": 130, "stock_on_shelf": 100, "stock_in_shipping_companies": 20, "orders_in_progress": 35, "all_orders": 125, "watch": "Edit" },
        { "id": "Product M", "total_stock": 50, "sold_items": 30, "remaining_stock": 20, "stock_on_shelf": 15, "stock_in_shipping_companies": 5, "orders_in_progress": 10, "all_orders": 40, "watch": "Delete" },
        { "id": "Product N", "total_stock": 320, "sold_items": 180, "remaining_stock": 140, "stock_on_shelf": 100, "stock_in_shipping_companies": 40, "orders_in_progress": 50, "all_orders": 230, "watch": "View" },
        { "id": "Product O", "total_stock": 600, "sold_items": 250, "remaining_stock": 350, "stock_on_shelf": 250, "stock_in_shipping_companies": 80, "orders_in_progress": 70, "all_orders": 320, "watch": "Edit" },
        { "id": "Product P", "total_stock": 150, "sold_items": 60, "remaining_stock": 90, "stock_on_shelf": 60, "stock_in_shipping_companies": 15, "orders_in_progress": 30, "all_orders": 90, "watch": "Delete" },
        { "id": "Product Q", "total_stock": 500, "sold_items": 300, "remaining_stock": 200, "stock_on_shelf": 180, "stock_in_shipping_companies": 50, "orders_in_progress": 60, "all_orders": 290, "watch": "View" },
        { "id": "Product R", "total_stock": 350, "sold_items": 150, "remaining_stock": 200, "stock_on_shelf": 120, "stock_in_shipping_companies": 60, "orders_in_progress": 40, "all_orders": 190, "watch": "Edit" },
        { "id": "Product S", "total_stock": 80, "sold_items": 40, "remaining_stock": 40, "stock_on_shelf": 25, "stock_in_shipping_companies": 10, "orders_in_progress": 15, "all_orders": 55, "watch": "Delete" },
        { "id": "Product T", "total_stock": 200, "sold_items": 110, "remaining_stock": 90, "stock_on_shelf": 70, "stock_in_shipping_companies": 20, "orders_in_progress": 45, "all_orders": 155, "watch": "View" }
      ]
      
    

    const headContent = [
        { sort: false, name: t("product_name") },
        { sort: false, name: t("total_stock") },
        { sort: false, name: t("sold_items") },
        { sort: false, name: t("remaining_stock") },
        { sort: false, name: t("stock_on_shelf") },
        { sort: false, name: t("stock_in_shipping_companies") },
        { sort: false, name: t("orders_in_progress") },
        { sort: false, name: t("all_orders") },
        { sort: false, name: t("action") },
    ];

    return { headContent, data };
}
