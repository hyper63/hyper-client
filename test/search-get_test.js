import { test } from 'uvu'
import assert from 'assert'
import { hyper } from '../src/index.js'

export const searchGetTest = fetch => {
  fetch.get('http://localhost:6363/search/app/movie-1', { status: 200, body: {
    type: 'movie',
    title: 'Kong vs Godzilla'
  }})

  test('get search doc', async () => {
    const h = hyper('hyperio://key:secret@localhost:6363/app')
    const result = await h.search('movie').get('1')
    assert.equal(result.title, 'Kong vs Godzilla')

  })


}
