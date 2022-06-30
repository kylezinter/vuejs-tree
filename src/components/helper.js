const disabledState = { expanded: 'expandable', checked: 'checkable', selected: 'selectable' }

// Recursive function to change node's state
export const recCallNodes = (state, event, nodes, pathIds = []) => {
  if (nodes === undefined) { return }

  const targetId = pathIds.shift()
  nodes.forEach((node) => {
    if (targetId !== undefined && targetId !== node.id) {
      return
    }
    const disabledStateKey = (disabledState)[event]
    if (targetId === node.id && pathIds.length === 0) {
      node.state[event] = state
      return
    } else if (disabledStateKey && node[disabledStateKey] !== false) {
      node.state[event] = state
    }
    recCallNodes(state, event, node.nodes, pathIds)
  })
}
