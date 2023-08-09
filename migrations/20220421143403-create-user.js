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
  return db.createTable('user', {
    id: { type: 'int', notNull: true, primaryKey: true, autoIncrement: true },
    full_name: 'varchar(255)',
    first_name: 'varchar(255)',
    last_name: 'varchar(255)',
    email: 'varchar(255)',
    phone: 'varchar(255)',
    password: 'varchar(255)',
    is_active: {
      type: 'boolean',
      notNull: true,
      defaultValue: 1
    },
    picture_url: 'varchar(255)',
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
  }, callback);
};

exports.down = function(db, callback) {
  return db.dropTable('user', [], callback);
};

exports._meta = {
  "version": 1
};
