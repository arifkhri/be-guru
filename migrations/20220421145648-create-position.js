'use strict';

// var dbm;
// var type;
// var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
// exports.setup = function (options, seedLink) {
//   dbm = options.dbmigrate;
//   type = dbm.dataType;
//   seed = seedLink;
// };

exports.up = function (db, callback) {
  db.createTable('position', {
    id: { type: 'varchar(255)', notNull: true, primaryKey: true },
    name: 'varchar(255)',
    deleted_at: 'datetime',
    department_id: {
      type: 'varchar(255)',
      notNull: true,
      foreignKey: {
        name: 'department_id_fk',
        table: 'department',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      }
    },
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

exports.down = function (db, callback) {
  db.dropTable('position', [], callback)
  return null
};

exports._meta = {
  "version": 1
};
