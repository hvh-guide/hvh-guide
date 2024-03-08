const empty = {
	helmet: '-',
	chest: '-',
	boots: '-',
	gloves: '-',
	amulet: '-',
	ring: '-',
}

const jewelSockets = {
	helmet: '+1 Jewel Socket',
	chest: '+1 Jewel Socket',
	boots: '+1 Jewel Socket',
	gloves: '+1 Jewel Socket',
	amulet: '+1 Jewel Socket',
	ring: '+1 Jewel Socket',
}

const equipment = ['helmet', 'chest', 'boots', 'gloves', 'amulet', 'ring']
type Equipment = {
	helmet: string
	chest: string
	boots: string
	gloves: string
	amulet: string
	ring: string
}

type Sets = {
	common: Equipment
	great: Equipment
	rare: Equipment
	epic: Equipment
	legendary: Equipment
	ascended: Equipment
	mythic: Equipment
	bonus: string
}
const colors = {
	common: '#cccccc',
	great: '#b6d7a8',
	rare: '#9fc5e8',
	epic: '#b4a7d6',
	legendary: '#f6b26b',
	ascended: '#ff7c80',
	mythic: '#ffe599',
}

type Classes = {
	knight: Sets
	wizard: Sets
	ranger: Sets
	noble: Sets
	rogue: Sets
}

const additionalJewelSockets = ['epic', 'legendary', 'mythic']

