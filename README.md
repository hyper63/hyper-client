# README

<h1 align="center">hyper-client</h1>
<p align="center">hyper-client is a client library for the hyper service. This client library gives developers a great developer experience when using the hyper service. Check out the examples!</p>
<p align="center">
  <img src="https://github.com/hyper63/hyper-client/workflows/.github/workflows/test.yml/badge.svg" />
</p>

---

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Setup](#setup)
- [Data Service](#data-service)
- [Cache Service](#cache-service)
- [Search Service](#search-service)
- [Storage Service](#storage-service)
- [Queue Service](#queue-service)

## Getting Started

In order to use this client, you will need a hyper connection string, this connection string will consist of a key, secret, server and app. For example, a connection string may look like this:

https://key:secret@cloud.hyper.io/app - this connection string gives the hyper client all of the information it needs in order to successfully connect to the hyper services.

* key/secret pair - secures the connection
* origin - provides the server url
* pathname - provides the hyper app name

The hyper client expects this configuration to be available via the `HYPER` environment variable.
