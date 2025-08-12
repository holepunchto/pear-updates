'use strict'
const messages = require('pear-messages')
module.exports = function updates (listener) {
  const ipc = global.Pear?.[global.Pear?.constructor.IPC]
  if (!ipc) throw new Error('pear-updates is designed for Pear - IPC missing')
  return messages({ type: 'pear/updates' }, listener)
}
