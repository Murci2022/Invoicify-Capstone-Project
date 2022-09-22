import {useState} from 'react';

export default function FormPage() {
	const [invoice, setInvoice] = useState(false);
	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');

	return (
		<div>
			{invoice ? (
				<form>
					<ul>
						<li>{name}</li>
						<li>{amount}</li>
					</ul>
				</form>
			) : (
				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						placeholder="John Dylen"
						value={name}
						onChange={() => setName(event.target.value)}
					/>
					<label htmlFor="amount">amount</label>
					<input
						type="text"
						id="amount"
						placeholder="amount in EUR"
						value={amount}
						onChange={() => setAmount(event.target.value)}
					/>
					<button onClick={() => setInvoice(true)} type="submit">
						Submit
					</button>
				</div>
			)}
		</div>
	);
}
