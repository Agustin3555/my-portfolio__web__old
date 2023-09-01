import * as NodeStyled from './Node.styled'
import { LevelBar, TechnologyNode } from '../../..'

export const Node = ({ dataNode }: { dataNode: TechnologyNode }) => {
  return (
    <NodeStyled.Component>
      <div className="technology">
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
        <LevelBar
          key={dataNode.names.join()}
          segments={3}
          value={dataNode.skillLevel + 1}
          showLevel={false}
        />
      </div>
      {dataNode.technologies && (
        <ul className="child-tech">
          {dataNode.technologies?.map((item, index) => (
            <li key={item.names.join()} className="item">
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
