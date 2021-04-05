import { test } from 'uvu'
import assert from 'assert'
import { hyper } from '../src/index.js'

export const searchFindTest = fetch => {
  fetch.post('http://localhost:6363/search/app/_query', {
    status: 200,
    body: { ok: true, matches: [] }
  })

  test('find document using search', async () => {
    const result = await hyper().search('movie').find('Kong')
    assert.ok(result.ok)
  })
}

