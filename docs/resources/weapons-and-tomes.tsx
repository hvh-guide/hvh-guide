const heroWeapons = [
	{
		weapon: 'Arcane Mage',
		type: 'M',
		bonuses: [
			'+1 Proj +50% Dmg / -0.2s Cooldown',
			'+1 Proj / +1 Enemy Pen',
			'+1 Proj / +50% Dmg / -0.1s Cooldown',
			'+1 Proj / +1 Enemy Pen',
		],
	},
	{
		weapon: 'Blade Master',
		type: 'P',
		bonuses: ['+25% Dmg / -0.25s Cooldown', '+25% Dmg / +1 Proj', '+25% Dmg / +25% Area', '+25% Dmg / +1 Proj'],
	},
	{
		weapon: 'Dark Ranger',
		type: 'P',
		bonuses: [
			'+50% Dmg / -0.1s Cooldown',
			'+1 Proj / +50% Dmg / +25% Proj Speed',
			'+50% Dmg / -0.1s Cooldown',
			'+1 Proj / +50% Dmg',
		],
	},
	{
		weapon: 'Fire Wizard',
		type: 'M',
		bonuses: [
			'+1 Proj / +25% Dmg / +25% Area',
			'+1 Proj / +25% Dmg / -0.25s Cooldown',
			'+50% Dmg / +25% Area',
			'+1 Proj / +50% Dmg',
		],
	},
	{
		weapon: 'Frost Wizard',
		type: 'M',
		bonuses: ['+20% Dmg / +20% Area', '+2 Proj / +20% Dmg', '-0.2s Cooldown / +20% Area', '+20% Dmg'],
	},
	{
		weapon: 'Knight',
		type: 'P',
		bonuses: ['+50% Dmg / +20% Area', '+1 Proj', '+50% Dmg / +20% Area', '+50% Dmg / +20% Area'],
	},
	{
		weapon: 'Pirate Queen',
		type: 'P',
		bonuses: ['+67% Dmg / +50% Proj Speed', '-0.25s Cooldown / +2 Proj', 'Notes =>', '-0.5s Cooldown'],
	},
	{
		weapon: 'Paladin',
		type: 'P',
		bonuses: ['-0.3s Cooldown / +50% Area', '+100% Dmg / +1 Proj', '-0.3s Cooldown / +50% Area', '+100% Dmg / +1 Proj'],
	},
	{
		weapon: 'Reaper',
		type: 'P',
		bonuses: ['+50% Dmg / +100% Area', '+1 Proj / +100% Area', '+1 Proj / +50% Dmg', '+1 Proj / +50% Dmg'],
	},
	{
		weapon: 'Spirit Shaman',
		type: 'M',
		bonuses: [
			'+25% Area / +50% Regen & Beast Stat',
			'+50% Regen & Beast Stats',
			'+25% Area / +50% Regen & Beast Stat',
			'+50% Regen & Beast Stat',
		],
	},
	{
		weapon: 'Tinkerer',
		type: 'P',
		bonuses: ['+15% Area / +1s Napalm', '+33% Dmg / +2 Proj', '+67% Dmg / +10% Area', '+2 Proj / +1s Napalm'],
	},
	{
		weapon: 'Warlock',
		type: 'M',
		bonuses: [
			'+50% Damage / +2 Projectiles',
			'+50% Dmg / +2 Proj / +25% AoE',
			'+50% Damage / +2 Projectiles',
			'+50% Damage / +25% Area of Effect',
		],
	},
	{
		weapon: 'Barbarian',
		type: 'P',
		bonuses: [
			'+15% Damage / -0.25s Cooldown',
			'+25% Damage / +1 Projectile',
			'+25% Damage / +25% Area of Effect',
			'+25% Damage / +1 Projectile',
		],
	},
	{
		weapon: 'Big Game Hunter',
		type: 'P',
		bonuses: [
			'+33% Damage / +1 Penetration',
			'+33% Dmg / +1 Proj / -0.2s CD',
			'+33% Damage / +1 Penetration',
			'+33% Damage / +2 Projectiles',
		],
	},
	{
		weapon: 'Clockwork Mage',
		type: 'M',
		bonuses: [
			'+20% Area / +2 Projectiles',
			'+100% Dmg / -0.25s Cooldown',
			'+100% Dmg / +40% Area of Effect',
			'-0.25s Cooldown / +2 Projectiles',
		],
	},
	{
		weapon: 'Monk',
		type: 'P',
		bonuses: [
			'+33% Damage / +25% Area of Effect',
			'+1 Proj / +1s Duration / +25% Proj Speed',
			'+67% Damage / +25% Area of Effect',
			'+67% Dmg / -0.3s CD / +1s Duration',
		],
	},
	{
		weapon: 'Tide Warden',
		type: 'M',
		bonuses: [
			'+50% Area of Effect / +50% Damage',
			'-0.25s CD / +1 Proj / +1s Duration',
			'+50% Area of Effect / +50% Damage',
			'+1 Proj / +50% Dmg / +1s Duration',
		],
	},
	{
		weapon: 'Assassin',
		type: 'P',
		bonuses: [
			'+2 Projectile / -0.2s Cooldown',
			'+2 Proj / +100% Dmg / +1 Penetration',
			'+2 Projectile / -0.2s Cooldown',
			'+100% Damage / +1 Penetration',
		],
	},
	{
		weapon: 'Santa',
		type: 'M',
		bonuses: [
			'-0.2s CD / +1 Proj / +50% AoE',
			'+50% Dmg / +1 Proj / +50% AoE',
			'-0.2s CD / +1 Proj / +50% AoE',
			'+100% Dmg / +1 Proj / +50% AoE',
		],
	},
	{
		weapon: 'Frost Queen',
		type: 'M',
		bonuses: [
			'+1 Projectile / +50% Area of Effect',
			'+1 Proj / +33% Dmg / -0.2s CD',
			'+33% Damage / +50% Area of Effect',
			'+2 Projectile / +33% Damage',
		],
	},
	{
		weapon: 'Oracle',
		type: 'M',
		bonuses: [
			'+50% Area of Effect / +50% Damage',
			'-0.25s Cooldown / +1 Effect Duration',
			'+1 Projectile / +50% Area of Effect',
			'+1 Proj / +25% Proj Speed / +1s Duration',
		],
	},
	{
		weapon: 'Dragon Empress',
		type: 'M',
		bonuses: [
			'-0.2s Cooldown / +50% Damage',
			'+3 Proj / +33% Proj Spd / +50% Dmg',
			'-0.2s Cooldown / +33% Projectile Speed',
			'+3 Projectile / +50% Damage',
		],
	},
	{
		weapon: 'Artificer',
		type: 'P',
		bonuses: [
			'+33% Dmg / +1 Proj / +25% AoE',
			'+33% Dmg / +1 Proj / +25% AoE',
			'+20% Projectile Speed / +1 Projectile',
			'+30% Proj Speed / +1 Proj / +25% AoE',
		],
	},
	{
		weapon: 'Dark Paladin',
		type: 'M',
		bonuses: [
			'+50% Damage / +1 Penetration',
			'+50% Damage / +1 Penetration',
			'+1 Projectile / +20% Area of Effect',
			'+50% Dmg / +1 Proj / +40% AoE',
		],
	},
]

