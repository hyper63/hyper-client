import { test } from 'uvu'
import assert from 'assert'
import { config } from '../src/config.js'

export const configTest = () => {
  test('config', () => {
    const c = config()
    assert.equal(c.url('data'), 'http://localhost:6363/data/app')
    assert.ok(c.token())
  })
}

