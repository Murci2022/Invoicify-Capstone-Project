import {useState} from 'react';

import StyledButton from '../components/Button/styled';
import Header from '../components/Header';
import InputCard from '../components/Positioning/InputCard';
import InputField from '../components/Positioning/InputField';
import InvoiceServiceList from '../components/Positioning/InvoiceServiceList';
import Service from '../components/Positioning/Service';
import Wrapper from '../components/Positioning/Wrapper';

export default function CreateInvoice() {
	//#region useStates
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
	//#endregion

	/* ____________________________Dynamic Form_________________ */
	const [allForms, setAllForms] = useState([{description: '', price: 0, quantity: 1}]);

	const handleAddForms = () => {
		const values = [...allForms];
		values.push({
			description: '',
			price: 0,
			quantity: 1,
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

	/* ______________________CalculationS_____________________________ */
	/* ______________________CalculationS_____________________________ */
	/* ______________________CalculationS_____________________________ */

	/* VAT Service/Item */

	const ServiceVAT = 0.19;

	/* totalPrice (net) */

	const totalPrice = allForms.reduce((total, all) => {
		console.log({total, all});
		return total + all.quantity * all.price;
	}, 0);
	console.log(totalPrice);

	const totalVAT = totalPrice * ServiceVAT;

	console.log(totalPrice);

	/* ---------------------TO DO LIST------------------ 
	------nur bis 2 tizedesig---------------
	------ausfüllen----------
	-----const grandTotal = totalPrice + totalVAT;
	-------szöveg text limit*/

	/* __________________________INVOICE________________________ */

	return (
		<div>
			{invoice ? (
				<div>
					<Wrapper>
						<h4>Logo</h4>
						<h4>InvoiceNr.</h4>
					</Wrapper>
					<Wrapper>
						<InputCard>
							<li>Name: {name}</li>
							<li>Adress: {street}</li>
							<li>City: {city}</li>
							<li>TAX ID: {taxID}</li>
						</InputCard>
						<InputCard>
							<li>Name:{recipientName}</li>
							<li>Adress:{recipientStreet}</li>
							<li>City:{recipientCity}</li>
						</InputCard>
					</Wrapper>
					<Wrapper>
						<li>Nr:</li>
						<li>Service:</li>

						<li>price (net):</li>

						<li>QTY:</li>
						<div>Subtotal</div>
					</Wrapper>

					{/* __________________________________________________________________________________ */}
					{/* __________________________________________________________________________________ */}
					{/* __________________________________________________________________________________ */}
					{/* __________________________________________________________________________________ */}
					{/* __________________________________________________________________________________ */}
					{/* __________________________________________________________________________________ */}

					{/* __________________________________________________________________________________ */}
					{/* __________________________________________________________________________________ */}
					{/* __________________________________________________________________________________ */}
					{/* __________________________________________________________________________________ */}
					{/* __________________________________________________________________________________ */}
					<>
						{allForms.map((allForm, index) => (
							<Wrapper key={index}>
								<InvoiceServiceList>{index + 1}</InvoiceServiceList>
								<InvoiceServiceList>{allForm.description}</InvoiceServiceList>
								<InvoiceServiceList>{allForm.price} EUR</InvoiceServiceList>
								<InvoiceServiceList>{allForm.quantity}</InvoiceServiceList>
								<InvoiceServiceList>
									{allForm.price * allForm.quantity}EUR
								</InvoiceServiceList>
							</Wrapper>
						))}
					</>

					<Wrapper>
						<div>{service}</div>
						<div>{amount}</div>
						<div>{quantity}</div>
					</Wrapper>

					<h2>Old Static Form Results</h2>
					<h5>Total: {totalPrice} EUR (net)</h5>
					<h5>Total: {totalVAT} EUR </h5>
					<h5>Grand Total: {grandTotal} EUR</h5>
					{/*__________________________old calc___________________ */}

					<h5>Total: OLD {subTotal} EUR (net)</h5>
					<h5>VAT: OLD{VAT} EUR</h5>
					<h5>Grand Total: {grandTotal} EUR</h5>

					<StyledButton onClick={() => setInvoice(false)}>Edit</StyledButton>
				</div>
			) : (
				<form
					onSubmit={event => {
						event.preventDefault();
						setInvoice(true);
					}}
				>
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
							onChange={event => setName(event.target.value)}
						/>
						<label htmlFor="street">Street</label>
						<input
							type="text"
							id="street"
							name="street"
							placeholder="e.g. Filimore Street"
							value={street}
							onChange={event => setStreet(event.target.value)}
						/>
						<label htmlFor="name">City</label>
						<input
							type="text"
							id="city"
							name="city"
							placeholder="e.g. London"
							value={city}
							onChange={event => setCity(event.target.value)}
						/>
						<label htmlFor="name">Tax ID</label>
						<input
							type="text"
							id="taxID"
							name="taxID"
							placeholder="e.g. 34567890890"
							value={taxID}
							onChange={event => setTaxID(event.target.value)}
						/>
					</InputCard>
					{/* _______________________Costumer Data_________________*/}
					<InputCard>
						<h3>Customer Data</h3>
						<label htmlFor="recipientName">Name</label>
						<input
							type="text"
							id="recipientName"
							name="recipientName"
							placeholder="e.g. John Dylen"
							value={recipientName}
							onChange={event => setRecipientName(event.target.value)}
						/>
						<label htmlFor="recipientStreet">Street</label>
						<input
							type="text"
							id="recipientStreet"
							name="recipientStreet"
							placeholder="e.g. Som Street"
							value={recipientStreet}
							onChange={event => setRecipientStreet(event.target.value)}
						/>
						<label htmlFor="recipientCity">City</label>
						<input
							type="text"
							id="recipientCity"
							name="recipientCity"
							placeholder="e.g. Hamburg"
							value={recipientCity}
							onChange={event => setRecipientCity(event.target.value)}
						/>
					</InputCard>
					<InputCard>
						{' '}
						<h3>Old Static Form / Your service </h3>
						<label htmlFor="service">Description of your service/Item</label>
						<input
							type="text"
							id="service"
							name="service"
							placeholder="Ux design"
							value={service}
							onChange={event => setService(event.target.value)}
						/>
						<label htmlFor="amount">price</label>
						<input
							type="number"
							id="amount"
							name="amount"
							placeholder="amount in EUR"
							value={amount}
							onChange={event => setAmount(event.target.value)}
						/>
						<label htmlFor="amount">quantity</label>
						<input
							type="number"
							id="quantity"
							name="quantity"
							placeholder="quantity in EUR"
							value={quantity}
							onChange={event => setQuantity(event.target.value)}
						/>
					</InputCard>
					{/* ___________________________details about your 
item or service:__________________________________________ */}
					{/* ___________________________details about your 
item or service:__________________________________________ */}
					{/* ___________________________details about your 
item or service:__________________________________________ */}
					{/* ___________________________details about your 
item or service:__________________________________________ */}
					{/* ___________________________details about your 
item or service:__________________________________________ */}
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
					</article>
					{/* ___________________________details about your 
item or service:__________________________________________ */}
					{/* ___________________________details about your 
item or service:__________________________________________ */}
					{/* ___________________________details about your 
item or service:__________________________________________ */}
					{/* ___________________________details about your 
item or service:__________________________________________ */}
					{/* ___________________________details about your 
item or service:__________________________________________ */}

					<h1>
						<button type="button" onClick={() => handleAddForms()}>
							Add more Service/Item
						</button>
					</h1>
					<StyledButton type="submit">Submit</StyledButton>
				</form>
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
			<Service>
				<h4>Your service</h4>
				<h4>{serviceNumber}</h4>
			</Service>
			<div>
				<label htmlFor="description">Description of your service/Item</label>

				<div>
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
				</div>

				<div>
					<li>
						<label htmlFor="description">Price</label>
						<InputField
							type="text"
							name="price"
							placeholder="Enter price"
							value={price}
							onChange={event => {
								setPrice(event.target.value);
								onChange(event, 'number');
							}}
						/>
					</li>
				</div>
				<div>
					<li>
						<label htmlFor="description">Quantity</label>
						<InputField
							type="text"
							name="quantity"
							placeholder="Enter quantity"
							value={quantity}
							onChange={event => {
								setQuantity(event.target.value);
								onChange(event, 'number');
							}}
						/>
					</li>
				</div>
			</div>

			<button onClick={onCancel}>Cancel</button>
		</InputCard>
	);
}
