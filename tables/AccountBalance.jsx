import { useTranslations } from 'next-intl';

export default function AccountBalanceTable() {
    const t = useTranslations('my-withdrawals');

    const data = [
        { id: 'ACC-1001', date: '2024-02-14', balance: '$1,500.00', status: 'Active', notes: 'Payment received' },
        { id: 'ACC-1002', date: '2024-02-13', balance: '$3,200.50', status: 'Inactive', notes: 'Account suspended' },
        { id: 'ACC-1003', date: '2024-02-12', balance: '$750.25', status: 'Pending', notes: 'Verification required' },
        { id: 'ACC-1004', date: '2024-02-11', balance: '$5,450.75', status: 'Active', notes: 'Regular user' },
        { id: 'ACC-1005', date: '2024-02-10', balance: '$0.00', status: 'Closed', notes: 'Account closed by user' },
        { id: 'ACC-1006', date: '2024-02-14', balance: '$1,500.00', status: 'Active', notes: 'Payment received' },
        { id: 'ACC-1007', date: '2024-02-13', balance: '$3,200.50', status: 'Inactive', notes: 'Account suspended' },
        { id: 'ACC-1008', date: '2024-02-12', balance: '$750.25', status: 'Pending', notes: 'Verification required' },
        { id: 'ACC-1009', date: '2024-02-11', balance: '$5,450.75', status: 'Active', notes: 'Regular user' },
        { id: 'ACC-10010', date: '2024-02-10', balance: '$0.00', status: 'Closed', notes: 'Account closed by user' },
        { id: 'ACC-10011', date: '2024-02-09', balance: '$2,100.80', status: 'Active', notes: 'New transaction added' },
        { id: 'ACC-10012', date: '2024-02-08', balance: '$1,875.00', status: 'Pending', notes: 'Awaiting bank approval' },
        { id: 'ACC-10013', date: '2024-02-07', balance: '$4,500.00', status: 'Active', notes: 'Bonus applied' },
        { id: 'ACC-10014', date: '2024-02-06', balance: '$600.00', status: 'Inactive', notes: 'Low activity' },
        { id: 'ACC-10115', date: '2024-02-05', balance: '$9,800.25', status: 'Active', notes: 'Premium account' },
        { id: 'ACC-10116', date: '2024-02-04', balance: '$100.00', status: 'Pending', notes: 'Transfer in progress' },
        { id: 'ACC-10117', date: '2024-02-03', balance: '$3,275.99', status: 'Active', notes: 'Monthly salary deposited' },
        { id: 'ACC-10118', date: '2024-02-02', balance: '$1,250.50', status: 'Inactive', notes: 'Requires document update' },
        { id: 'ACC-10119', date: '2024-02-01', balance: '$7,100.00', status: 'Active', notes: 'Investments made' },
        { id: 'ACC-10120', date: '2024-01-31', balance: '$2,999.99', status: 'Closed', notes: 'User request' },
        { id: 'ACC-10121', date: '2024-01-30', balance: '$500.00', status: 'Pending', notes: 'Under review' },
        { id: 'ACC-10122', date: '2024-01-29', balance: '$8,600.75', status: 'Active', notes: 'Business account' },
        { id: 'ACC-10123', date: '2024-01-28', balance: '$50.00', status: 'Inactive', notes: 'No transactions in 6 months' },
        { id: 'ACC-10124', date: '2024-01-27', balance: '$4,999.50', status: 'Active', notes: 'Credit card payment' },
        { id: 'ACC-10225', date: '2024-01-26', balance: '$10,000.00', status: 'Active', notes: 'High-value user' },
    ];

    const headContent = [
        { sort: false, name: t('account_id') },
        { sort: true, name: t('date') },
        { sort: true, name: t('balance') },
        { sort: true, name: t('status') },
        { sort: true, name: t('notes') },
    ];

    return { headContent, data };
}
