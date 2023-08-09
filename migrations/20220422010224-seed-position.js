'use strict';

// var dbm;
// var type;
// var seed;

const positions = [
  {
    departmentId: "people",
    name: "People Manager"
  },
  {
    departmentId: "people",
    name: "Legal & GA"
  },
  {
    departmentId: "people",
    name: "HR Supervisor"
  },
  {
    departmentId: "people",
    name: "HR Training"
  },
  {
    departmentId: "people",
    name: "GA"
  },
  {
    departmentId: "people",
    name: "HR Admin"
  },
  {
    departmentId: "it_product",
    name: "Backend Developer"
  },
  {
    departmentId: "it_product",
    name: "Frontend Developer"
  },
  {
    departmentId: "it_product",
    name: "Data Science"
  },
  {
    departmentId: "it_product",
    name: "UX Research"
  },
  {
    departmentId: "it_product",
    name: "Quality Assurance"
  },
  {
    departmentId: "it_product",
    name: "Design Illustrator"
  },
  {
    departmentId: "it_product",
    name: "Junior Machine Learning"
  },
  {
    departmentId: "it_product",
    name: "Design And Multimedia"
  },
  {
    departmentId: "it_product",
    name: "UX Writer"
  },
  {
    departmentId: "it_product",
    name: "Tech Lead"
  },
  {
    departmentId: "it_product",
    name: "Engineering Manager"
  },
  {
    departmentId: "it_product",
    name: "Head Of IT"
  },
  {
    departmentId: "it_product",
    name: "Head Of Product"
  },
  {
    departmentId: "it_product",
    name: "UI UX Designer"
  },
  {
    departmentId: "it_product",
    name: "UI UX Designer Lead"
  },
  {
    departmentId: "it_product",
    name: "Mobile Developer"
  },
  {
    departmentId: "it_product",
    name: "Scrum Master"
  },
  {
    departmentId: "it_product",
    name: "Technical Support"
  },
  {
    departmentId: "sales",
    name: "Sales"
  },
  {
    departmentId: "sales",
    name: "Sales B2B"
  },
  {
    departmentId: "sales",
    name: "Sales Soscum"
  },
  {
    departmentId: "sales",
    name: "Sales Support"
  },
  {
    departmentId: "sales",
    name: "Sales Admin"
  },
  {
    departmentId: "sales",
    name: "Sales Enterprise Manager"
  },
  {
    departmentId: "sales",
    name: "Head Of Sales Coorporate and Partnership"
  },
  {
    departmentId: "marketing",
    name: "Marketing Researcher"
  },
  {
    departmentId: "marketing",
    name: "Business Analyst"
  },
  {
    departmentId: "marketing",
    name: "Social Media Specialist"
  },
  {
    departmentId: "marketing",
    name: "Collection Specialist"
  },
  {
    departmentId: "it_product",
    name: "Content Writer"
  },
  {
    departmentId: "it_product",
    name: "Product Owner"
  },
  {
    departmentId: "it_product",
    name: "Product Manager"
  },
  {
    departmentId: "marketing",
    name: "Video Editor"
  },
  {
    departmentId: "marketing",
    name: "Design Graphic"
  },
  {
    departmentId: "accounting",
    name: "Accounting Manager"
  },
  {
    departmentId: "accounting",
    name: "Accounting"
  },
  {
    departmentId: "finance",
    name: "Finance Admin"
  },
  {
    departmentId: "finance",
    name: "Finance Senior Manager"
  },
  {
    departmentId: "finance",
    name: "COD Finance"
  },
  {
    departmentId: "finance",
    name: "Lead Finance"
  },
  {
    departmentId: "customer",
    name: "Customer Support"
  },
  {
    departmentId: "customer",
    name: "Customer Support Manager"
  },
  {
    departmentId: "customer",
    name: "Customer Relation Officer"
  },
];

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
  positions.forEach((data) => {
    db.insert('position', {
      department_id: data.departmentId, name: data.name, id: data.name.toLocaleLowerCase().replace(/\s/g, '_'),
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
