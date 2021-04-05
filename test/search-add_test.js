import { test } from 'uvu'
import assert from 'assert'
import { hyper } from '../src/index.js'

export const searchAddTest = fetch => {
  fetch.post('http://localhost:6363/search/app', {
    status: 201,
    body: { ok: true }
  })
  test('add search doc', async () => {
    const result = await hyper().search('movie').add('1', { id: '1', title: 'Kong vs Godzilla'})
    assert.ok(result.ok)
  })
}

