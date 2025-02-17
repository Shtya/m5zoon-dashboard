import { useTranslations } from 'next-intl'
import { hookSignUp } from '@/hooks/hookSignUp'
import Table from '../templates/Table'
import InnerInventoryTable from '@/tables/InnerInventory'

export default function PopupInventory({id}) {
	const t = useTranslations("inventory")

    const { headContent, data } = InnerInventoryTable();
		
  return (
	<div>
		<Table nameEditBtn={''} head={headContent} data={data}  />
	</div>
  )
}
