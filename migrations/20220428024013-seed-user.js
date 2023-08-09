const bcrypt = require('bcrypt');
'use strict';

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
// exports.setup = function (options, seedLink) {
//   dbm = options.dbmigrate;
//   type = dbm.dataType;
//   seed = seedLink;
// };

exports.up = async function (db) {
  const encryptedPswd = await bcrypt.hash('p4Ssword@', 10);

  db.insert('user', {
    full_name: 'admin clodeo', 
    first_name: 'admin',
    last_name: 'clodeo',
    email: 'adminclodeo@getnada.com',
    phone: '0898898923',
    is_active: true,
    picture_url: '',
    password: encryptedPswd,
  })
  return null;
};

exports.down = function () {
  return null;
};

exports._meta = {
  "version": 1
};
