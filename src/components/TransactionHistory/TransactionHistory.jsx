import css from './TransactionHistory.module.css'

export default function TransactionHistory({items}) {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr className={css.titleRow}>
                    <th className={css.titleCell}>Type</th>
                    <th className={css.titleCell}>Amount</th>
                    <th className={css.titleCell}>Currency</th>
                </tr>
            </thead>

            <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id} className={css.row}>
                    <td className={css.cell}>{type}</td>
                    <td className={css.cell}>{amount}</td>
                    <td className={css.cell}>{currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}    