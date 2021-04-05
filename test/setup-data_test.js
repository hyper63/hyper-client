import { test } from 'uvu'
import assert from 'assert'
import { hyper } from '../src/index.js'

export const setupDataTest = fetch => {

  fetch
    .put('http://localhost:6363/data/app', { status: 201, body: {ok: true}})
    .post('http://localhost:6363/data/app/_index', {
      status: 201,
      body: { ok: true }
    })

  test('setup data', async () => {
    const h = hyper([
      { type: 'movie', validate: v => ({ success: true, data: v}) },
      { type: 'review' }
    ])

    await h.setup.data.init()
    await h.setup.data.createIndex({
      index: {
       fields: ['type']
      },
      name: 'idx-type',
      type: 'json'
    })
    
    const { success, data, error } = h.data('review').validate({title: 'Kong vs Godzilla'})
    assert.ok(success) 
  })
}

