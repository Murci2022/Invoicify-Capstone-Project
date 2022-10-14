export const DisplayInvoiceHead = ({invoiceNr}) => {
	return (
		<div className="invoice__head">
			<h4>Thank You!</h4>
			<h4>InvoiceNr.{invoiceNr}</h4>
		</div>
	);
};
