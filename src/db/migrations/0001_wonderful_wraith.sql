ALTER TABLE "comments" RENAME COLUMN "id)" TO "id";--> statement-breakpoint
ALTER TABLE "comments" RENAME COLUMN "user_id)" TO "user_id";--> statement-breakpoint
ALTER TABLE "comments" DROP CONSTRAINT "comments_user_id)_users_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comments" ADD CONSTRAINT "comments_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
