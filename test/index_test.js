import { test } from 'uvu'
import fetchMock from 'fetch-mock'
import { configTest } from './config_test.js'
import { setupDataTest } from './setup-data_test.js'
import { setupCacheTest } from './cache-setup_test.js'
import { cacheGetTest } from './cache-get_test.js'
import { cacheSetTest } from './cache-set_test.js'
import { cacheDeleteTest } from './cache-delete_test.js'
import { dataDeleteTest } from './data-delete_test.js'
import { dataGetTest } from './data-get_test.js'
import { dataPostTest } from './data-post_test.js'
import { dataPutTest } from './data-put_test.js'
import { dataQueryTest } from './data-query_test.js'
import { searchAddTest } from './search-add_test.js'
import { searchFindTest } from './search-find_test.js'
import { searchGetTest } from './search-get_test.js'


const fetch = fetchMock.sandbox()
globalThis.fetch = fetch

configTest()

// cache Tests
setupCacheTest(fetch)
cacheGetTest(fetch)
cacheSetTest(fetch)
cacheDeleteTest(fetch)

// data Tests
setupDataTest(fetch)
dataGetTest(fetch)
dataPostTest(fetch)
dataPutTest(fetch)
dataQueryTest(fetch)
dataDeleteTest(fetch)

// search tests
// setupSearchTest(fetch)
searchAddTest(fetch)
searchFindTest(fetch)
searchGetTest(fetch)

test.run()

