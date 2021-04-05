import { test } from 'uvu'
import assert from 'assert'
import { hyper } from '../src/index.js'

export const setupCacheTest = fetch => {

  fetch
    .put('http://localhost:6363/cache/app', { status: 201, body: {ok: true}})

  test('setup cache', async () => {
    const h = hyper()

    const res = await h.setup.cache.init()
    assert.ok(res.ok) 
  })
}

