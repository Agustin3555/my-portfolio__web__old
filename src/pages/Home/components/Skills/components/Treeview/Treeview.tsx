import { StylizedTreeview } from './Treeview.styled'
import { useData } from '@/hooks'
import { Node } from './components/Node'
import { useState } from 'react'

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

export interface GateNode {
  id: string
  open?: boolean
  nodes?: GateNode[]
}

/**
 * Crea un arbol con nodos "GateNode" a partir de un arbol con nodos "TechnologyNode"
 * @param treeTechnology
 * @param treeGate
 * @returns
 */
const createTreeGate = (
  treeTechnology: TechnologyNode | TechnologyNode[],
  treeGate: GateNode | GateNode[]
) => {
  if (Array.isArray(treeTechnology)) {
    treeTechnology.forEach(item => {
      if (item)
        (treeGate as GateNode[]).push(createTreeGate(item, treeGate) as GateNode)
    })

    return treeGate
  }

  const newNode: GateNode = {
    id: treeTechnology.names.join(),
  }

  if (treeTechnology.technologies) {
    newNode.open = true
    newNode.nodes = createTreeGate(treeTechnology.technologies, []) as GateNode[]
  }

  return newNode
}

export const Treeview = () => {
  const { data } = useData().pages.home.sections.skills.subsections.technologies
  const [treeGate, setTreeGate] = useState(() => createTreeGate(data, []))

  return (
    <StylizedTreeview>
      {data.map(item => (
        <Node
          key={item.names.join()}
          dataNode={item}
          treeGate={treeGate}
          setTreeGate={setTreeGate}
        />
      ))}
    </StylizedTreeview>
  )
}
