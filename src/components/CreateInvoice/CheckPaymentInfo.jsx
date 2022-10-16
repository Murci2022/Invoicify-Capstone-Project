/* --------------------PaymentMethod-------------------------------------------------- */
export const CheckPaymentInfo = ({
	paymentMethod,
	bankName,
	ibanNr,
	handleBankNameChange,
	handleIbanChange,
}) => {
	return (
		<>
			{paymentMethod === 'cash' ? (
				<h4>Paying Cash</h4>
			) : (
				<div style={{marginTop: '30px', display: 'flex', flexDirection: 'column'}}>
					<label htmlFor="bankName">Name of the Bank:</label>
					<input
						className="option"
						value={bankName}
						type="text"
						id="bankName"
						name="bankName"
						placeholder="e .g. Bank og England"
						onChange={handleBankNameChange}
					/>
					<label htmlFor="ibanNr">IBAN:</label>
					<input
						className="option"
						value={ibanNr}
						type="text"
						id="ibanNr"
						name="ibanNr"
						placeholder="e.g. NOLADE234567"
						onChange={handleIbanChange}
					/>
				</div>
			)}
		</>
	);
};
