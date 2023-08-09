'use strict';

// var dbm;
// var type;
// var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
// exports.setup = function(options, seedLink) {
//   dbm = options.dbmigrate;
//   type = dbm.dataType;
//   seed = seedLink;
// };

exports.up = function(db, callback) {
  db.createTable('department', {
    id: { type: 'varchar(255)', notNull: true, primaryKey: true },
    name: 'varchar(255)',
    deleted_at: 'datetime',
    created_at: {
      type: 'datetime',
      notNull: true,
      defaultValue: new String('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: 'datetime',
      notNull: true,
      rules: {
        onUpdate: new String('CURRENT_TIMESTAMP')
      },
      defaultValue: new String('CURRENT_TIMESTAMP')
    },
  }, callback)
  return null;
};

exports.down = function(db, callback) {
  db.dropTable('department', [], callback)
  return null;
};

exports._meta = {
  "version": 1
};
