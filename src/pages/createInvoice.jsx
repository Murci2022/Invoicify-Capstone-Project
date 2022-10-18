import {Fragment, useState, useRef} from 'react';
import ReactToPrint from 'react-to-print';

import StyledButton from '../components/Button/styled';
import {CheckPaymentInfo} from '../components/CreateInvoice/CheckPaymentInfo';
import {DisplayInvoiceHead} from '../components/CreateInvoice/DisplayInvoiceHead';
import {DisplayPaymentInfo} from '../components/CreateInvoice/DisplayPaymentInfo';
import {DisplayTable} from '../components/CreateInvoice/DisplayTable';
import {DisplayTotal} from '../components/CreateInvoice/DisplayTotal';
import Header from '../components/Header';
import CenterElement from '../components/Positioning/CenterElement';
import InputBody from '../components/Positioning/InputBody';
import InputCard from '../components/Positioning/InputCard';
import InputField from '../components/Positioning/InputField';
import InvoiceButtonHolder from '../components/Positioning/InvoiceButtonHolder';
import InvoiceInfoBlock from '../components/Positioning/InvoiceInfoBlock';
import InvoiceInfoConti from '../components/Positioning/InvoiceInfoConti';
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
	const [paymentMethod, setPaymentMethod] = useState('bank transfer');
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
		<Fragment>
			{invoice ? (
				<>
					<InvoiceButtonHolder>
						<ReactToPrint
							trigger={() => (
								<button className="invoice__btn-print">Print out</button>
							)}
							content={() => componentRef.current}
						/>
						<button className="invoice__btn" onClick={() => setInvoice(false)}>
							Edit
						</button>
					</InvoiceButtonHolder>
					<div className="A4view" ref={componentRef}>
						<DisplayInvoiceHead invoiceNr={invoiceNr} />
						<InvoiceInfoConti>
							<InvoiceInfoBlock>
								<li>Name: {name}</li>
								<li>Adress: {street}</li>
								<li>City: {city}</li>
								<li>TAX ID: {taxID}</li>
							</InvoiceInfoBlock>
							<InvoiceInfoBlock>
								<li>Name:{recipientName}</li>
								<li>Adress:{recipientStreet}</li>
								<li>City:{recipientCity}</li>
							</InvoiceInfoBlock>
						</InvoiceInfoConti>

						<div>
							<DisplayTable allForms={allForms} />
						</div>

						<DisplayTotal
							totalPrice={totalPrice}
							totalVAT={totalVAT}
							VAT={VAT}
							grandTotal={grandTotal}
						/>
						<div className="invoice__payment-holder">
							<DisplayPaymentInfo
								className="invoice__payment"
								paymentMethod={paymentMethod}
								bankName={bankName}
								ibanNr={ibanNr}
							/>
						</div>
					</div>
				</>
			) : (
				<InputBody>
					<Header />
					<CenterElement>
						<form
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'Center',
							}}
							onSubmit={event => {
								event.preventDefault();
								setInvoice(true);
							}}
						>
							<InputCard auto>
								<Service>
									<h3>Your Data</h3>
								</Service>
								<label htmlFor="name">Name*</label>
								<InputField
									type="text"
									id="name"
									name="name"
									placeholder="e.g. Sue Smith"
									value={name}
									required
									onChange={event => setName(event.target.value)}
								/>
								<label htmlFor="street">Street*</label>
								<InputField
									type="text"
									id="street"
									name="street"
									placeholder="e.g. King Str. 6."
									value={street}
									autoComplete="off"
									onChange={event => setStreet(event.target.value)}
								/>
								<label htmlFor="name">City*</label>
								<InputField
									type="text"
									id="city"
									name="city"
									placeholder="e.g. London"
									value={city}
									autoComplete="off"
									onChange={event => setCity(event.target.value)}
								/>
								<label htmlFor="taxID">Tax ID*</label>
								<InputField
									type="number"
									id="taxID"
									name="taxID"
									placeholder="e.g. 34567890890"
									value={taxID}
									autoComplete="off"
									onChange={event => setTaxID(event.target.value)}
								/>
								<label htmlFor="invoiceNr">Invoice Nr.*</label>
								<InputField
									type="number"
									id="invoiceNr"
									name="invoiceNr"
									placeholder="1"
									value={invoiceNr}
									autoComplete="off"
									onChange={event => setInvoiceNr(event.target.value)}
								/>
								<Wrapper>
									<label htmlFor="select">Payment method:</label>
									<select
										defaultValue={paymentMethod}
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
							<InputCard margin={'20px 20px'}>
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
									autoComplete="off"
									onChange={event => setRecipientName(event.target.value)}
								/>
								<label htmlFor="recipientStreet">Street*</label>
								<InputField
									type="text"
									id="recipientStreet"
									name="recipientStreet"
									placeholder="e.g. Som Str. 7"
									value={recipientStreet}
									autoComplete="off"
									onChange={event => setRecipientStreet(event.target.value)}
								/>
								<label htmlFor="recipientCity">City*</label>
								<InputField
									type="text"
									id="recipientCity"
									name="recipientCity"
									placeholder="e.g. Manchester"
									value={recipientCity}
									autoComplete="off"
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
								<InputCard margin={'20px 20px'}>
									<button type="button" onClick={() => handleAddForms()}>
										Add more Service/Item
									</button>
									<StyledButton type="submit">Submit</StyledButton>{' '}
								</InputCard>
							</article>
						</form>
					</CenterElement>
				</InputBody>
			)}
		</Fragment>
	);
}

function ServiceForm({form, onCancel, onChange, serviceNumber}) {
	const [description, setDescription] = useState(form.description);
	const [price, setPrice] = useState(form.price);
	const [quantity, setQuantity] = useState(form.quantity);
	return (
		<InputCard margin={'20px 20px'}>
			<Wrapper>
				<h3>{serviceNumber}</h3>
				<h4>Your service </h4>
				<div>
					<button onClick={onCancel}>X</button>
				</div>
			</Wrapper>
			<label htmlFor="description">Description</label>

			<InputField
				type="text"
				name="description"
				placeholder="Enter description"
				value={description}
				autoComplete="off"
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
				autoComplete="off"
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
				autoComplete="off"
				onChange={event => {
					setQuantity(event.target.value);
					onChange(event, 'number');
				}}
			/>
		</InputCard>
	);
}
