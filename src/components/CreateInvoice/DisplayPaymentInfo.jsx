import Wrapper from '../Positioning/Wrapper';

export const DisplayPaymentInfo = ({bankName, ibanNr, paymentMethod}) => {
	if (paymentMethod === 'bank transfer') {
		return (
			<Wrapper>
				<Wrapper>
					<h4>Name of the Bank:</h4> <h4>{bankName}</h4>
				</Wrapper>
				<Wrapper>
					<h4>IBAN:</h4> <h4>{ibanNr}</h4>
				</Wrapper>
			</Wrapper>
		);
	} else {
		return <h4>Paying Cash</h4>;
	}
};
