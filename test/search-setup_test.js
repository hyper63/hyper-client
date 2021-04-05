import { test } from 'uvu'
import assert from 'assert'
import { hyper } from '../src/index.js'

export const setupSearchTest = fetch => {

  fetch.put('http://localhost:6363/search/app', { status: 201, body: {ok: true }})

  test('create search index', async () => {
    const result = await hyper().setup.search.init(['title', 'year'])
    assert.ok(result.ok)
  })
}
