import {useState} from 'react';

import StyledButton from '../components/Button/styled';
import Header from '../components/Header';
import InputCard from '../components/Positioning/InputCard';
import InvoiceHead from '../components/Positioning/InvoiceHead';

export default function CreateInvoice() {
	const [invoice, setInvoice] = useState(false);
	/* -------------------USER DATA ---------------------*/
	const [name, setName] = useState('');
	const [street, setStreet] = useState('');
	const [city, setCity] = useState('');
	const [taxID, setTaxID] = useState('');
	/* ________________USER NAME_________________________ */
	const [recipientName, setRecipientName] = useState('');
	const [recipientStreet, setRecipientStreet] = useState('');
	const [recipientCity, setRecipientCity] = useState('');
	/* ______________________ITEM/SERVICE______________________ */
	const [service, setService] = useState('');
	const [amount, setAmount] = useState('');
	const [quantity, setQuantity] = useState('');
	/* ______________Calculating from quantity and price________ */
	const subTotal = amount * quantity;
	const VAT = subTotal * 0.19;
	const grandTotal = subTotal + VAT;

	/* const subtotal
	const grandtotal
	*/

	return (
		<div>
			{invoice ? (
				<div>
					<Header />
					<InvoiceHead>
						<h4>Logo</h4>
						<h4>InvoiceNr.</h4>
					</InvoiceHead>
					<InvoiceHead>
						<InputCard>
							<div>Name: {name}</div>
							<div>Adress: {street}</div>
							<div>City: {city}</div>
							<div>TAX ID: {taxID}</div>
						</InputCard>
						<InputCard>
							<div>Name:{recipientName}</div>
							<div>Adress:{recipientStreet}</div>
							<div>City:{recipientCity}</div>
						</InputCard>
					</InvoiceHead>
					<InvoiceHead>
						<div>Service:</div>

						<div>price (net):</div>

						<div>QTY:</div>
					</InvoiceHead>
					<InvoiceHead>
						<div>-{service}</div>
						<div>{amount} EUR</div>
						<div>{quantity}</div>
					</InvoiceHead>
					<h5>Total: {subTotal} EUR (net)</h5>
					<h5>VAT: {VAT} EUR</h5>
					<h5>Grand Total: {grandTotal} EUR</h5>

					<button onClick={() => setInvoice(false)}>Edit</button>
				</div>
			) : (
				<form>
					<Header />

					{/* --------------User Data-------------- */}

					<InputCard>
						<h3>Your Data</h3>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="e.g. Susan Baltimore"
							value={name}
							onChange={() => setName(event.target.value)}
						/>
						<label htmlFor="street">Street</label>
						<input
							type="text"
							id="street"
							name="street"
							placeholder="e.g. Filimore Street"
							value={street}
							onChange={() => setStreet(event.target.value)}
						/>
						<label htmlFor="name">City</label>
						<input
							type="text"
							id="city"
							name="city"
							placeholder="e.g. London"
							value={city}
							onChange={() => setCity(event.target.value)}
						/>
						<label htmlFor="name">Tax ID</label>
						<input
							type="text"
							id="taxID"
							name="taxID"
							placeholder="e.g. 34567890890"
							value={taxID}
							onChange={() => setTaxID(event.target.value)}
						/>
					</InputCard>
					{/* _______________________Recipient Data_________________*/}
					<InputCard>
						<h3>Customer Data</h3>
						<label htmlFor="recipientName">Name</label>
						<input
							type="text"
							id="recipientName"
							name="recipientName"
							placeholder="e.g. John Dylen"
							value={recipientName}
							onChange={() => setRecipientName(event.target.value)}
						/>
						<label htmlFor="recipientStreet">Street</label>
						<input
							type="text"
							id="recipientStreet"
							name="recipientStreet"
							placeholder="e.g. Som Street"
							value={street}
							onChange={() => setRecipientStreet(event.target.value)}
						/>
						<label htmlFor="recipientCity">City</label>
						<input
							type="text"
							id="recipientCity"
							name="recipientCity"
							placeholder="e.g. Hamburg"
							value={city}
							onChange={() => setRecipientCity(event.target.value)}
						/>
					</InputCard>
					{/* ___________________________details about your 
item or service:__________________________________________ */}
					<InputCard>
						{' '}
						<label htmlFor="service">Description of your service/Item</label>
						<input
							type="message"
							id="service"
							name="service"
							placeholder="Ux design"
							value={service}
							onChange={() => setService(event.target.value)}
						/>
						<label htmlFor="amount">price</label>
						<input
							type="text"
							id="amount"
							name="amount"
							placeholder="amount in EUR"
							value={amount}
							onChange={() => setAmount(event.target.value)}
						/>
						<label htmlFor="amount">quantity</label>
						<input
							type="text"
							id="quantity"
							name="quantity"
							placeholder="quantity in EUR"
							value={quantity}
							onChange={() => setQuantity(event.target.value)}
						/>
					</InputCard>

					<StyledButton onClick={() => setInvoice(true)} type="submit">
						Submit
					</StyledButton>
				</form>
			)}
		</div>
	);
}
