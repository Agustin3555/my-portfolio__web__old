import { nodeStyleAdapter, StylizedNode } from './Node.styled'
import { useDarkMode } from '@/hooks'
import { Icon } from '@/components'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { FONT_SIZE, NOT_FONT_SIZE } from '@/styles'
import { GateNode, LevelBar, TechnologyNode } from '../../../components'

/**
 * Devuelve el nodo requerido
 * @param names
 * @param node
 * @returns
 */
const getNode = (
  names: string[],
  node: GateNode | GateNode[]
): GateNode | undefined => {
  if (Array.isArray(node)) {
    for (const item in node) {
      if (Object.prototype.hasOwnProperty.call(node, item)) {
        const element = node[item]

        const result = getNode(names, element)

        if (result) return result
      }
    }
  } else {
    if (node.id === names.join()) return node
    return node.nodes && getNode(names, node.nodes)
  }
}

/**
 * Incrementa el "counter" por cada nodo que esta siendo visualizado, incluyendo al nodo padre
 * requerido y sus hijos.
 * @param node
 * @param counter
 */
const visualizedNodes = (
  node: GateNode | GateNode[],
  counter: { value: number }
): void => {
  if (Array.isArray(node)) {
    for (const item in node) {
      if (Object.prototype.hasOwnProperty.call(node, item)) {
        const element = node[item]

        visualizedNodes(element, counter)
      }
    }
  } else {
    counter.value++

    if (node.nodes !== undefined && node.open) visualizedNodes(node.nodes, counter)
  }
}

/**
 * Alterna el boolean "open" del nodo requerido
 * @param names
 * @param node
 * @returns
 */
const updateNode = (names: string[], node: GateNode | GateNode[]) => {
  if (Array.isArray(node)) {
    for (const item in node) {
      if (Object.prototype.hasOwnProperty.call(node, item)) {
        const element = node[item]

        updateNode(names, element)
      }
    }
  } else {
    if (node.id === names.join()) {
      node.open = !node.open
      return
    }

    if (node.nodes) updateNode(names, node.nodes)
  }
}

export const Node = ({
  dataNode,
  treeGate,
  setTreeGate,
}: {
  dataNode: TechnologyNode
  treeGate: GateNode | GateNode[]
  setTreeGate: Dispatch<SetStateAction<GateNode | GateNode[]>>
}) => {
  const darkMode = useDarkMode()
  const [onIcon, setOnIcon] = useState(false)

  const toggleHandlerClick = useCallback(
    (names: string[]) => () =>
      setTreeGate(prevState => {
        const copy = structuredClone(prevState)

        updateNode(names, copy)

        return copy
      }),
    []
  )

  const calculateHeight = useCallback(
    (names: string[], nodes: GateNode | GateNode[]) => {
      const counter = { value: 0 }

      visualizedNodes(getNode(names, nodes) as GateNode, counter)

      return `calc(${counter.value} * 2.375rem + (${counter.value - 1} * ${
        NOT_FONT_SIZE['3xs']
      }))`
    },
    []
  )

  return (
    <StylizedNode
      p={nodeStyleAdapter(darkMode)}
      key={dataNode.names.join()}
      style={{ height: calculateHeight(dataNode.names, treeGate) }}
    >
      <div
        className="technology"
        onMouseEnter={() => setOnIcon(true)}
        onMouseLeave={() => setOnIcon(false)}
      >
        {dataNode.technologies && (
          <button className="toggle" onClick={toggleHandlerClick(dataNode.names)} />
        )}
        <div className="left-group">
          <div className="separate-part">
            {dataNode.technologies && (
              <div
                className="indicator-arrow"
                style={{
                  transform: getNode(dataNode.names, treeGate)?.open
                    ? 'rotate(90deg)'
                    : '',
                }}
              >
                <Icon
                  key={dataNode.names.join()}
                  iconName="fa-solid fa-chevron-right"
                  style={{ size: FONT_SIZE.s }}
                />
              </div>
            )}
            <div className="names">
              {dataNode.names.map((name, index) => (
                <>
                  <div className="name">{name}</div>
                  {index !== dataNode.names.length - 1 && (
                    <div className="separator" />
                  )}
                </>
              ))}
            </div>
          </div>
          <div className="icons">
            {dataNode.icons.map((icon, index) => (
              <>
                <img
                  className="icon"
                  style={{
                    filter: onIcon
                      ? undefined
                      : `grayscale(1) invert(0.${
                          (!darkMode && icon?.invertInBrightMode) ||
                          (darkMode && icon?.invertInDarkMode)
                            ? '75'
                            : '25'
                        })`,
                  }}
                  src={`/src/assets/${icon.fileName}`}
                  alt=""
                />
                {index !== dataNode.names.length - 1 && (
                  <div className="separator" />
                )}
              </>
            ))}
          </div>
        </div>
        <LevelBar
          key={dataNode.names.join()}
          segments={3}
          value={dataNode.skillLevel + 1}
          showLevel={false}
        />
      </div>
      {dataNode.technologies && (
        <div
          className="child-technologies"
          style={{
            opacity: getNode(dataNode.names, treeGate)?.open ? undefined : 0,
          }}
        >
          {dataNode.technologies?.map(item => (
            <div className="item">
              <div className="bullet-point">
                <div className="box" />
              </div>
              <Node
                key={item.names.join()}
                dataNode={item}
                treeGate={treeGate}
                setTreeGate={setTreeGate}
              />
            </div>
          ))}
        </div>
      )}
    </StylizedNode>
  )
}
