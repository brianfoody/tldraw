import { TLDrawState } from '~state'
import { mockDocument } from '~state/test-helpers'

describe('Duplicate command', () => {
  const tlstate = new TLDrawState()
  tlstate.loadDocument(mockDocument)
  tlstate.select('rect1')

  it('does, undoes and redoes command', () => {
    expect(Object.keys(tlstate.getPage().shapes).length).toBe(3)

    tlstate.duplicate()

    expect(Object.keys(tlstate.getPage().shapes).length).toBe(4)

    tlstate.undo()

    expect(Object.keys(tlstate.getPage().shapes).length).toBe(3)

    tlstate.redo()

    expect(Object.keys(tlstate.getPage().shapes).length).toBe(4)
  })
})