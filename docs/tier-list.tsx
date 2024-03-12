import useBaseUrl from '@docusaurus/useBaseUrl'
import { CSSProperties } from 'react'

type TierType = {
  [key: string]: HeroType
}
type HeroType = {
  [key: string]: string
}

const data: TierType = {
  'S+': {
    Barbarian: 'barbarian',
    Monk: 'monk',
  },
  S: {
    Reaper: 'reaper',
    'Clockwork Mage': 'clockwork-mage',
  },
  'A+': {
    Blademaster: 'blademaster',
  },
  A: {
    Knight: 'knight',
    Paladin: 'paladin',
    Oracle: 'oracle',
  },
  'B+': {
    Assassin: 'assassin',
    'Dark Paladin': 'dark-paladin',
  },
  B: {
    'Fire Wizard': 'fire-wizard',
    'Frost Wizard': 'frost-wizard',
    'Arcane Mage': 'arcane-mage',
    'Big Game Hunter': 'big-game-hunter',
    'Tide Warden': 'tide-warden',
    'Pirate Queen': 'pirate-queen',
  },
  'C+': {
    'Spirit Shaman': 'spirit-shaman',
    'Santa Claus': 'santa-claus',
  },
  C: {
    'Dark Ranger': 'dark-ranger',
    'Crazy Tinkerer': 'crazy-tinkerer',
    Warlock: 'warlock',
    'Dragon Empress': 'dragon-empress',
    Artificer: 'artificer',
  },
  D: {
    'Frost Queen': 'frost-queen',
  },
}

const rowHeader: CSSProperties = {
  textAlign: 'center',
  fontSize: '4rem',
  lineHeight: '7.5rem',
  borderStyle: 'solid',
  borderWidth: '3px',
  minWidth: '120px',
  height: '100%',
  alignSelf: 'center',
  marginRight: '4px',
  borderRadius: '6px',
}

export default function TierList(): JSX.Element {
  return (
    <div className="flex flex-col gap-1">
      {Object.entries(data).map(([grade, row], index) => (
        <div
          className={`flex flex-row gap-1 p-2 rounded-md bg-blue-${900 - index * 100} text-gray-${(index + 1) * 100}`}
          style={{ border: 'solid 1' }}
        >
          <div style={rowHeader}>{grade}</div>
          <div className="flex flex-row flex-wrap gap-1" style={{ border: 'solid 1' }}>
            {Object.entries(row).map(([hero, path]) => (
              <div className="flex flex-col items-center">
                <a href={useBaseUrl(`/docs/hero/${path}`)}>
                  <img
                    src={useBaseUrl(`/img/${path}.jpeg`)}
                    alt={hero}
                    style={{ maxWidth: '160px', objectFit: 'contain' }}
                  />
                </a>
                <h3 className="mb-0">{hero}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
