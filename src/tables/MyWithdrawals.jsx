import { useTranslations } from "next-intl";


export default function MyWithdrawalsTable() {
	
	const t = useTranslations("my-withdrawals")


	const data =  [
		{
		  id: 1,
		  account_number: "ACC-10001",
		  balance: 5240.75,
		  account_type: "Savings",
		  status: "Active",
		  img: "https://picsum.photos/seed/1/200/300"
		},
		{
		  id: 2,
		  account_number: "ACC-10002",
		  balance: 10250.5,
		  account_type: "Checking",
		  status: "Inactive",
		  img: "https://picsum.photos/seed/2/200/300"
		},
		{
		  id: 3,
		  account_number: "ACC-10003",
		  balance: 7850.2,
		  account_type: "Business",
		  status: "Pending",
		  img: "https://picsum.photos/seed/3/200/300"
		},
		{
		  id: 4,
		  account_number: "ACC-10004",
		  balance: 12670.9,
		  account_type: "Savings",
		  status: "Active",
		  img: "https://picsum.photos/seed/4/200/300"
		},
		{
		  id: 5,
		  account_number: "ACC-10005",
		  balance: 4320.65,
		  account_type: "Checking",
		  status: "Suspended",
		  img: "https://picsum.photos/seed/5/200/300"
		},
		{
		  id: 6,
		  account_number: "ACC-10006",
		  balance: 980.3,
		  account_type: "Savings",
		  status: "Active",
		  img: "https://picsum.photos/seed/6/200/300"
		},
		{
		  id: 7,
		  account_number: "ACC-10007",
		  balance: 3100.85,
		  account_type: "Business",
		  status: "Inactive",
		  img: "https://picsum.photos/seed/7/200/300"
		},
		{
		  id: 8,
		  account_number: "ACC-10008",
		  balance: 7540.0,
		  account_type: "Checking",
		  status: "Pending",
		  img: "https://picsum.photos/seed/8/200/300"
		},
		{
		  id: 9,
		  account_number: "ACC-10009",
		  balance: 20050.45,
		  account_type: "Savings",
		  status: "Active",
		  img: "https://picsum.photos/seed/9/200/300"
		},
		{
		  id: 10,
		  account_number: "ACC-10010",
		  balance: 6540.2,
		  account_type: "Business",
		  status: "Inactive",
		  img: "https://picsum.photos/seed/10/200/300"
		},
		{
		  id: 11,
		  account_number: "ACC-10011",
		  balance: 8750.9,
		  account_type: "Checking",
		  status: "Active",
		  img: "https://picsum.photos/seed/11/200/300"
		},
		{
		  id: 12,
		  account_number: "ACC-10012",
		  balance: 13450.6,
		  account_type: "Savings",
		  status: "Pending",
		  img: "https://picsum.photos/seed/12/200/300"
		},
		{
		  id: 13,
		  account_number: "ACC-10013",
		  balance: 4500.25,
		  account_type: "Business",
		  status: "Suspended",
		  img: "https://picsum.photos/seed/13/200/300"
		},
		{
		  id: 14,
		  account_number: "ACC-10014",
		  balance: 9250.75,
		  account_type: "Checking",
		  status: "Active",
		  img: "https://picsum.photos/seed/14/200/300"
		},
		{
		  id: 15,
		  account_number: "ACC-10015",
		  balance: 11240.1,
		  account_type: "Savings",
		  status: "Inactive",
		  img: "https://picsum.photos/seed/15/200/300"
		},
		{
		  id: 16,
		  account_number: "ACC-10016",
		  balance: 3840.4,
		  account_type: "Business",
		  status: "Pending",
		  img: "https://picsum.photos/seed/16/200/300"
		},
		{
		  id: 17,
		  account_number: "ACC-10017",
		  balance: 12950.5,
		  account_type: "Savings",
		  status: "Active",
		  img: "https://picsum.photos/seed/17/200/300"
		},
		{
		  id: 18,
		  account_number: "ACC-10018",
		  balance: 4850.3,
		  account_type: "Checking",
		  status: "Inactive",
		  img: "https://picsum.photos/seed/18/200/300"
		},
		{
		  id: 19,
		  account_number: "ACC-10019",
		  balance: 7100.85,
		  account_type: "Business",
		  status: "Active",
		  img: "https://picsum.photos/seed/19/200/300"
		},
		{
		  id: 20,
		  account_number: "ACC-10020",
		  balance: 5400.6,
		  account_type: "Savings",
		  status: "Suspended",
		  img: "https://picsum.photos/seed/20/200/300"
		},
	  ];


	const headContent = [
		{ sort : false , name : t("account_id") },
		{ sort : true , name : t("account_number") },
		{ sort : true , name : t("balance") },
		{ sort : true , name : t("account_type") },
		{ sort : true , name : t("status") },
		{ sort : false , name : t("payment_proof") },
	]



	return {headContent , data}
}
