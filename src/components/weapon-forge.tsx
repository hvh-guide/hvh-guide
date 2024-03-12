import { type CSSProperties } from 'react'

type ChoiceType = {
  name: string
  desc: string
  preferred?: boolean
}

type ColumnType = {
  left: ChoiceType
  right: ChoiceType
}

type RowType = {
  first: ColumnType
  second: ColumnType
  global: ChoiceType
  evolution: ChoiceType
  third: ColumnType
}

type ForgeType = {
  [key: string]: RowType
}

type ClassificationType = {
  hero: ForgeType
  standard: ForgeType
}

const unknown: RowType = {
  first: { left: { name: '', desc: '' }, right: { name: '', desc: '' } },
  second: { left: { name: '', desc: '' }, right: { name: '', desc: '' } },
  global: { name: '', desc: '' },
  evolution: { name: '', desc: '' },
  third: { left: { name: '', desc: '' }, right: { name: '', desc: '' } },
}

const data: ClassificationType = {
  hero: {
    'Arcane Mage': {
      first: {
        left: {
          name: 'Energy',
          desc: '+10% Damage',
        },
        right: {
          name: 'Missiles',
          desc: '+2 Projectiles',
          preferred: true,
        },
      },
      second: {
        left: {
          name: 'Paralyze',
          desc: '5% Stun Chance',
          preferred: true,
        },
        right: {
          name: 'Burn',
          desc: '10% Burn Chance',
        },
      },
      global: {
        name: 'Arcane Speed',
        desc: '+2.5% Projectile Speed',
      },
      evolution: {
        name: 'Arcane Scepter',
        desc: 'Shoots big arcane projectiles that bounce off',
      },
      third: {
        left: {
          name: 'Accelerate',
          desc: '+25% Proj Spd',
        },
        right: {
          name: 'Penetrate',
          desc: '+1 Penetration',
          preferred: true,
        },
      },
    },
    Knight: {
      first: {
        left: {
          name: 'Swing',
          desc: '+10% Area',
          preferred: true,
        },
        right: {
          name: 'Stab',
          desc: '+5% Crit Chance',
        },
      },
      second: {
        left: {
          name: 'Sharp Edge',
          desc: '25% Bleed Chance',
        },
        right: {
          name: 'Blunt Edge',
          desc: '25% Slow Chance',
          preferred: true,
        },
      },
      global: {
        name: 'Reinforced Grips',
        desc: '+2.5% Area',
      },
      evolution: {
        name: 'Rune Sword',
        desc: 'Strikes in big area with magic runes, pushing back enemies',
      },
      third: {
        left: {
          name: 'Heavy Blade',
          desc: '+20% Area',
        },
        right: {
          name: 'Light Blade',
          desc: '-10% Cooldown',
          preferred: true,
        },
      },
    },
    'Dark Ranger': {
      first: {
        left: {
          name: 'Deadeye',
          desc: '1% Instant Kill Chance',
          preferred: true,
        },
        right: {
          name: 'Sharpshooter',
          desc: '+5% Crit Chance',
        },
      },
      second: {
        left: {
          name: 'Multishot',
          desc: '+2 Projectiles',
        },
        right: {
          name: 'Quickdraw',
          desc: '-2% Cooldown',
          preferred: true,
        },
      },
      global: {
        name: "Hunter's Haste",
        desc: '-1% Cooldown',
      },
      evolution: {
        name: 'Dark Bow',
        desc: 'Shoot a fan of arrows, inflicting bleeding wounds',
      },
      third: {
        left: {
          name: 'Improved Explosives',
          desc: '+5% Explode Chance',
          preferred: true,
        },
        right: {
          name: 'Barbed Arrows',
          desc: '+50% Status Duration',
        },
      },
    },
    'Crazy Tinkerer': {
      first: {
        left: {
          name: 'Explosive Boost',
          desc: '+10% Damage',
        },
        right: {
          name: 'Swift Deployment',
          desc: '-2.5% Cooldown',
          preferred: true,
        },
      },
      second: {
        left: {
          name: 'Expanded Blast',
          desc: '+10% Area of Effect',
          preferred: true,
        },
        right: {
          name: 'Enduring Napalm',
          desc: '+20% Status Duration',
        },
      },
      global: {
        name: 'Stun Them!',
        desc: '+5% damage to stunned enemies',
      },
      evolution: {
        name: 'Big Mines',
        desc: 'Bigger explosions that stun enemies',
      },
      third: {
        left: {
          name: 'Big Detonation',
          desc: '+10% Area of Effect',
          preferred: true,
        },
        right: {
          name: 'Stun Vulnerability',
          desc: '+20% damage to stunned enemies',
        },
      },
    },
    'Fire Wizard': {
      first: {
        left: {
          name: 'Bigger Fire',
          desc: '+10% Area',
          preferred: true,
        },
        right: {
          name: 'More Fire',
          desc: '+2 Projectiles',
        },
      },
      second: {
        left: {
          name: 'Flame Fury',
          desc: '-2.5% Cooldown',
          preferred: true,
        },
        right: {
          name: 'Inferno Impact',
          desc: '+10% Damage',
        },
      },
      global: {
        name: 'Burning Weapons',
        desc: '+2.5% Damage',
      },
      evolution: {
        name: 'Meteor Staff',
        desc: 'Summons meteors that rain down from the sky, damaging enemies on impact',
      },
      third: {
        left: {
          name: 'Armageddon',
          desc: '+50% Area',
          preferred: true,
        },
        right: {
          name: 'Asteroids',
          desc: '+4 Projectiles',
        },
      },
    },
    'Frost Wizard': {
      first: {
        left: {
          name: 'Blizzard',
          desc: '+5% Freeze Chance',
        },
        right: {
          name: 'Avalanche',
          desc: '+10% Area',
          preferred: true,
        },
      },
      second: {
        left: {
          name: 'Frost Touch',
          desc: '+5% Freeze Chance',
          preferred: true,
        },
        right: {
          name: 'Permafrost',
          desc: '+20% Status Duration',
        },
      },
      global: {
        name: 'Eternal Winter',
        desc: '+5% Status Duration',
      },
      evolution: {
        name: 'Summoner Ice Gauntlets',
        desc: 'Summons an Ice Elemental that shoots Frost Bolts at enemies',
      },
      third: {
        left: {
          name: 'Hailstorm',
          desc: '+5 Ice Elemental Proj',
        },
        right: {
          name: 'Ice Cannon',
          desc: '-40% Ice Elemental CD',
          preferred: true,
        },
      },
    },
    Blademaster: {
      first: {
        left: {
          name: 'Dual Wield',
          desc: '+2 Projectiles',
        },
        right: {
          name: 'Big Katanas',
          desc: '+5% Area',
          preferred: true,
        },
      },
      second: {
        left: {
          name: 'Heartseeker',
          desc: '+1% Instant Kill',
        },
        right: {
          name: "Blade's Finesse",
          desc: '+2.5% Crit Chance',
          preferred: true,
        },
      },
      global: {
        name: "Warrior's Path",
        desc: '+2% Crit Chance',
      },
      evolution: {
        name: 'Shadow Blades',
        desc: 'Rapid attacks that make enemies explode on death',
      },
      third: {
        left: {
          name: 'Heavy Hitter',
          desc: '+5% Area of Effect',
          preferred: true,
        },
        right: {
          name: 'Critmaster ',
          desc: '+5% Crit Chance',
        },
      },
    },
    'Spirit Shaman': {
      first: {
        left: {
          name: 'Swift Spirit',
          desc: 'Beasts +25% movement ',
        },
        right: {
          name: 'Beastly Domain',
          desc: 'Beasts +20% Area of Effect',
          preferred: true,
        },
      },
      second: {
        left: {
          name: 'Guardian Retreat',
          desc: 'Beast TP to you when you take damage',
          preferred: true,
        },
        right: {
          name: 'Feral Fury',
          desc: 'Beasts +20% Damage',
        },
      },
      global: {
        name: 'Vital Essence',
        desc: '+2.5% Regeneration',
      },
      evolution: {
        name: 'Staff of the Nature God',
        desc: 'Area of thorns around the hero, slows enemies and damages them over time',
      },
      third: {
        left: {
          name: 'Health Boost',
          desc: '+20% Beast received healing',
          preferred: true,
        },
        right: {
          name: 'Venomous Strike',
          desc: '-25% poison chance, dealing damage for 3s every 1s',
        },
      },
    },
    Paladin: {
      first: {
        left: {
          name: 'Mighty Strike',
          desc: '+10% Damage',
        },
        right: {
          name: 'Swift Swing',
          desc: '-2.5% Cooldown',
          preferred: true,
        },
      },
      second: {
        left: {
          name: 'Big Strikes',
          desc: '+10% Area',
          preferred: true,
        },
        right: {
          name: 'Earthquake',
          desc: '+2 Projectiles',
        },
      },
      global: {
        name: 'Crushing Power',
        desc: '+2.5% Damage',
      },
      evolution: {
        name: "Tyr's Hammer",
        desc: 'Creates random lightnings on the map',
      },
      third: {
        left: {
          name: "Tyr's Scorcher",
          desc: '25% Burn',
        },
        right: {
          name: 'Slowing Shock',
          desc: '50% Stun',
          preferred: true,
        },
      },
    },
    Reaper: {
      first: {
        left: {
          name: 'Wide Cuts',
          desc: '+10% Area',
          preferred: true,
        },
        right: {
          name: 'Deep Cuts',
          desc: '25% Bleed',
        },
      },
      second: {
        left: {
          name: 'Fast Cuts',
          desc: '-2.5% Cooldown',
          preferred: true,
        },
        right: {
          name: 'Open Wounds',
          desc: '20% Bleed Damage',
        },
      },
      global: {
        name: 'Fear of Death',
        desc: '-1% Cooldown',
      },
      evolution: {
        name: 'Soul Harvester',
        desc: "Spin an additional blade, collecting enemies' souls",
      },
      third: {
        left: {
          name: 'Crippling Spiral',
          desc: '50% Slow',
          preferred: true,
        },
        right: {
          name: 'Bloody Spiral',
          desc: '25% Bleed',
        },
      },
    },
    'Pirate Queen': {
      first: {
        left: {
          name: 'Extra Rounds',
          desc: '+2 Projectiles',
          preferred: true,
        },
        right: {
          name: 'Fast Rounds',
          desc: '+10% Proj Speed',
        },
      },
      second: {
        left: {
          name: 'Machine Gun',
          desc: '+2 Projectiles',
        },
        right: {
          name: 'Quickdraw',
          desc: '-2.5% Cooldown',
          preferred: true,
        },
      },
      global: {
        name: 'Chant of Speed',
        desc: '-1% Cooldown',
      },
      evolution: {
        name: 'Handcannons',
        desc: 'Handcannons shoot explosive bullets',
      },
      third: {
        left: {
          name: 'Ricochet',
          desc: '+10% Duration',
        },
        right: {
          name: 'Big Guns',
          desc: '+10% Proj Speed',
          preferred: true,
        },
      },
    },
    Warlock: {
      first: {
        left: {
          name: 'Cursed Swarm',
          desc: 'Demon staff projectiles home into cursed enemies',
          preferred: true,
        },
        right: {
          name: 'Bat Barrage',
          desc: '+2 Projectiles',
        },
      },
      second: {
        left: {
          name: 'Demonic Frenzy',
          desc: 'TLDR: Extra Projectiles',
          preferred: true,
        },
        right: {
          name: 'Shadowy Shroud',
          desc: '+10% Area of Effect',
        },
      },
      global: {
        name: 'Mystic Duality',
        desc: '+3% Chance to double Magical Projectiles',
      },
      evolution: {
        name: 'Hellgate Staff',
        desc: 'Opens a portal randomly on the map that will free beasts',
      },
      third: {
        left: {
          name: 'Portal Surge',
          desc: '+1 Portal',
          preferred: true,
        },
        right: {
          name: 'Beastly Curse',
          desc: 'Beasts curse enemies they pass through',
        },
      },
    },
    Barbarian: {
      first: {
        left: {
          name: 'Fierce Strike',
          desc: '+10% Damage',
        },
        right: {
          name: 'Swift Exectution',
          desc: '-2.5% Cooldown',
          preferred: true,
        },
      },
      second: {
        left: {
          name: 'Torrential Assault',
          desc: '+2 Projectiles',
        },
        right: {
          name: 'Wild Rampage',
          desc: '+4 Rage',
          preferred: true,
        },
      },
      global: {
        name: 'Extended Rage',
        desc: 'Rage effect duration increased by +5%',
      },
      evolution: {
        name: 'Wolf Teeth',
        desc: 'Every other strike with the axes, ghost wolves appear, damaging enemies they pass through',
      },
      third: {
        left: {
          name: "Wolf's Grasp",
          desc: 'Wolves 50% Slow',
          preferred: true,
        },
        right: {
          name: 'Bloody Fang',
          desc: 'Wolves 50% Bleed',
        },
      },
    },
    'Big Game Hunter': {
      first: {
        left: {
          name: 'Strong Shots',
          desc: '+10% Damage',
        },
        right: {
          name: 'Pellets',
          desc: '+2 Projectiles',
          preferred: true,
        },
      },
      second: {
        left: {
          name: 'Toxin Bullets',
          desc: '25% Poison Chance',
        },
        right: {
          name: 'Kickback',
          desc: '+10% Pushback',
          preferred: true,
        },
      },
      global: {
        name: 'Hunter Training',
        desc: '+5% Damage to elites and bosses',
      },
      evolution: {
        name: 'Flying Friends',
        desc: 'Birds appear, swoop down on the strongest enemies, attacking everything in their path',
      },
      third: {
        left: {
          name: 'Deer Stand',
          desc: 'Increased dead zone area by +200%',
          preferred: true,
        },
        right: {
          name: 'Bear Trap',
          desc: 'Dead zone attacks stun for 1s',
        },
      },
    },
    'Clockwork Mage': {
      first: {
        left: {
          name: 'Time Strike',
          desc: '+10% Damage',
        },
        right: {
          name: 'Temporal Rush',
          desc: '-2.5% Cooldown',
          preferred: true,
        },
      },
      second: {
        left: {
          name: 'Chrono Wave',
          desc: '+10% Area of Effect',
          preferred: true,
        },
        right: {
          name: 'Extra Disc',
          desc: '+1 Projectile',
        },
      },
      global: {
        name: 'Temporal Impact',
        desc: '+5% Damage to slowed enemies',
      },
      evolution: {
        name: 'Chrono Blades',
        desc: 'Sharp, devastating projectiles. Additional blade flying around',
      },
      third: {
        left: {
          name: 'Saw Blade',
          desc: 'Blade has 50% Bleed Chance',
        },
        right: {
          name: 'Heavy Frisbee',
          desc: 'Blade size +50%',
          preferred: true,
        },
      },
    },
    Monk: {
      first: {
        left: {
          name: 'Air Strike',
          desc: '+1 Projectile',
        },
        right: {
          name: 'Air Bender',
          desc: '+10% Area of Effect',
          preferred: true,
        },
      },
      second: {
        left: {
          name: 'Gale Force',
          desc: '+10% Pushback',
          preferred: true,
        },
        right: {
          name: 'Power Boost',
          desc: '+10% Damage',
        },
      },
      global: {
        name: 'Wind Force',
        desc: '-1% Cooldown',
      },
      evolution: {
        name: 'War Staff',
        desc: 'Airwaves bounce back from the edges of the screen',
      },
      third: {
        left: {
          name: 'Eternal Gust',
          desc: '+30% Effect Duration',
        },
        right: {
          name: 'Wind Mastery',
          desc: '+30% Projectile Speed',
          preferred: true,
        },
      },
    },
    'Tide Warden': {
      first: {
        left: {
          name: 'Aqua Tempo',
          desc: '-2.5% Cooldown',
          preferred: true,
        },
        right: {
          name: 'Tidal Zone',
          desc: '+10% Area of Effect',
        },
      },
      second: {
        left: {
          name: 'Aqua Spray',
          desc: '+1 Projectile',
          preferred: true,
        },
        right: {
          name: 'Water Destruction',
          desc: '+10% Damage',
        },
      },
      global: {
        name: 'Eternal Wave',
        desc: '+2.5% Effect Duration',
      },
      evolution: {
        name: 'Coral Trident',
        desc: 'Waves that create the ebb and flood',
      },
      third: {
        left: {
          name: 'Icy Waters',
          desc: '+25% Dmg to Frozen enemies',
        },
        right: {
          name: 'Torrential Strike',
          desc: '+10% Dmg to Slowed enemies',
          preferred: true,
        },
      },
    },
    Assassin: {
      first: {
        left: {
          name: 'Nimble Assault',
          desc: '-2.5% Cooldown',
          preferred: true,
        },
        right: {
          name: 'Venom Whirl',
          desc: '+10% AoE',
        },
      },
      second: {
        left: {
          name: 'Projectile Mastery',
          desc: '3% chance to double projectiles',
        },
        right: {
          name: 'Bleedy Buff',
          desc: '+5% Dmg to bleeding foes (multiplicative) ',
          preferred: true,
        },
      },
      global: {
        name: 'Shadow Strike',
        desc: '1.1x Dmg',
      },
      evolution: {
        name: 'Chakram',
        desc: 'A huge Chakram starts flying around killing enemies',
      },
      third: {
        left: {
          name: 'Extra Chakram',
          desc: 'Get an additional Chakram',
          preferred: true,
        },
        right: {
          name: 'Sharp Chakram',
          desc: '50% chance to inflict bleed for 2s every 0.5s for 100% weapon dmg',
        },
      },
    },
    'Frost Queen': unknown,
    Oracle: unknown,
    'Santa Claus': unknown,
    'Dragon Empress': unknown,
    Artificer: unknown,
    'Dark Paladin': unknown,
    Leprechaun: unknown,
    'Rocket Pilot': unknown,
  },
  standard: {
    Crossbow: {
      first: {
        left: {
          name: 'Fast Shots',
          desc: '+10% Proj Speed',
          preferred: true,
        },
        right: {
          name: 'Long Shots',
          desc: '+10% Duration',
        },
      },
      second: {
        left: {
          name: 'Fire Arrows',
          desc: '+10% Burn Chance',
        },
        right: {
          name: 'Frost Arrows',
          desc: '+2.5% Freeze Chance',
          preferred: true,
        },
      },
      global: {
        name: 'Reinforced Grips',
        desc: '+2.5% Projectile Speed',
      },
      evolution: {
        name: 'Twin Wing',
        desc: 'The Crosswing gets an additional Projectile',
      },
      third: {
        left: {
          name: 'Sleek Wing',
          desc: '+25% Proj Speed',
          preferred: true,
        },
        right: {
          name: 'Sharp Wing',
          desc: '+10% Damage',
        },
      },
    },
    'Fire Orb': {
      first: {
        left: {
          name: 'Orb Frenzy',
          desc: '+2 Projectiles',
        },
        right: {
          name: 'Big Orbs',
          desc: '+10% Area',
          preferred: true,
        },
      },
      second: {
        left: {
          name: 'Incendiary',
          desc: '10% Burn Chance',
        },
        right: {
          name: 'Bigger Orbs',
          desc: '+10% Area',
          preferred: true,
        },
      },
      global: {
        name: 'Strong Ember',
        desc: '+2.5% Effect Duration',
      },
      evolution: {
        name: 'Pyro Spiral',
        desc: 'Creates an inner ring doing 100% more damage',
      },
      third: {
        left: {
          name: 'Inferno',
          desc: '+100% Status Duration',
        },
        right: {
          name: 'Blaze',
          desc: '+20% Area',
          preferred: true,
        },
      },
    },
    Bomb: {
      first: {
        left: {
          name: 'Ammunition Box',
          desc: '+2 Projectiles',
        },
        right: {
          name: 'Blackpowder',
          desc: '+10% Area',
          preferred: true,
        },
      },
      second: {
        left: {
          name: 'Stun Bomb',
          desc: '20% Stun Chance',
        },
        right: {
          name: 'Mega Burst',
          desc: '+10% Area',
          preferred: true,
        },
      },
      global: {
        name: 'Amplify',
        desc: '+2.5% Area',
      },
      evolution: {
        name: 'Firebrand Rocket',
        desc: 'Leave a burning area on the ground',
      },
      third: {
        left: {
          name: 'Quick Reload',
          desc: '-5% Cooldown',
        },
        right: {
          name: 'Mass Destruction',
          desc: '+10% Area',
          preferred: true,
        },
      },
    },
    'Divine Aura': {
      first: {
        left: {
          name: 'Heavenly Horizon',
          desc: '+10% Area',
          preferred: true,
        },
        right: {
          name: 'Sacred Path',
          desc: '+20% Pushback',
        },
      },
      second: {
        left: {
          name: 'Stun Radiance',
          desc: '5% Stun Chance',
          preferred: true,
        },
        right: {
          name: 'Holy Fire',
          desc: '15% Burn',
        },
      },
      global: {
        name: 'Heavenly Force',
        desc: '10% Pushback',
      },
      evolution: {
        name: "Vampire's Grasp",
        desc: 'Enemies hit by the weapon are slowed by 20%',
      },
      third: {
        left: {
          name: 'Bloodmoon',
          desc: '+30% Regeneration',
          preferred: true,
        },
        right: {
          name: 'Swift Shadows',
          desc: '-5% Cooldown',
        },
      },
    },
    Boomerang: {
      first: {
        left: {
          name: 'Storming Blades',
          desc: '+2 Projectiles',
          preferred: true,
        },
        right: {
          name: 'Precision Spin',
          desc: '+5% Crit Chance',
        },
      },
      second: {
        left: {
          name: 'Stunning Impact',
          desc: '20% Stun',
          preferred: true,
        },
        right: {
          name: 'Whirling Blades',
          desc: 'Size Increased',
        },
      },
      global: {
        name: 'Dual Returns',
        desc: '+3% Double Physical Projectiles',
      },
      evolution: {
        name: 'Fiery Whirlwind',
        desc: 'Herorang leaves a circular burning ring around the hero',
      },
      third: {
        left: {
          name: 'Knockback',
          desc: 'Pushback',
          preferred: true,
        },
        right: {
          name: 'Massive Destruction ',
          desc: '+4 Projectiles',
        },
      },
    },
    'Arcane Staff': {
      first: {
        left: {
          name: 'Lasting Power ',
          desc: '+10% Effect Duration',
        },
        right: {
          name: 'Mighty Burst',
          desc: '10% Damage',
          preferred: true,
        },
      },
      second: {
        left: {
          name: 'Fiery Inferno',
          desc: '25% Burn',
        },
        right: {
          name: 'Additional Flares',
          desc: '+2 Projectiles',
          preferred: true,
        },
      },
      global: {
        name: 'Prolonged Flame',
        desc: '+2.5% Effect Duration',
      },
      evolution: {
        name: 'Fiery Inferno',
        desc: 'Enemies are slowed by 90% while Death Ray is locked on them',
      },
      third: {
        left: {
          name: 'Scorching Fury',
          desc: '+20% Damage to Burn',
          preferred: true,
        },
        right: {
          name: 'Swift Recharge',
          desc: '-5% Cooldown',
        },
      },
    },
    'Ice Wand': {
      first: {
        left: {
          name: 'Frostbolt ',
          desc: '+1 Projectiles',
        },
        right: {
          name: 'Quick Freeze',
          desc: '-2.5% Cooldown',
          preferred: true,
        },
      },
      second: {
        left: {
          name: 'Frostbolt 2',
          desc: '+1 Projectiles',
          preferred: true,
        },
        right: {
          name: 'Enduring Chill ',
          desc: '+20% Status Duration',
        },
      },
      global: {
        name: 'Frozen Fury',
        desc: '+5% Frozen Damage',
      },
      evolution: {
        name: 'Piercing Ice',
        desc: '+1 Penetration',
      },
      third: {
        left: {
          name: 'Ice Barrage',
          desc: '+2 Projectiles',
          preferred: true,
        },
        right: {
          name: 'Eternal Frost ',
          desc: '+20% Status Duration',
        },
      },
    },
    Hammer: {
      first: {
        left: {
          name: 'Powerful Blow',
          desc: '+10% Damage',
        },
        right: {
          name: 'Quick Strike',
          desc: '-2.5% Cooldown',
          preferred: true,
        },
      },
      second: {
        left: {
          name: 'Hammer Time',
          desc: 'Size Increase',
        },
        right: {
          name: 'Toolbox',
          desc: '+2 Projectiles',
          preferred: true,
        },
      },
      global: {
        name: 'Devasting Force',
        desc: '+2.5% Damage',
      },
      evolution: {
        name: 'Hammer Force',
        desc: '+20% Pushback',
      },
      third: {
        left: {
          name: 'Rapid Assault',
          desc: '-5% Cooldown',
          preferred: true,
        },
        right: {
          name: 'Massive Impact ',
          desc: '10% Stun',
        },
      },
    },
    'Chain Lightning': {
      first: {
        left: {
          name: 'High Voltage',
          desc: '+10% Duration',
        },
        right: {
          name: 'Zapdash',
          desc: '+10% Proj Spd',
          preferred: true,
        },
      },
      second: {
        left: {
          name: 'Blazebolt',
          desc: '10% Burn Chance',
        },
        right: {
          name: 'Overload',
          desc: '+10% Damage',
          preferred: true,
        },
      },
      global: {
        name: 'Lightspeed',
        desc: '+2.5% Effect Duration',
      },
      evolution: {
        name: 'Chain Stability',
        desc: 'Reduces damage reduction between jumps',
      },
      third: {
        left: {
          name: 'Shocker',
          desc: '+50% Status Duration',
        },
        right: {
          name: 'Electric Surge',
          desc: '+2 Projectiles',
          preferred: true,
        },
      },
    },
    "Dragon's Breath": {
      first: {
        left: {
          name: 'Hot Wind',
          desc: '+10% Damage',
        },
        right: {
          name: "Dragon's Blaze",
          desc: '+10% Area',
          preferred: true,
        },
      },
      second: {
        left: {
          name: "Dragon's Ignition",
          desc: '25% Burn',
        },
        right: {
          name: 'Long Wind',
          desc: '10% Effect Duration',
          preferred: true,
        },
      },
      global: {
        name: 'Fire Vulnerability',
        desc: '+5% Damage to Burn',
      },
      evolution: {
        name: 'Dragon Destruction',
        desc: "Dragon's Inferno leaves a burning area behind",
      },
      third: {
        left: {
          name: 'Endless Flames',
          desc: '+20% Status Duration',
        },
        right: {
          name: 'Eternal Inferno',
          desc: '10% Effect Duration',
          preferred: true,
        },
      },
    },
    'Poison Dart': {
      first: {
        left: {
          name: 'Secret Pocket',
          desc: '+2 Projectiles',
        },
        right: {
          name: 'Rear Damage',
          desc: 'All darts Shoot Backward',
          preferred: true,
        },
      },
      second: {
        left: {
          name: 'Front Damage',
          desc: 'All darts Shoot Front',
        },
        right: {
          name: 'Big Darts',
          desc: 'Size Increase',
          preferred: true,
        },
      },
      global: {
        name: 'Strong Venom',
        desc: '+5% Status Duration',
      },
      evolution: {
        name: 'Venomous Stasis',
        desc: 'Enemies hit by the weapon are slowed by 25%',
      },
      third: {
        left: {
          name: 'Improved Formula',
          desc: '+50% Status Duration',
        },
        right: {
          name: 'Toxic Outbreak',
          desc: '+2 Projectiles',
          preferred: true,
        },
      },
    },
  },
}

