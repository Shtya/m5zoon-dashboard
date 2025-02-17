import { useTranslations } from "next-intl";


export default function SupportRequestsTable() {
	
	const t = useTranslations("support-requests")


	const data = [
		{ "id": 1001, "customer_name": "Ahmed Ali", "status": "Pending", "action": "View Details" },
		{ "id": 1002, "customer_name": "Sarah Mohamed", "status": "Shipped", "action": "View Details" },
		{ "id": 1003, "customer_name": "Youssef Ibrahim", "status": "Delivered", "action": "View Details" },
		{ "id": 1004, "customer_name": "Mona Khaled", "status": "Canceled", "action": "View Details" },
		{ "id": 1005, "customer_name": "Khaled Mahmoud", "status": "Processing", "action": "View Details" },
		{ "id": 1006, "customer_name": "Noura Samir", "status": "Shipped", "action": "View Details" },
		{ "id": 1007, "customer_name": "Ibrahim Adel", "status": "Pending", "action": "View Details" },
		{ "id": 1008, "customer_name": "Hind Fouad", "status": "Delivered", "action": "View Details" },
		{ "id": 1009, "customer_name": "Majed Nasser", "status": "Canceled", "action": "View Details" },
		{ "id": 1010, "customer_name": "Laila Hassan", "status": "Processing", "action": "View Details" }
	  ]


	const headContent = [
		{ sort : false , name : t("order_id") },
		{ sort : true , name : t("customer_name") },
		{ sort : true , name : t("order_status") },
		{ sort : false , name : t("action") }
	]



	return {headContent , data}
}
