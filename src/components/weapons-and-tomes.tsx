type RowType = {
  type: string
  bonuses: string[]
}

type ForgeType = {
  [key: string]: RowType | null
}

type ClassificationType = {
  hero: ForgeType
  standard: ForgeType
}

const data: ClassificationType = {
  hero: {
    'Arcane Mage': {
      type: 'Magical',
      bonuses: [
        '+1 Proj +50% Dmg / -0.2s Cooldown',
        '+1 Proj / +1 Enemy Pen',
        '+1 Proj / +50% Dmg / -0.1s Cooldown',
        '+1 Proj / +1 Enemy Pen',
      ],
    },
    Blademaster: {
      type: 'Physical',
      bonuses: ['+25% Dmg / -0.25s Cooldown', '+25% Dmg / +1 Proj', '+25% Dmg / +25% Area', '+25% Dmg / +1 Proj'],
    },
    'Dark Ranger': {
      type: 'Physical',
      bonuses: [
        '+50% Dmg / -0.1s Cooldown',
        '+1 Proj / +50% Dmg / +25% Proj Speed',
        '+50% Dmg / -0.1s Cooldown',
        '+1 Proj / +50% Dmg',
      ],
    },
    'Fire Wizard': {
      type: 'Magical',
      bonuses: [
        '+1 Proj / +25% Dmg / +25% Area',
        '+1 Proj / +25% Dmg / -0.25s Cooldown',
        '+50% Dmg / +25% Area',
        '+1 Proj / +50% Dmg',
      ],
    },
    'Frost Wizard': {
      type: 'Magical',
      bonuses: ['+20% Dmg / +20% Area', '+2 Proj / +20% Dmg', '-0.2s Cooldown / +20% Area', '+20% Dmg'],
    },
    Knight: {
      type: 'Physical',
      bonuses: ['+50% Dmg / +20% Area', '+1 Proj', '+50% Dmg / +20% Area', '+50% Dmg / +20% Area'],
    },
    'Pirate Queen': {
      type: 'Physical',
      bonuses: ['+67% Dmg / +50% Proj Speed', '-0.25s Cooldown / +2 Proj', 'Notes =>', '-0.5s Cooldown'],
    },
    Paladin: {
      type: 'Physical',
      bonuses: [
        '-0.3s Cooldown / +50% Area',
        '+100% Dmg / +1 Proj',
        '-0.3s Cooldown / +50% Area',
        '+100% Dmg / +1 Proj',
      ],
    },
    Reaper: {
      type: 'Physical',
      bonuses: ['+50% Dmg / +100% Area', '+1 Proj / +100% Area', '+1 Proj / +50% Dmg', '+1 Proj / +50% Dmg'],
    },
    'Spirit Shaman': {
      type: 'Magical',
      bonuses: [
        '+25% Area / +50% Regen & Beast Stat',
        '+50% Regen & Beast Stats',
        '+25% Area / +50% Regen & Beast Stat',
        '+50% Regen & Beast Stat',
      ],
    },
    'Crazy Tinkerer': {
      type: 'Physical',
      bonuses: ['+15% Area / +1s Napalm', '+33% Dmg / +2 Proj', '+67% Dmg / +10% Area', '+2 Proj / +1s Napalm'],
    },
    Warlock: {
      type: 'Magical',
      bonuses: [
        '+50% Damage / +2 Projectiles',
        '+50% Dmg / +2 Proj / +25% AoE',
        '+50% Damage / +2 Projectiles',
        '+50% Damage / +25% Area of Effect',
      ],
    },
    Barbarian: {
      type: 'Physical',
      bonuses: [
        '+15% Damage / -0.25s Cooldown',
        '+25% Damage / +1 Projectile',
        '+25% Damage / +25% Area of Effect',
        '+25% Damage / +1 Projectile',
      ],
    },
    'Big Game Hunter': {
      type: 'Physical',
      bonuses: [
        '+33% Damage / +1 Penetration',
        '+33% Dmg / +1 Proj / -0.2s CD',
        '+33% Damage / +1 Penetration',
        '+33% Damage / +2 Projectiles',
      ],
    },
    'Clockwork Mage': {
      type: 'Magical',
      bonuses: [
        '+20% Area / +2 Projectiles',
        '+100% Dmg / -0.25s Cooldown',
        '+100% Dmg / +40% Area of Effect',
        '-0.25s Cooldown / +2 Projectiles',
      ],
    },
    Monk: {
      type: 'Physical',
      bonuses: [
        '+33% Damage / +25% Area of Effect',
        '+1 Proj / +1s Duration / +25% Proj Speed',
        '+67% Damage / +25% Area of Effect',
        '+67% Dmg / -0.3s CD / +1s Duration',
      ],
    },
    'Tide Warden': {
      type: 'Magical',
      bonuses: [
        '+50% Area of Effect / +50% Damage',
        '-0.25s CD / +1 Proj / +1s Duration',
        '+50% Area of Effect / +50% Damage',
        '+1 Proj / +50% Dmg / +1s Duration',
      ],
    },
    Assassin: {
      type: 'Physical',
      bonuses: [
        '+2 Projectile / -0.2s Cooldown',
        '+2 Proj / +100% Dmg / +1 Penetration',
        '+2 Projectile / -0.2s Cooldown',
        '+100% Damage / +1 Penetration',
      ],
    },
    'Santa Claus': {
      type: 'Magical',
      bonuses: [
        '-0.2s CD / +1 Proj / +50% AoE',
        '+50% Dmg / +1 Proj / +50% AoE',
        '-0.2s CD / +1 Proj / +50% AoE',
        '+100% Dmg / +1 Proj / +50% AoE',
      ],
    },
    'Frost Queen': {
      type: 'Magical',
      bonuses: [
        '+1 Projectile / +50% Area of Effect',
        '+1 Proj / +33% Dmg / -0.2s CD',
        '+33% Damage / +50% Area of Effect',
        '+2 Projectile / +33% Damage',
      ],
    },
    Oracle: {
      type: 'Magical',
      bonuses: [
        '+50% Area of Effect / +50% Damage',
        '-0.25s Cooldown / +1 Effect Duration',
        '+1 Projectile / +50% Area of Effect',
        '+1 Proj / +25% Proj Speed / +1s Duration',
      ],
    },
    'Dragon Empress': {
      type: 'Magical',
      bonuses: [
        '-0.2s Cooldown / +50% Damage',
        '+3 Proj / +33% Proj Spd / +50% Dmg',
        '-0.2s Cooldown / +33% Projectile Speed',
        '+3 Projectile / +50% Damage',
      ],
    },
    Artificer: {
      type: 'Physical',
      bonuses: [
        '+33% Dmg / +1 Proj / +25% AoE',
        '+33% Dmg / +1 Proj / +25% AoE',
        '+20% Projectile Speed / +1 Projectile',
        '+30% Proj Speed / +1 Proj / +25% AoE',
      ],
    },
    'Dark Paladin': {
      type: 'Magical',
      bonuses: [
        '+50% Damage / +1 Penetration',
        '+50% Damage / +1 Penetration',
        '+1 Projectile / +20% Area of Effect',
        '+50% Dmg / +1 Proj / +40% AoE',
      ],
    },
    'Rocket Pilot': {
      type: 'Magical',
      bonuses: [
        '+50% Damage / +1 Penetration',
        '+50% Damage / +1 Penetration',
        '+1 Projectile / +20% Area of Effect',
        '+50% Dmg / +1 Proj / +40% AoE',
      ],
    },
    Leprechaun: {
      type: 'Magical',
      bonuses: [
        '+50% Damage / +1 Penetration',
        '+50% Damage / +1 Penetration',
        '+1 Projectile / +20% Area of Effect',
        '+50% Dmg / +1 Proj / +40% AoE',
      ],
    },
  },
  standard: {
    'Arcane Staff': {
      type: 'Magical',
      bonuses: [
        '+50% Dmg',
        '+1 Proj / -0.5s Cooldown / +0.5s Duration',
        '+50% Dmg / +0.5s Duration',
        '+1 Proj / -0.5s Cooldown / +50% Dmg',
      ],
    },
    Bomb: {
      type: 'Physical',
      bonuses: ['+100% Dmg / +1 Proj', '+40% Area / +1 Proj', '+100% Dmg / +1 Proj', '+40% Area / +1 Proj'],
    },
    Boomerang: {
      type: 'Physical',
      bonuses: [
        '+1 Proj / +100% Dmg / +50% Area',
        '+1 Proj / +100% Dmg / -0.4s Cooldown',
        '+1 Proj / +100% Dmg / +50% Area',
        '+100% Dmg / +50% Proj Speed',
      ],
    },
    'Chain Lightning': {
      type: 'Magical',
      bonuses: [
        '+20% Proj Speed / +1 Proj',
        '+50% Dmg / +0.25s Duration',
        '+20% Proj Speed / +1 Proj',
        '+50% Dmg / +0.25s Duration / +20% Proj Speed',
      ],
    },
    Crossbow: {
      type: 'Physical',
      bonuses: [
        '+50% Dmg / +50% Proj Speed',
        '+50% Proj Speed / +1 Proj',
        '+50% Dmg / +50% Proj Speed',
        '+25% Duration / +1 Proj',
      ],
    },
    'Divine Aura': {
      type: 'Magical',
      bonuses: [
        '-0.25s Cooldown / +40% Area',
        '+50% Dmg / +20% Area / +15% Pushback',
        '+50% Dmg / +20% Area / -0.25s Cooldown',
        '0.25s Cooldown / +20% Area / +15% Pushback',
      ],
    },
    "Dragon's Breath": {
      type: 'Magical',
      bonuses: [
        '+33% Dmg / +50% Area / +0.5s Duration',
        '+33% Dmg / 0.25s Cooldown / +50% Area',
        '+67% Dmg / +50% Area / +0.5s Duration',
        '+67% Dmg / +50% Area / -0.25s Cooldown',
      ],
    },
    'Fire Orbs': {
      type: 'Magical',
      bonuses: [
        '+50% Dmg / +25% Area',
        '+100% Dmg / +25% Proj Speed / +1 Proj',
        '+100% Dmg / -1s Cooldown / +1s Duration',
        '+25% Area / +25% Proj Speed / +1 Proj',
      ],
    },
    Hammer: {
      type: 'Physical',
      bonuses: [
        '+2 Proj / +100% Dmg',
        '+2 Proj / +100% Dmg / -1s Cooldown',
        '+2 Proj / +100% Dmg',
        '+2 Proj / +100% Dmg / -1s Cooldown',
      ],
    },
    'Ice Wand': {
      type: 'Magical',
      bonuses: ['+1 Proj / -0.25s Cooldown', '+1 Proj / +100% Dmg', '+1 Proj / -0.25s Cooldown', '+1 Proj / +100% Dmg'],
    },
    'Poison Dart': {
      type: 'Physical',
      bonuses: [
        '+2 Proj / +50% Dmg / +20% Poison',
        '+50% Dmg / +1 Enemy Pen / +20% Poison',
        '+2 Proj / +100% Dmg / -0.6s Cooldown',
        '+2 Proj / +1 Enemy Pen / +20% Poison',
      ],
    },
  },
}

