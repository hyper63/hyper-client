import { test } from 'uvu'
import assert from 'assert'
import { hyper } from '../src/index.js'

export const cacheDeleteTest = fetch => {
  fetch.delete('http://localhost:6363/cache/app/movie-1', {
    status: 201,
    body: { ok: true }
  })

  test('delete cache key value', async () => {
    const res = await hyper().cache('movie').delete('1')
    assert.ok(res.ok)
  })

}
