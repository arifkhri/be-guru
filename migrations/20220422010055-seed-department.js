'use strict';

// var dbm;
// var type;
// var seed;
const department = [
  "IT_Product",
  "People",
  "Finance",
  "Marketing",
  "Sales",
  "Customer",
  "Accounting"
]

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
// exports.setup = function (options, seedLink) {
//   dbm = options.dbmigrate;
//   type = dbm.dataType;
//   seed = seedLink;
// };

exports.up = function (db) {
  department.forEach((data) => {
    db.insert('department', {
      name: data, id: data.toLocaleLowerCase(),
    });
  })
  return null;
};

exports.down = function () {
  return null;
};

exports._meta = {
  "version": 1
};
