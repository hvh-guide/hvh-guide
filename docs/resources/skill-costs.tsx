const right = { textAlign: 'right' }

const data = {
	'1st': [15, 15, 15],
	'2nd': [35, 35, 35],
	'3rd': [75, 75, 75],
	'4th': [125, 125, 125],
}

const headers = ['Star Rank', 'Skill 1', 'Skill 2', 'Ultimate Skill']

export default function SkillCosts(): JSX.Element {
	return (
		<table>
			<thead>
				<tr>
					{headers.map((e, i) => (
						<th>{e}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{Object.entries(data).map(([rank, [s1, s2, ult]]) => (
					<tr>
						<td>{rank}</td>
						<td style={{ textAlign: 'right', backgroundColor: '#08088a42' }}>{s1}</td>
						<td style={{ textAlign: 'right', backgroundColor: '#08088a42' }}>{s2}</td>
						<td style={{ textAlign: 'right', backgroundColor: '#a1000057' }}>{ult}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
