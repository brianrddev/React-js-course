export default function Input({ statToChange, setPersona }) {
	function changeStat(newStat) {
		setPersona((prevPersona) => ({
			...prevPersona,
			[statToChange]: newStat,
		}));
	}
	return <input className="border-2 border-black rounded" type="text" onChange={(e) => changeStat(e.target.value)} />;
}
