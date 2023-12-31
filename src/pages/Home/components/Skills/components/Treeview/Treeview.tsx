import * as TreeviewStyled from './Treeview.styled'
import { useData } from '@/hooks'
import { Node } from './components'
import { useMemo } from 'react'
import { GlassPanel } from '@/components'
import { NOT_FONT_SIZE } from '@/styles'

const Treeview = () => {
  const { pages } = useData()

  const { data } = useMemo(() => {
    const { data } = pages.home.sections.skills.subsections.technologies

    return { data }
  }, [])

  return (
    <TreeviewStyled.Component>
      <GlassPanel
        style={{
          padding: NOT_FONT_SIZE.s,
          borderRadius: NOT_FONT_SIZE.xs,
          elevation: 2,
        }}
        handlingClass="glass-container"
      >
        <div className="items">
          {data.map(item => (
            <li key={item.names.join()}>
              <Node dataNode={item} />
            </li>
          ))}
        </div>
      </GlassPanel>
    </TreeviewStyled.Component>
  )
}

export default Treeview
