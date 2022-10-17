import CenterElement from '../Positioning/CenterElement';
import InvoicePaymentMethod from '../Positioning/InvoicePaymentMethod';
import Wrapper from '../Positioning/Wrapper';

export const DisplayPaymentInfo = ({bankName, ibanNr, paymentMethod}) => {
	const ibanToUpperCase = ibanNr.toUpperCase();

	if (paymentMethod === 'bank transfer') {
		return (
			<InvoicePaymentMethod>
				<Wrapper>
					<h4>Name of the Bank:</h4>
					<h4> {bankName}</h4>
				</Wrapper>
				<Wrapper>
					<h4>IBAN: </h4>
					<h4> {ibanToUpperCase}</h4>
				</Wrapper>
			</InvoicePaymentMethod>
		);
	} else {
		return (
			<CenterElement>
				<h3>Paying Cash</h3>
			</CenterElement>
		);
	}
};
