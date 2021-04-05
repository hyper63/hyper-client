import { test } from 'uvu'
import assert from 'assert'
import { hyper } from '../src/index.js'

export const dataQueryTest = fetch => {

  fetch.post('http://localhost:6363/data/app/_query', { 
    status: 200, body: { id: '1', title: 'Ghostbusters'}})

  test('get movie', async () => {
    const h = hyper()
    const movie = await h.data('movie').query({
      type: 'movie',
      id: '1'
    })
    assert.equal(movie.title, 'Ghostbusters')
  })
}

