import { fetchCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Custormers',
  };

export default async function Page() {
    const customers = await fetchCustomers();
    return <div>Customers</div>
}