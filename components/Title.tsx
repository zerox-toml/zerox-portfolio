

export default function Title(props:any) {

  return (
    <div className="customLine relative before:bottom-0 borderLeft z-20 py-10 flex flex-wrap gap-8 justify-center sm:justify-between items-center">
      <span className="ml-12 customCircle relative tracking-wide capitalize text-3xl text-gray-300 font-medium">
        {props.name}
      </span>

      
    </div>
  )
}