export function WeaponUpgrades({ classification, name }: { classification: string; name: string }): JSX.Element {
  const { type, bonuses } = data[classification][name]
  const [u1, u2, u3, u4] = bonuses
  return (
    <table>
      <thead>
        <th>Upgrade</th>
        <th>Description</th>
      </thead>
      <tbody>
        <tr>
          <td>Base</td>
          <td>{type} Damage</td>
        </tr>
        {bonuses.map((u, i) => (
          <tr>
            <td>Level {i + 2}</td>
            <td>{u}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const tomes = {
  Area: ['Area', '+15%', '+30%', '+50%'],
  Armor: ['Armor', '+15%', '+30%', '+50%'],
  Coin: ['More Coins', '+10%', '+20%', '+30%'],
  Cooldown: ['Faster Attacks', '+10%', '+20%', '+30%'],
  Critical: ['Critical Chance', '+5%', '+10%', '+15%'],
  Damage: ['Damage', '+15%', '+30%', '+50%'],
  Duplicator: ['Extra Projectiles', '+1', '+2', '+3'],
  Duration: ['Effect Duration', '+15%', '+30%', '+50%'],
  Evasion: ['Evasion', '+15%', '+30%', '+50%'],
  Life: ['Max HP', '+15%', '+30%', '+50%'],
  Movement: ['Movement Speed', '+33%', '+66%', '+100%'],
  Recovery: ['HP Regen/Min', '+40%', '+70%', '+100%'],
  Speed: ['Projectile Speed', '+15%', '+30%', '+50%'],
  Xp: ['Experience Gain', '+10%', '+25%', '+50%'],
}

export function TomesUpgrades(): JSX.Element {
  return (
    <table>
      <th>Tome</th>
      <th>Description</th>
      <th style={{ textAlign: 'right' }}>Upgrade 1</th>
      <th style={{ textAlign: 'right' }}>Upgrade 2</th>
      <th style={{ textAlign: 'right' }}>Upgrade 3</th>
      {Object.entries(tomes).map(([key, [desc, u1, u2, u3]]) => (
        <tr>
          <td>{key}</td>
          <td>{desc}</td>
          <td style={{ textAlign: 'right' }}>{u1}</td>
          <td style={{ textAlign: 'right' }}>{u2}</td>
          <td style={{ textAlign: 'right' }}>{u3}</td>
        </tr>
      ))}
    </table>
  )
}
