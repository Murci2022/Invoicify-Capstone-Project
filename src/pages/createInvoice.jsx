import {Fragment, useState, useRef} from 'react';
import ReactToPrint from 'react-to-print';

import StyledButton from '../components/Button/styled';
import {CheckPaymentInfo} from '../components/CreateInvoice/CheckPaymentInfo';
import {DisplayPaymentInfo} from '../components/CreateInvoice/DisplayPaymentInfo';
import Header from '../components/Header';
import CenterElement from '../components/Positioning/CenterElement';
import InputCard from '../components/Positioning/InputCard';
import InputField from '../components/Positioning/InputField';
import InvoiceFooterPayment from '../components/Positioning/InvoiceFooterPayment';
import InvoiceInfoBlock from '../components/Positioning/InvoiceInfoBlock';
import Service from '../components/Positioning/Service';
import Wrapper from '../components/Positioning/Wrapper';

export default function CreateInvoice() {
	const VAT = 19;

	//#region useStates
	const [invoice, setInvoice] = useState(false);
	const [invoiceNr, setInvoiceNr] = useState('');

	const [name, setName] = useState('');
	const [street, setStreet] = useState('');
	const [city, setCity] = useState('');
	const [taxID, setTaxID] = useState('');
	const [paymentMethod, setPaymentMethod] = useState('');
	const [ibanNr, setIbanNr] = useState('');
	const [bankName, setBankName] = useState('');

	const [recipientName, setRecipientName] = useState('');
	const [recipientStreet, setRecipientStreet] = useState('');
	const [recipientCity, setRecipientCity] = useState('');

	//#endregion

	const [allForms, setAllForms] = useState([{description: '', price: 0, quantity: 1, VAT: VAT}]);

	const componentRef = useRef();

	const handleAddForms = () => {
		const values = [...allForms];
		values.push({
			description: '',
			price: 0,
			quantity: 1,
			VAT: VAT,
		});
		setAllForms(values);
	};

	const handleInputChange = (index, event, type = 'string') => {
		const values = [...allForms];
		const updatedValue = event.target.name;
		if (type === 'number') {
			values[index][updatedValue] = Number.parseFloat(event.target.value);
		} else {
			values[index][updatedValue] = event.target.value;
		}

		setAllForms(values);
	};

	const handleRemoveCard = index => {
		const values = [...allForms];
		values.splice(index, 1);
		setAllForms(values);
	};

	const serviceVAT = 0.19;

	const totalPrice = allForms.reduce((total, all) => {
		console.log({total, all});
		return total + all.quantity * all.price;
	}, 0);

	const totalVAT = totalPrice * serviceVAT;
	const grandTotal = totalPrice + totalVAT;

	return (
		<div>
			{invoice ? (
				<Fragment>
					<div>
						<ReactToPrint
							trigger={() => <button>Print out</button>}
							content={() => componentRef.current}
						/>

						<StyledButton onClick={() => setInvoice(false)}>Edit</StyledButton>
					</div>

					<div ref={componentRef}>
						<div className="A4view">
							<Wrapper>
								<h4>Logo</h4>
								<h4>InvoiceNr.{invoiceNr}</h4>
							</Wrapper>
							<Wrapper>
								<InvoiceInfoBlock margin="10px">
									<li>Name: {name}</li>
									<li>Adress: {street}</li>
									<li>City: {city}</li>
									<li>TAX ID: {taxID}</li>
								</InvoiceInfoBlock>

								<InvoiceInfoBlock margin="10px">
									<li>Name:{recipientName}</li>
									<li>Adress:{recipientStreet}</li>
									<li>City:{recipientCity}</li>
								</InvoiceInfoBlock>
							</Wrapper>

							<div>
								<table>
									<thead>
										<tr>
											<th>Nr</th>
											<th>description</th>
											<th>QTY</th>
											<th>price</th>
											<th>total</th>
										</tr>
									</thead>
									<tbody>
										{allForms.map((allForm, index) => (
											<tr key={index}>
												<td>{index}</td>
												<td>{allForm.description}</td>
												<td>{allForm.quantity}</td>
												<td>{allForm.price}</td>
												<td>{allForm.price * allForm.quantity} </td>
											</tr>
										))}
									</tbody>
								</table>
							</div>

							<h2>Total: {totalPrice} EUR (net)</h2>

							<h2>
								Total VAT {VAT}% : {totalVAT} EUR{' '}
							</h2>

							<h2>Grand Total: {grandTotal} EUR</h2>
							<InvoiceFooterPayment>
								<DisplayPaymentInfo
									bankName={bankName}
									ibanNr={ibanNr}
									paymentMethod={paymentMethod}
								/>
							</InvoiceFooterPayment>
						</div>
					</div>
				</Fragment>
			) : (
				<Fragment>
					<Header />
					<CenterElement>
						<form
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContetnt: 'Center',
							}}
							onSubmit={event => {
								event.preventDefault();
								setInvoice(true);
							}}
						>
							<InputCard>
								<Service>
									<h3>Your Data</h3>
								</Service>

								<label htmlFor="name">Name*</label>
								<InputField
									type="text"
									id="name"
									name="name"
									placeholder="e.g. Susan Baltimore"
									value={name}
									onChange={event => setName(event.target.value)}
								/>
								<label htmlFor="street">Street*</label>
								<InputField
									type="text"
									id="street"
									name="street"
									placeholder="e.g. Filimore Street"
									value={street}
									onChange={event => setStreet(event.target.value)}
								/>
								<label htmlFor="name">City*</label>
								<InputField
									type="text"
									id="city"
									name="city"
									placeholder="e.g. London"
									value={city}
									onChange={event => setCity(event.target.value)}
								/>

								<label htmlFor="taxID">Tax ID*</label>
								<InputField
									type="number"
									id="taxID"
									name="taxID"
									placeholder="e.g. 34567890890"
									value={taxID}
									onChange={event => setTaxID(event.target.value)}
								/>
								<label htmlFor="invoiceNr">Invoice Nr.:</label>
								<InputField
									type="invoiceNr"
									id="invoiceNr"
									name="invoiceNr"
									placeholder="1"
									value={invoiceNr}
									onChange={event => setInvoiceNr(event.target.value)}
								/>

								<Wrapper>
									<label htmlFor="select">Payment method:</label>
									<select
										onChange={event => {
											const {value} = event.target;
											console.log(value);
											setPaymentMethod(value);
										}}
									>
										<option value="bank transfer">bank transfer</option>
										<option value="cash">cash</option>
									</select>
								</Wrapper>

								<CheckPaymentInfo
									bankName={bankName}
									ibanNr={ibanNr}
									paymentMethod={paymentMethod}
									handleBankNameChange={e => setBankName(e.target.value)}
									handleIbanChange={e => setIbanNr(e.target.value)}
								/>
							</InputCard>

							<InputCard>
								<Service>
									<h3>Customer Data</h3>
								</Service>

								<label htmlFor="recipientName">Name*</label>
								<InputField
									type="text"
									id="recipientName"
									name="recipientName"
									placeholder="e.g. John Dylen"
									value={recipientName}
									onChange={event => setRecipientName(event.target.value)}
								/>
								<label htmlFor="recipientStreet">Street*</label>
								<InputField
									type="text"
									id="recipientStreet"
									name="recipientStreet"
									placeholder="e.g. Som Street"
									value={recipientStreet}
									onChange={event => setRecipientStreet(event.target.value)}
								/>
								<label htmlFor="recipientCity">City*</label>
								<InputField
									type="text"
									id="recipientCity"
									name="recipientCity"
									placeholder="e.g. Hamburg"
									value={recipientCity}
									onChange={event => setRecipientCity(event.target.value)}
								/>
							</InputCard>

							<article>
								<div>
									{allForms.map((form, index) => (
										<ServiceForm
											key={index}
											form={form}
											serviceNumber={index + 1}
											onCancel={() => handleRemoveCard(index)}
											onChange={(event, type) =>
												handleInputChange(index, event, type)
											}
										/>
									))}
								</div>
								<InputCard>
									<button type="button" onClick={() => handleAddForms()}>
										Add more Service/Item
									</button>
									<StyledButton type="submit">Submit</StyledButton>{' '}
								</InputCard>
							</article>
						</form>
					</CenterElement>
				</Fragment>
			)}
		</div>
	);
}

function ServiceForm({form, onCancel, onChange, serviceNumber}) {
	const [description, setDescription] = useState(form.description);
	const [price, setPrice] = useState(form.price);
	const [quantity, setQuantity] = useState(form.quantity);
	return (
		<InputCard>
			<Wrapper>
				<h3>{serviceNumber}</h3>
				<h4>Your service </h4>
				<div>
					<button onClick={onCancel}>X</button>
				</div>
			</Wrapper>
			<label htmlFor="description">Description of your service/Item</label>

			<InputField
				type="text"
				name="description"
				placeholder="Enter description"
				value={description}
				onChange={event => {
					setDescription(event.target.value);
					onChange(event);
				}}
			/>

			<label htmlFor="description">Price</label>
			<InputField
				type="number"
				step=".10"
				name="price"
				placeholder="Enter price"
				value={price}
				onChange={event => {
					setPrice(event.target.value);
					onChange(event, 'number');
				}}
			/>

			<label htmlFor="description">Quantity</label>
			<InputField
				type="number"
				name="quantity"
				placeholder="Enter quantity"
				value={quantity}
				onChange={event => {
					setQuantity(event.target.value);
					onChange(event, 'number');
				}}
			/>
		</InputCard>
	);
}
