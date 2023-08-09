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
  db.createTable('agenda', {
    id: { type: 'int', notNull: true, primaryKey: true, autoIncrement: true },
    description: 'varchar(255)',
    user_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'user_id_fk',
        table: 'user',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      }
    },
    employee_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'employee_id_fk',
        table: 'employee',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      }
    },
    date: 'datetime',
    is_completed: {
      type: 'boolean',
      notNull: true,
      defaultValue: 0
    },
    is_active: {
      type: 'boolean',
      notNull: true,
      defaultValue: 1
    },
    remind_at: 'datetime',
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
  return null;
};

exports.down = function (db, callback) {
  db.dropTable('agenda', [], callback);
  return null;
};

exports._meta = {
  "version": 1
};
