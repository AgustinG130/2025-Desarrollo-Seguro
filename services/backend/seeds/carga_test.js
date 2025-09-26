const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  const hashedPassword = await bcrypt.hash('password', SALT_ROUNDS);

  await knex('users').insert({
    id: 1,
    username: 'test',
    email: 'test@example.local',
    password: hashedPassword,
    first_name: 'Test',
    last_name: 'User',
    activated: true,
    reset_password_token: null,
    reset_password_expires: null,
    invite_token: null,
    invite_token_expires: null,
    picture_path: null
  });

  const hashedPassword2 = await bcrypt.hash('password', SALT_ROUNDS);

  await knex('users').insert({
    id: 2,
    username: 'prod',
    email: 'prod@example.local',
    password: hashedPassword2,
    first_name: 'Prod',
    last_name: 'User',
    activated: true,
    reset_password_token: null,
    reset_password_expires: null,
    invite_token: null,
    invite_token_expires: null,
    picture_path: null
  });

  await knex('invoices').insert([
    { id: 1, userId: 1, amount: 101.00, dueDate: new Date('2025-01-01'), status: 'unpaid' },
    { id: 2, userId: 1, amount: 102.00, dueDate: new Date('2025-01-01'), status: 'paid' },
    { id: 3, userId: 1, amount: 103.00, dueDate: new Date('2025-01-01'), status: 'paid' },
    { id: 4, userId: 2, amount: 99.00, dueDate: new Date('2025-01-01'), status: 'unpaid' }
  ]);
};
