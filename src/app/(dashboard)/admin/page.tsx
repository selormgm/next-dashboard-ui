import CountChart from "@/components/CountChat"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/*Left*/}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      {/* UserCards */}
      <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type="Admin" />
        <UserCard type="Student" />
        <UserCard type="Teacher" />
        <UserCard type="Stuff" />
      </div>
       {/*MiddleChart*/}
       <div className="flex gap-4 flex-col lg:flex-row">
        {/*CountChart*/}
        <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart />
        </div>
        {/*AttendanceChart*/}
        <div className="w-full lg:w-1/3 h-[450px]">

        </div>
       </div>

      {/*BottomChart*/}
      <div className="">

      </div>
      </div>
      {/*Right*/}
      <div className="w-full lg:w-1/3">right</div>
    </div>
  )
}

export default AdminPage
