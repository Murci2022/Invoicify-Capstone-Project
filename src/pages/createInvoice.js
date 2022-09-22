import {useState} from 'react';

export default function CreateInvoice() {
	const [invoice, setInvoice] = useState(false);
	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');

	return (
		<div>
			{invoice ? (
				<div>
					<h1>Your Invoice</h1>
					<ul>
						<li>{name}</li>
						<li>{amount}</li>
					</ul>
				</div>
			) : (
				<form>
					<h1>Create Invoice</h1>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="e.g. John Dylen"
						value={name}
						onChange={() => setName(event.target.value)}
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
