import { useState } from "react";
import './App.css';

export default function Editing({ updateItem, removeItem, item, index }) {
	const [isEditing, setIsEditing] = useState(false);

return (
	<div className='card'>
	{isEditing ? (
		<input
			type='text'
			name='title'
			id='title'
			required
			value={item.title}
			onChange={e => updateItem(index, { title: e.target.value })}
		/>
	) : (
	<h5>{item.title}</h5>
	)}
	{isEditing ? (
		<input
			type='number'
			name='calorie'
			id='calorie'
			required
			value={item.calorie}
			onChange={e => updateItem(index, { calorie: e.target.value })}
	/>
	) : (
		<p>You have consumed {item.calorie} calories.</p>
	)}
	
		<button style={{backgroundColor:"red"}} onClick={() => removeItem(index)}>Delete</button>
		<button style={{backgroundColor:"blue"}} onClick={() => setIsEditing(!isEditing)}>
			{isEditing ? 'Done' : 'Edit'}
		</button>
	</div>
	);
}