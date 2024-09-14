import { drizzle } from 'drizzle-orm/neon-http';
import { migrate } from 'drizzle-orm/neon-http/migrator';
import { neon } from '@neondatabase/serverless';
import '@std/dotenv/load';

const sql = neon(Deno.env.get('DATABASE_URL') as string);

const db = drizzle(sql);

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: 'src/db/migrations',
    });
    console.log('Migrations successful ✅');
  } catch (error) {
    console.error(error);
    Deno.exit(1);
  }
};

main();
