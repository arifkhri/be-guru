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
  db.createTable('employee', {
    id: { type: 'int', notNull: true, primaryKey: true, autoIncrement: true },
    full_name: 'varchar(255)',
    first_name: 'varchar(255)',
    last_name: 'varchar(255)',
    email: 'varchar(255)',
    phone: 'varchar(255)',
    nik: 'varchar(255)',
    is_active: {
      type: 'boolean',
      notNull: true,
      defaultValue: 1
    },
    picture_url: 'varchar(255)',
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
    position_id: {
      type: 'varchar(255)',
      notNull: true,
      foreignKey: {
        name: 'position_id_fk',
        table: 'position',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      }
    },
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
  db.dropTable('employee', [], callback);
  return null;
};

exports._meta = {
  "version": 1
};
