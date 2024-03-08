type JewelType = {
	regular: JewelDetails[]
	unique: JewelDetails[]
}

type JewelDetails = {
	jewel: string
	base: string
	perLevel: string
	maxBonus: string
	description: string
}

const jewelDetails: JewelType = {
	regular: [
		{
			jewel: 'Area of Effect',
			base: '+2%',
			perLevel: '+1%',
			maxBonus: '+11%',
			description: '+x% Area of Effect',
		},
		{
			jewel: 'Coin',
			base: '+1.5%',
			perLevel: '+0.75%',
			maxBonus: '+8.25%',
			description: '+x% Coin Bonus',
		},
		{
			jewel: 'Cooldown',
			base: '-0.5%',
			perLevel: '-0.25%',
			maxBonus: '-2.75%',
			description: '-x% Cooldown',
		},
		{
			jewel: 'Critical',
			base: '+0.5%',
			perLevel: '+0.25%',
			maxBonus: '+2.75%',
			description: '+x% Critical Hit Chance',
		},
		{
			jewel: 'Damage',
			base: '+5%',
			perLevel: '+2.5%',
			maxBonus: '+27.5%',
			description: '+x% Damage',
		},
		{
			jewel: 'Effect Duration',
			base: '+2%',
			perLevel: '+1%',
			maxBonus: '+11%',
			description: '+x% Effect Duration',
		},
		{
			jewel: 'Evasion',
			base: '+2',
			perLevel: '+1',
			maxBonus: '+11',
			description: '+x Evasion',
		},
		{
			jewel: 'Health',
			base: '+10',
			perLevel: '+5',
			maxBonus: '+55',
			description: '+x% Health',
		},
		{
			jewel: 'Key',
			base: '+1%',
			perLevel: '+0.5%',
			maxBonus: '+5.5%',
			description: '+x% chance to get a Silver Key on comleting a run',
		},
		{
			jewel: 'Movement',
			base: '+5%',
			perLevel: '+2.5%',
			maxBonus: '+27.5%',
			description: '+x% Movement Speed',
		},
		{
			jewel: 'Reflection',
			base: '+20%',
			perLevel: '+10%',
			maxBonus: '+110%',
			description: '+x% reflection of incoming damage onto nearby enemies',
		},
		{
			jewel: 'Regeneration',
			base: '+5%',
			perLevel: '+2.5%',
			maxBonus: '+27.5%',
			description: '+x% HP/min Regeneration',
		},
		{
			jewel: 'Speed',
			base: '+2%',
			perLevel: '+1%',
			maxBonus: '+11%',
			description: '+x% Projectile Speed',
		},
	],
	unique: [
		{
			jewel: 'Assassin',
			base: '+1%',
			perLevel: '+0.5%',
			maxBonus: '+5.5%',
			description: '+x% Instant Kill Chance',
		},
		{
			jewel: 'Explosion',
			base: '+0.75%',
			perLevel: '+0.375%',
			maxBonus: '+4.125',
			description: '+x% chance for enemies to explode on death',
		},
		{
			jewel: 'Guild Points Bonus',
			base: '+2%',
			perLevel: '+1%',
			maxBonus: '+11%',
			description: '+x% Guild Points',
		},
		{
			jewel: 'Looter',
			base: '+2.5%',
			perLevel: '+1.25%',
			maxBonus: '+13.75%',
			description: '+x% chance of getting an Uprade Chest on completing a wave',
		},
		{
			jewel: 'Projectile (M)',
			base: '+1.5%',
			perLevel: '+0.75%',
			maxBonus: '+8.25%',
			description: '+x%  chance to double the amount of magical projectile',
		},
		{
			jewel: 'Projectile (P)',
			base: '+1.5%',
			perLevel: '+0.75%',
			maxBonus: '+8.25%',
			description: '+x% chance to double the amount of physical projectile',
		},
		{
			jewel: 'Ultimate Duration',
			base: '+5%',
			perLevel: '+5%',
			maxBonus: '+50%',
			description: '+x% Ultimate Duration',
		},
		{
			jewel: 'Ultimate Charge',
			base: '-3%',
			perLevel: '-3%',
			maxBonus: '-30%',
			description: '- x% Ultimate activation requirement',
		},
		{
			jewel: 'Vulnerability',
			base: '+3%',
			perLevel: '+1.5%',
			maxBonus: '+16.5%',
			description: '+x% damage on each consecutive hit. Can stack up to 10 times',
		},
		{
			jewel: 'Weakness',
			base: '+3',
			perLevel: '+1.5',
			maxBonus: '+16.5',
			description: '+x Enemy Weakness (decreases enemy attack)',
		},
	],
}

const headers = ['jewel', 'base', 'per level', 'max bonus', 'description']
const colors = { regular: '#06858521', unique: '#4c11304d' }

export default function JewelStats({ jewelType }: { jewelType: string }): JSX.Element {
	return (
		<table style={{ backgroundColor: colors[jewelType] }}>
			<th style={{ width: '4%' }}></th>
			{headers.map(e => (
				<th style={{ width: '16%', textTransform: 'capitalize' }}>{e}</th>
			))}
			{jewelDetails[jewelType].map((row: JewelDetails) => (
				<tr key={row.jewel}>
					<td></td>
					{Object.entries(row).map(([stat, value]) => (
						<td key={`${row.jewel}-${stat}`} style={{ verticalAlign: 'top' }}>
							{value}
						</td>
					))}
				</tr>
			))}
		</table>
	)
}
