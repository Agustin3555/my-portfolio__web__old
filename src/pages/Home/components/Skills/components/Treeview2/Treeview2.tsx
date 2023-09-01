import * as TreeviewStyled from './Treeview2.styled'
import { useData } from '@/hooks'
import { Node } from './components'
import { useMemo } from 'react'

export interface TechnologyNode {
  names: string[]
  icons: {
    fileName: string
    invertInBrightMode?: boolean
    invertInDarkMode?: boolean
  }[]
  skillLevel: number
  technologies?: TechnologyNode[]
}

const Treeview2 = () => {
  const { pages } = useData()

  const { data } = useMemo(() => {
    const { data } = pages.home.sections.skills.subsections.technologies

    return { data }
  }, [])

  return (
    <TreeviewStyled.Component>
      {data.map(item => (
        <li key={item.names.join()}>
          <Node dataNode={item} />
        </li>
      ))}
    </TreeviewStyled.Component>
  )
}

export default Treeview2
