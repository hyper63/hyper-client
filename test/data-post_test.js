import { test } from 'uvu'
import assert from 'assert'
import { hyper } from '../src/index.js'

export const dataPostTest = fetch => {

  fetch.post('http://localhost:6363/data/app', { status: 201, body: {ok: true }})

  test('post', async () => {
    const h = hyper()
    const result = await h.data('movie').post({title: 'Ghostbusters'})
    assert.ok(result.ok)

  })
}

