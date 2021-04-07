import { test } from 'uvu'
import assert from 'assert'
import { hyper } from '../src/index.js'

export const dataPutTest = fetch => {

  fetch.put('http://localhost:6363/data/app/1', { status: 201, body: { ok: true}})

  test('get movie document', async () => {
    const h = hyper('hyperio://key:secret@localhost:6363/app')
    const result = await h.data('movie').put('1', { title: 'Ghostbusters', year: '1980'})
    assert.equal(result.ok, true)
  })
}

