import {Fragment} from 'react';

export const DisplayTable = ({allForms}) => {
	return (
		<Fragment>
			<table>
				<thead>
					<tr>
						<th style={{width: '10%'}}>Nr</th>
						<th style={{width: '40%'}}>description</th>
						<th style={{width: '10%'}}>QTY</th>
						<th style={{width: '20%'}}>price</th>
						<th style={{width: '20%'}}>total</th>
					</tr>
				</thead>
				<tbody>
					{allForms.map((allForm, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{allForm.description}</td>
							<td>{allForm.quantity.toFixed(0)}</td>
							<td>{allForm.price.toFixed(2)}</td>
							<td>{(allForm.price * allForm.quantity).toFixed(2)} </td>
						</tr>
					))}
				</tbody>
			</table>
		</Fragment>
	);
};
