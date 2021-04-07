import { test } from 'uvu'
import assert from 'assert'
import { hyper } from '../src/index.js'

export const dataDeleteTest = fetch => {
  fetch.delete('http://localhost:6363/data/app/1', { status: 201, body: { ok: true}})

  test('get movie document', async () => {
    const h = hyper('hyperio://key:secret@localhost:6363/app')
    const result = await h.data('movie').delete('1')
    assert.equal(result.ok, true)
  })
}

