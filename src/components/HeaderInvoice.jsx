import StyledButton from './Button/styled';
import Wrapper from './Positioning/Wrapper';

export default function HeaderInvoice({setInvoice}) {
	const handlePrintOut = () => {
		window.print();
	};
	return (
		<Wrapper>
			<StyledButton onClick={() => setInvoice(false)}>Edit</StyledButton>
			<h4>Logo</h4>
			<h4>InvoiceNr. 1</h4>
			<StyledButton onClick={handlePrintOut}>Print Out Invoice</StyledButton>
		</Wrapper>
	);
}
