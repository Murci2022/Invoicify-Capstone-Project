import InvoiceTotalHolder from '../Positioning/InvoiceTotalHolder';

export const DisplayTotal = ({totalPrice, totalVAT, VAT, grandTotal}) => {
	const toFixedtotalPrice = totalPrice.toFixed(2);
	const toFixedtotalVAT = totalVAT.toFixed(2);
	const toFixedgrandTotal = grandTotal.toFixed(2);
	return (
		<InvoiceTotalHolder>
			<h2>Total: {toFixedtotalPrice} EUR (net)</h2>

			<h2>
				Total VAT {VAT}% : {toFixedtotalVAT} EUR{' '}
			</h2>

			<h2>Grand Total: {toFixedgrandTotal} EUR</h2>
		</InvoiceTotalHolder>
	);
};