const classEquipment: Classes = {
	knight: {
		common: {
			helmet: '+5 Armor',
			chest: '+5 Armor',
			boots: '+5 Armor',
			gloves: '+12% HP/min Regeneration',
			amulet: '+18% HP/min Regeneration',
			ring: '+12% HP/min Regeneration',
		},
		great: empty,
		rare: {
			helmet: '+18% HP/min Regeneration',
			chest: '+20% Pushback',
			boots: '+18% HP/min Regeneration',
			gloves: '+5% Health',
			amulet: '+100% reflection of incoming damage onto nearby enemies',
			ring: '+5% HP',
		},
		epic: {
			helmet: '+42% HP/min Regeneration',
			chest: '+200% reflection of incoming damage onto nearby enemies',
			boots: '+30% HP/min Regeneration',
			gloves: '+15 Armor',
			amulet: '+10% Health',
			ring: '+30% Pushback',
		},
		legendary: jewelSockets,
		ascended: {
			helmet: '+20 Armor',
			chest: 'Gain a shield every 10s for 5s',
			boots: '+100% immunity to slow effects',
			gloves: '+0,5% extra damage for every 1% of missing health',
			amulet: '+400% reflection of incoming damage onto nearby enemies',
			ring: 'All shields explode on expiration',
		},
		mythic: jewelSockets,
		bonus: 'Decreases Cooldown and increases movement speed when HP is below 40%',
	},
	wizard: {
		common: {
			helmet: '+1% Effect Duration',
			chest: '+2% Effect Duration',
			boots: '+1% Effect Duration',
			gloves: '+1% Area of Effect',
			amulet: '+2% Area of Effect',
			ring: '+1% Area of Effect',
		},
		great: empty,
		rare: {
			helmet: '+25% Status Effect Duration',
			chest: '+1 Starting Upgrade(s)',
			boots: '+2% Area of Effect',
			gloves: '+3% Effect Duration',
			amulet: '+3% Effect Duration',
			ring: '+20% Heal From Potions',
		},
		epic: {
			helmet: '+4% Area of Effect',
			chest: '+1 Magical Projectile(s)',
			boots: '+5% Effect Duration',
			gloves: '+5% Effect Duration',
			amulet: '+5% XP Bonus',
			ring: '+50% Status Effect Duration',
		},
		legendary: jewelSockets,
		ascended: {
			helmet: '+15% XP Bonus',
			chest: '+30% chance of freezing enemies that hit you',
			boots: 'Attract XP every 10 seconds',
			gloves: '+25% damage to burning enemies',
			amulet: '+2 Starting Upgrade(s)',
			ring: '+25% damage to frozen enemies',
		},
		mythic: jewelSockets,
		bonus: 'Slows enemies in range',
	},

	ranger: {
		common: {
			helmet: '-1% Cooldown',
			chest: '-2% Cooldown',
			boots: '-1% Cooldown',
			gloves: '+1% Projectile Speed',
			amulet: '+2% Projectile Speed',
			ring: '+1% Projectile Speed',
		},
		great: empty,
		rare: {
			helmet: '+3% Projectile Speed',
			chest: '+3% Projectile Speed',
			boots: '+7,5% Movement Speed',
			gloves: '-2% Cooldown',
			amulet: '+7,5% Movement Speed',
			ring: '+1% Instant Kill Chance',
		},
		epic: {
			helmet: '+15% Movement Speed',
			chest: '+1 Physical Projectile(s)',
			boots: '-4% Cooldown',
			gloves: '+5% Projectile Speed',
			amulet: '+2% Instant Kill Chance',
			ring: '+5% Projectile Speed',
		},
		legendary: jewelSockets,
		ascended: {
			helmet: '+20 Evasion',
			chest: '+2 reshuffles per run',
			boots: '+1 Physical Projectile(s)',
			gloves: '+10% Critical Hit Chance',
			amulet: '+10% Projectile Speed',
			ring: '+4% Instant Kill Chance',
		},
		mythic: jewelSockets,
		bonus: '+10% Chance to Double Physical Projectiles',
	},

	noble: {
		common: {
			helmet: '+2% XP Bonus',
			chest: '+3% XP Bonus',
			boots: '+2% XP Bonus',
			gloves: '+1% Coin Bonus',
			amulet: '+2% Coin Bonus',
			ring: '+1% Coin Bonus',
		},
		great: empty,
		rare: {
			helmet: '+3% Coin Bonus',
			chest: '+3% Coin Bonus',
			boots: '+3% extra Orbs on completing a run',
			gloves: '+3% XP Bonus',
			amulet: '+3% XP Bonus',
			ring: '+20% chance of getting +1 item from Upgrade Chests',
		},
		epic: {
			helmet: '+1 Starting Upgrade(s)',
			chest: '+10% chance to get a Silver Key on completing a run',
			boots: '+10% extra Dust on completing a run',
			gloves: '+7% XP Bonus',
			amulet: '+5% Coin Bonus',
			ring: '+5% Scroll Bonus',
		},
		legendary: jewelSockets,
		ascended: {
			helmet: '+15% extra orbs on completing a run',
			chest: '+5% chance of getting a Gold Key on completing a run',
			boots: '+5% chance of getting a Gold Key on completing a run',
			gloves: '+10% Coin Bonus',
			amulet: '+15% Scrolls Bonus',
			ring: '+15% chance to get a Silver Key on completing a run',
		},
		mythic: jewelSockets,
		bonus: '+25% Chance of getting an Upgrade chest on completing a wave',
	},

	rogue: {
		common: {
			helmet: '+5 Evasion',
			chest: '+5 Evasion',
			boots: '+5 Evasion',
			gloves: '+1% Critical Hit Chance',
			amulet: '+2% Critical Hit Chance',
			ring: '+1% Critical Hit Chance',
		},
		great: empty,
		rare: {
			helmet: '+3% Critical Hit Chance',
			chest: '+3% Critical Hit Chance',
			boots: '+7.5% Movement Speed',
			gloves: '+10 Evasion',
			amulet: '+7.5% Movement Speed',
			ring: '+1% Instant Kill Chance',
		},
		epic: {
			helmet: '+15% Movement Speed',
			chest: '+15% damage to elite enemies and bosses',
			boots: '+15 Evasion',
			gloves: '+5% Critical Hit Chance',
			amulet: '+25% Chance for a Critical Hit to deal 4x Damage',
			ring: '+25% Power-Up spawn chance',
		},
		legendary: jewelSockets,
		ascended: {
			helmet: '+10% Critical Hit Chance',
			chest: '-6% Cooldown',
			boots: '+20 Evasion',
			gloves: '+50% Chance for a Critical Hit to deal 4x Damage',
			amulet: '+10% Critical Hit Chance',
			ring: '+4% Instant Kill Chance',
		},
		mythic: jewelSockets,
		bonus: '+5% Chance for enemies to explode on death',
	},
}

export default function EquipmentBonuses({ equipmentClass }: { equipmentClass: string }): JSX.Element {
	return (
		<table>
			<th style={{ width: '2%' }}></th>
			<th style={{ borderWidth: 'thin medium thin medium' }}>Rarity</th>
			{equipment.map(e => (
				<th style={{ width: '14%', textTransform: 'capitalize' }}>{e}</th>
			))}
			{Object.entries(classEquipment[equipmentClass]).map(([setKey, equipment]) => (
				<tr
					key={`${equipmentClass}-${setKey}`}
					style={{ backgroundColor: colors[setKey], color: setKey !== 'bonus' && 'black' }}
				>
					<td></td>
					<td style={{ verticalAlign: 'top', textTransform: 'capitalize', borderWidth: 'thin medium thin medium' }}>
						<b>{setKey}</b>
					</td>
					{setKey === 'bonus' ? (
						<td style={{ textAlign: 'center' }} colSpan={7}>
							{equipment as string}
						</td>
					) : (
						Object.entries(equipment).map(([equipmentKey, equipment]) => (
							<td key={`${setKey}-${equipmentKey}`} style={{ verticalAlign: 'top' }}>
								{equipment}
							</td>
						))
					)}
				</tr>
			))}
		</table>
	)
}
