import { createConnection } from '../core/database';

const table = "user";

export default {
  create: (payload) => {
    const qSql = `INSERT INTO ${table} (full_name, email, phone, first_name, last_name, password) VALUES (?, ?, ?, ?, ?, ?) ;`;

    console.log("[MODELS]User ~ create ~ qSql", qSql);
    console.log("[MODELS]User ~ create ~ payload", payload);

    return new Promise((resolve, reject) => {
      const db = createConnection();

      db.query(qSql, payload, (err) => {
        if (err) {
          reject(err);
        }

        resolve(true);
        db.end();
      });
    });
  },
  update: (payload) => {
    const qSql = `UPDATE ${table} SET full_name=?, email=?, phone=?, first_name=?, last_name=? WHERE id=? ;`;

    console.log("[MODELS]User ~ update ~ qSql", qSql);
    console.log("[MODELS]User ~ update ~ payload", payload);

    return new Promise((resolve, reject) => {
      const db = createConnection();

      db.query(qSql, payload, (err) => {
        if (err) {
          reject(err);
        }

        resolve(true);
        db.end();
      });
    });
  },
  updateStatus: (payload) => {
    const qSql = `UPDATE ${table} SET is_active=? WHERE id=? ;`;

    console.log("[MODELS]User ~ updateStatus ~ qSql", qSql);
    console.log("[MODELS]User ~ updateStatus ~ payload", payload);

    return new Promise((resolve, reject) => {
      const db = createConnection();

      db.query(qSql, payload, (err) => {
        if (err) {
          reject(err);
        }

        resolve(true);
        db.end();
      });
    });
  },
  updatePasswordByEmail: (payload) => {
    const qSql = `UPDATE ${table} SET password=? WHERE email=? ;`;

    console.log("[MODELS]User ~ updatePassword ~ qSql", qSql);
    console.log("[MODELS]User ~ updatePassword ~ payload", payload);

    return new Promise((resolve, reject) => {
      const db = createConnection();

      db.query(qSql, payload, (err) => {
        if (err) {
          reject(err);
        }

        resolve(true);
        db.end();
      });
    });
  },
  updatePassword: (payload) => {
    const qSql = `UPDATE ${table} SET password=? WHERE id=? ;`;

    console.log("[MODELS]User ~ updatePassword ~ qSql", qSql);
    console.log("[MODELS]User ~ updatePassword ~ payload", payload);

    return new Promise((resolve, reject) => {
      const db = createConnection();

      db.query(qSql, payload, (err) => {
        if (err) {
          reject(err);
        }

        resolve(true);
        db.end();
      });
    });
  },
  findByEmail: (payload, isActiveUser) => {
    let qSql = `SELECT id, full_name, email, phone, first_name, last_name, password FROM ${table} WHERE email IN (?) AND deleted_at IS NULL`;

    if(isActiveUser) {
      qSql = qSql + ' AND is_active=1 '
    }

    console.log("[MODELS]User ~ findByEmail ~ qSql", qSql);
    console.log("[MODELS]User ~ findByEmail ~ payload", payload);

    return new Promise((resolve, reject) => {
      const db = createConnection();

      db.query(qSql, [payload.email], (err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      });

      db.end();
    });
  },
  getById: (payload) => {
    const qSql = `SELECT id, full_name, email, phone, first_name, last_name, is_active, picture_url FROM ${table} WHERE id=?`;

    console.log("[MODELS]User ~ getById ~ qSql", qSql);
    console.log("[MODELS]User ~ getById ~ payload", payload);

    return new Promise((resolve, reject) => {
      const db = createConnection();

      db.query(qSql, payload, (err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data[0]);
      });

      db.end();
    });
  },
  getAll: (payload) => {
    const qSql = `SELECT id, full_name, first_name, last_name, email, phone, is_active, picture_url FROM ${table} WHERE deleted_at IS NULL ${payload.keyword && `AND full_name LIKE '%${payload.keyword}%' OR email LIKE '%${payload.keyword}%' OR phone LIKE '%${payload.keyword}%'`} ORDER BY created_at DESC ${payload.limit ? 'LIMIT ?' : ''} ${payload.limit ? 'OFFSET ?' : ''}`;

    console.log("[MODELS]User ~ getAll ~ qSql", qSql);
    console.log("[MODELS]User ~ getAll ~ payload", payload);

    return new Promise((resolve, reject) => {
      const db = createConnection();

      db.query(qSql, [payload.limit, payload.offset], (err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data);
      });

      db.end();
    });
  },
  getTotalRows: () => {
    const qSql = `SELECT COUNT(id) FROM ${table} WHERE deleted_at IS NULL`;

    console.log("[MODELS]User ~ getTotalRows ~ qSql", qSql);

    return new Promise((resolve, reject) => {
      const db = createConnection();

      db.query(qSql, (err, data) => {
        if (err) {
          reject(err);
        }

        resolve(data[0]['COUNT(id)']);
      });

      db.end();
    });
  },
  delete: (payload) => {
    const qSql = `DELETE FROM ${table} WHERE id=?`;

    console.log("[MODELS]User ~ delete ~ qSql", qSql);
    console.log("[MODELS]User ~ delete ~ payload", payload);

    return new Promise((resolve, reject) => {
      const db = createConnection();

      db.query(qSql, payload, (err) => {
        if (err) {
          reject(err);
        }

        resolve(true);
      });

      db.end();
    });
  },
}

