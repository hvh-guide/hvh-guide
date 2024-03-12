// You need 6 upgrades before you can promote a star rank

type ShardType = {
  maxHeroLevel: number
  maxSkillLevel: number
  totalShards: number
  shardCosts: number[]
}
type StarType = {
  [key: string]: ShardType
}
const data: StarType = {
  'No Stars': { maxHeroLevel: 60, maxSkillLevel: 1, totalShards: 0, shardCosts: [0, 0, 0, 0, 0, 0] },
  '1st Star': { maxHeroLevel: 80, maxSkillLevel: 1, totalShards: 10, shardCosts: [1, 1, 2, 2, 2, 2] },
  '2nd Star': { maxHeroLevel: 100, maxSkillLevel: 2, totalShards: 65, shardCosts: [4, 6, 8, 10, 12, 25] },
  '3rd Star': { maxHeroLevel: 125, maxSkillLevel: 3, totalShards: 30, shardCosts: [40, 40, 45, 45, 50, 80] },
  '4th Star': { maxHeroLevel: 150, maxSkillLevel: 4, totalShards: 85, shardCosts: [80, 100, 120, 150, 200, 200] },
}

const headers = ['Star Level', 'Max hero level', 'Max skill level', 'Total shards', 'Shard costs']
const subheaders = ['1st', '2nd', '3rd', '4th', '5th', '6th']

export default function StarCosts(): JSX.Element {
  return (
    <table>
      <tr>
        {headers.map((e, i) => (
          <th rowSpan={i < 4 ? 2 : 1} colSpan={i < 4 ? 1 : 6}>
            {e}
          </th>
        ))}
      </tr>
      <tr>
        {subheaders.map(e => (
          <th>{e}</th>
        ))}
      </tr>
      {Object.entries(data).map(([key, row]: [key: string, row: ShardType]) => (
        <tr key={key}>
          <td style={{ textAlign: 'right' }}>{key}</td>
          <td style={{ textAlign: 'right' }}>{row.maxHeroLevel}</td>
          <td style={{ textAlign: 'right' }}>{row.maxSkillLevel}</td>
          <td style={{ textAlign: 'right' }}>{row.totalShards || '-'}</td>
          {row.shardCosts.map((cost, index) => (
            <td key={`${key}-${index}`} style={{ textAlign: 'right' }}>
              {cost || '-'}
            </td>
          ))}
        </tr>
      ))}
    </table>
  )
}
