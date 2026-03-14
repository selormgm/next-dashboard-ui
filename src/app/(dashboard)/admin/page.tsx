import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/*Left*/}
      <div className="w-full lg:w-2/3">
      {/* UserCards */}
      <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type="Admin" />
        <UserCard type="Student" />
        <UserCard type="Teacher" />
        <UserCard type="Stuff" />
      </div>

      </div>
      {/*Right*/}
      <div className="w-full lg:w-1/3">right</div>
    </div>
  )
}

export default AdminPage
