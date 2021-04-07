import { test } from 'uvu'
import assert from 'assert'
import { hyper } from '../src/index.js'

export const cacheGetTest = fetch => {
  fetch.get('http://localhost:6363/cache/app/movie-1', { 
    status: 200, body: { title: 'Ghostbusters'}
  })

  test('get from cache', async () => {
    const h = hyper('http://key:secret@localhost:6363/app')
    const result = await h.cache('movie').get('1')
    assert.equal(result.title, 'Ghostbusters')
  })

}