const weapons = [
	{
		weapon: 'Arcane Staff',
		type: 'M',
		bonuses: [
			'+50% Dmg',
			'+1 Proj / -0.5s Cooldown / +0.5s Duration',
			'+50% Dmg / +0.5s Duration',
			'+1 Proj / -0.5s Cooldown / +50% Dmg',
		],
	},
	{
		weapon: 'Bomb',
		type: 'P',
		bonuses: ['+100% Dmg / +1 Proj', '+40% Area / +1 Proj', '+100% Dmg / +1 Proj', '+40% Area / +1 Proj'],
	},
	{
		weapon: 'Boomerang',
		type: 'P',
		bonuses: [
			'+1 Proj / +100% Dmg / +50% Area',
			'+1 Proj / +100% Dmg / -0.4s Cooldown',
			'+1 Proj / +100% Dmg / +50% Area',
			'+100% Dmg / +50% Proj Speed',
		],
	},
	{
		weapon: 'Chain Lightning',
		type: 'M',
		bonuses: [
			'+20% Proj Speed / +1 Proj',
			'+50% Dmg / +0.25s Duration',
			'+20% Proj Speed / +1 Proj',
			'+50% Dmg / +0.25s Duration / +20% Proj Speed',
		],
	},
	{
		weapon: 'Crossbow',
		type: 'P',
		bonuses: [
			'+50% Dmg / +50% Proj Speed',
			'+50% Proj Speed / +1 Proj',
			'+50% Dmg / +50% Proj Speed',
			'+25% Duration / +1 Proj',
		],
	},
	{
		weapon: 'Divine Aura',
		type: 'M',
		bonuses: [
			'-0.25s Cooldown / +40% Area',
			'+50% Dmg / +20% Area / +15% Pushback',
			'+50% Dmg / +20% Area / -0.25s Cooldown',
			'0.25s Cooldown / +20% Area / +15% Pushback',
		],
	},
	{
		weapon: 'Dragon Breath',
		type: 'M',
		bonuses: [
			'+33% Dmg / +50% Area / +0.5s Duration',
			'+33% Dmg / 0.25s Cooldown / +50% Area',
			'+67% Dmg / +50% Area / +0.5s Duration',
			'+67% Dmg / +50% Area / -0.25s Cooldown',
		],
	},
	{
		weapon: 'Fire Orbs',
		type: 'M',
		bonuses: [
			'+50% Dmg / +25% Area',
			'+100% Dmg / +25% Proj Speed / +1 Proj',
			'+100% Dmg / -1s Cooldown / +1s Duration',
			'+25% Area / +25% Proj Speed / +1 Proj',
		],
	},
	{
		weapon: 'Hammer',
		type: 'P',
		bonuses: [
			'+2 Proj / +100% Dmg',
			'+2 Proj / +100% Dmg / -1s Cooldown',
			'+2 Proj / +100% Dmg',
			'+2 Proj / +100% Dmg / -1s Cooldown',
		],
	},
	{
		weapon: 'Ice Wand',
		type: 'M',
		bonuses: ['+1 Proj / -0.25s Cooldown', '+1 Proj / +100% Dmg', '+1 Proj / -0.25s Cooldown', '+1 Proj / +100% Dmg'],
	},
	{
		weapon: 'Poison Darts',
		type: 'P',
		bonuses: [
			'+2 Proj / +50% Dmg / +20% Poison',
			'+50% Dmg / +1 Enemy Pen / +20% Poison',
			'+2 Proj / +100% Dmg / -0.6s Cooldown',
			'+2 Proj / +1 Enemy Pen / +20% Poison',
		],
	},
]

const tomes = {
	area: ['Area', '+15%', '+30%', '+50%'],
	armor: ['Armor', '+15%', '+30%', '+50%'],
	coin: ['More Coins', '+10%', '+20%', '+30%'],
	cooldown: ['Faster Attacks', '+10%', '+20%', '+30%'],
	critical: ['Critical Chance', '+5%', '+10%', '+15%'],
	damage: ['Damage', '+15%', '+30%', '+50%'],
	duplicator: ['Extra Projectiles', '+1', '+2', '+3'],
	duration: ['Effect Duration', '+15%', '+30%', '+50%'],
	evasion: ['Evasion', '+15%', '+30%', '+50%'],
	life: ['Max HP', '+15%', '+30%', '+50%'],
	movement: ['Movement Speed', '+33%', '+66%', '+100%'],
	recovery: ['HP Regen/Min', '+40%', '+70%', '+100%'],
	speed: ['Projectile Speed', '+15%', '+30%', '+50%'],
	xp: ['Experience Gain', '+10%', '+25%', '+50%'],
}
