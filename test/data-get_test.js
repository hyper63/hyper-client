import { test } from 'uvu'
import assert from 'assert'
import { hyper } from '../src/index.js'

export const dataGetTest = fetch => {

  fetch.get('http://localhost:6363/data/app/1', { 
    status: 200, body: { title: 'Ghostbusters'}})

  test('get movie document', async () => {
    const h = hyper('hyperio://key:secret@localhost:6363/app')
    const result = await h.data('movie').get('1')
    assert.equal(result.title, 'Ghostbusters')
  })
}
