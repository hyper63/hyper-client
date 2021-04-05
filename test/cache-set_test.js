import { test } from 'uvu'
import assert from 'assert'
import { hyper } from '../src/index.js'

export const cacheSetTest = fetch => {
  fetch.post('http://localhost:6363/cache/app', { status: 201, body: {ok: true}})

  test('set movie in cache', async () => {
    const h = hyper()
    const result = await h.cache('movie').set('1', { id: '1', title: 'Ghostbusters'})
    assert.ok(result.ok)
  })
}

