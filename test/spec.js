import expect from 'expect'
import * as actions from '../../wayd/App/actions/search'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const lat = '1'
    const lng = '4'
    const expectedAction = {
      type: 'LATLNG',
      latlong: '1,4'
    }
    expect(actions.latlngadd(lat,lng)).toEqual(expectedAction)
  })
})
