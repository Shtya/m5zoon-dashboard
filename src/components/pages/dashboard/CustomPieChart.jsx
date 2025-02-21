import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";



export default function CustomPieChart({data}) {
  return (
    <div className="flex flex-col items-center">
      <PieChart width={400} height={300} className="scale-[1.5] " >
        <Pie  data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value"  >
          {
		  	data.map((entry, index) => ( <Cell key={`cell-${index}`} fill={entry.color} /> ))
		  }
        </Pie>

      </PieChart>
		<div className=" px-[20px] flex items-center justify-center gap-x-[70px] @max-2xl:gap-x-[40px] gap-y-[20px] flex-wrap " > 
		  {
			data?.map((e,i)=> (
				<span key={i} className={`  relative text-[#121212] dark:text-white  text-sm font-normal`} >  
					<span className="absolute w-[20px] h-[9px] rtl:right-[-24px] ltr:left-[-23px] top-[50%] translate-y-[-50%]" style={{backgroundColor : e.color }} >  </span>
					{e.name} : {e.value} {e.currency} </span>
			))
		  }
		</div>
    </div>
  );
}
