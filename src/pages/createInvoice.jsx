import {useState} from 'react';

export default function CreateInvoice() {
	const [invoice, setInvoice] = useState(false);
	/* -------------------USER DATA ---------------------*/
	const [name, setName] = useState('');
	const [street, setStreet] = useState('');
	const [city, setCity] = useState('');
	const [taxID, setTaxID] = useState('');
	const [amount, setAmount] = useState('');

	return (
		<div>
			{invoice ? (
				<div>
					<h1>Your Invoice</h1>
					<ul>
						<li>{name}</li>
						<li>{street}</li>
						<li>{city}</li>
						<li>{taxID}</li>
						<div>
							<li>
								<h1>{amount}</h1>
							</li>
						</div>
					</ul>
					<button onClick={() => setInvoice(false)}>Edit</button>
				</div>
			) : (
				<form>
					<h1>Create Invoice</h1>

					{/* --------------Freelance Data-------------- */}
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="e.g. John Dylen"
						value={name}
						onChange={() => setName(event.target.value)}
					/>
					<label htmlFor="street">Street</label>
					<input
						type="text"
						id="street"
						name="street"
						placeholder="e.g. Som Street"
						value={street}
						onChange={() => setStreet(event.target.value)}
					/>
					<label htmlFor="name">City</label>
					<input
						type="text"
						id="city"
						name="city"
						placeholder="e.g. Hamburg"
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
					<label htmlFor="amount">amount</label>
					<input
						type="text"
						id="amount"
						name="amount"
						placeholder="amount in EUR"
						value={amount}
						onChange={() => setAmount(event.target.value)}
					/>
					<button onClick={() => setInvoice(true)} type="submit">
						Submit
					</button>
				</form>
			)}
		</div>
	);
}
