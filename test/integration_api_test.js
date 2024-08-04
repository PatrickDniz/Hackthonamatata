import { describe, it, assert } from 'poku'

describe('Testing API return (hackthonamatata-api)', () => {
  it('ONGs', async () => {
    const response = await fetch(`${process.env.APIHACKTHONAMATATA}ongs`)
    assert.ok(response, 'should return json-server mock of ongs')
  })

  it('CAMPAIGNS', async () => {
    const response = await fetch(`${process.env.APIHACKTHONAMATATA}campaigns`)
    assert.ok(response, 'should return json-server mock of campaigns')
  })

  it('VOLUNTEERS', async () => {
    const response = await fetch(`${process.env.APIHACKTHONAMATATA}volunteers`)
    assert.ok(response, 'should return json-server mock of volunteers')
  })

  it('POSTS', async () => {
    const response = await fetch(`${process.env.APIHACKTHONAMATATA}posts`)
    assert.ok(response, 'should return json-server mock of posts')
  })

  it('PROPERTIES', async () => {
    const response = await fetch(`${process.env.APIHACKTHONAMATATA}properties`)
    assert.ok(response, 'should return json-server mock of properties')
  })
})