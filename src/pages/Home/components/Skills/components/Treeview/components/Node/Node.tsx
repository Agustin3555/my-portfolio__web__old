import * as NodeStyled from './Node.styled'
import { Separator } from '@/components'
import { COLOR, NOT_FONT_SIZE } from '@/styles'
import { useAppStore } from '@/store'

export interface DataNode {
  names: string[]
  icons: {
    fileName: string
    invertInBrightMode?: boolean
    invertInDarkMode?: boolean
  }[]
  skillLevel: number
  technologies?: DataNode[]
}

export const Node = ({ dataNode }: { dataNode: DataNode }) => {
  const selectedSkillLevels = useAppStore(store => store.selectedSkillLevels)

  return (
    <NodeStyled.Component>
      <div
        className="technology"
        data-show={selectedSkillLevels[dataNode.skillLevel]}
      >
        <div className="group">
          <div className="names">
            {dataNode.names.map((name, index) => (
              <>
                <div className="name" key={name}>
                  {name}
                </div>
                {index !== dataNode.names.length - 1 && (
                  <div className="separator" />
                )}
              </>
            ))}
          </div>
          <div className="icons">
            {dataNode.icons.map((icon, index) => (
              <>
                <img
                  className="icon"
                  data-invert-in-bright-mode={icon?.invertInBrightMode}
                  data-invert-in-dark-mode={icon?.invertInDarkMode}
                  src={`/src/assets/${icon.fileName}`}
                  alt={`Logo de ${dataNode.names[index]}`}
                  key={dataNode.names[index]}
                />
                {index !== dataNode.names.length - 1 && (
                  <div className="separator" />
                )}
              </>
            ))}
          </div>
        </div>
        <div className="level-bar">
          <div className="separators">
            {Array(2)
              .fill(undefined)
              .map((_, index) => (
                <Separator
                  style={{
                    long: NOT_FONT_SIZE['2xs'],
                    backgroundColor: { dark: COLOR.g_10 },
                  }}
                  key={index}
                />
              ))}
          </div>
          <div
            className="bar"
            style={{ width: `${((dataNode.skillLevel + 1) / 3) * 100}%` }}
          />
        </div>
      </div>
      {dataNode.technologies && (
        <ul className="child-tech">
          {dataNode.technologies?.map((item, index) => (
            <li className="item" key={item.names.join()}>
              <div className="child-group">
                <div className="bullet-point-container">
                  <div className="box" />
                  {index !== dataNode.technologies?.length - 1 && (
                    <div className="next-extension line" />
                  )}
                </div>
                <Node dataNode={item} />
              </div>
              {index !== dataNode.technologies?.length - 1 && (
                <div className="extension-container">
                  <div className="extension line" />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </NodeStyled.Component>
  )
}
