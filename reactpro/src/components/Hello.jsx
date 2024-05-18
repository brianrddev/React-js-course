export default function Hello({ persona }) {
	return (
		<div>
			<p>Name: {persona.name}</p>
			<p>Surname: {persona.surName}</p>
			<p>Age: {persona.age}</p>
		</div>
	);
}