export default function WeaponForge({ classification, forge }: { classification: string; forge: string }): JSX.Element {
  const { first, second, third, global, evolution } = data[classification][forge]
  return (
    <div style={{ widows: '100%' }}>
      <table>
        <th style={{ width: '4%' }}></th>
        <th>Stage</th>
        <th style={{ width: '40%' }}>Left</th>
        <th style={{ width: '40%' }}>Right</th>
        <ChoiceRows choice="First Choice" row={first} />
        <ChoiceRows choice="Second Choice" row={second} />
        <MergedRow name="Global Buff" row={global} />
        <MergedRow name="Evolution" row={evolution} />
        <ChoiceRows choice="Third Choice" row={third} />
      </table>
    </div>
  )
}

function ChoiceRows({ choice, row }: { choice: string; row: ColumnType }) {
  const left: CSSProperties = row.left.preferred
    ? { textAlign: 'center', backgroundColor: '#08088a42' }
    : { textAlign: 'center' }
  const right: CSSProperties = row.right.preferred
    ? { textAlign: 'center', backgroundColor: '#08088a42' }
    : { textAlign: 'center' }
  return (
    <>
      <tr>
        <td rowSpan={2}></td>
        <td rowSpan={2}>{choice}</td>
        <td style={{ ...left }}>{row.left.name}</td>
        <td style={{ ...right }}>{row.right.name}</td>
      </tr>
      <tr>
        <td style={{ ...left }}>{row.left.desc}</td>
        <td style={{ ...right }}>{row.right.desc}</td>
      </tr>
    </>
  )
}

function MergedRow({ name, row }: { name: string; row: ChoiceType }) {
  return (
    <>
      <tr>
        <td rowSpan={2}></td>
        <td rowSpan={2}>{name}</td>
        <td style={{ textAlign: 'center' }} colSpan={2}>
          {row.name}
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }} colSpan={2}>
          {row.desc}
        </td>
      </tr>
    </>
  )
}
