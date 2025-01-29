import { Button } from "@workspace/ui/components/button"
import { database } from "@workspace/db"
import { countriesTable } from "@workspace/db/schema"


export default async function Page() {

  // const country: typeof countriesTable.$inferInsert = {
  //   name: 'John',
  // };

  // await database.insert(countriesTable).values(country);
  // console.log('New user created!')

  const users = await database.select().from(countriesTable);
  console.log('Getting all users from the database: ', users)

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
      </div>
    </div>
  )
}
