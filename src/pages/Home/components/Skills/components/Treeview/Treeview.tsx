import * as TreeviewStyled from './Treeview.styled'
import { useChildAdjustment, useData } from '@/hooks'
import { Node } from './components'
import { useEffect, useMemo } from 'react'
import { GlassPanel } from '@/components'
import { NOT_FONT_SIZE } from '@/styles'

const Treeview = () => {
  const { pages } = useData()

  const { data } = useMemo(() => {
    const { data } = pages.home.sections.skills.subsections.technologies

    return { data }
  }, [])

  const { childRef: mainRef, childWidth: mainWidth } = useChildAdjustment()
  const { childRef: dRef, childWidth: dWidth } = useChildAdjustment()

  useEffect(() => {
    // console.log([mainWidth, dWidth].join(', '))

    if (mainWidth + 3 <= dWidth) {
      console.log('El scroll true')
    }
  }, [mainWidth, dWidth])

  return (
    <TreeviewStyled.Component ref={mainRef}>
      <div className="d" ref={dRef}>
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
      </div>
    </TreeviewStyled.Component>
  )
}

export default Treeview
